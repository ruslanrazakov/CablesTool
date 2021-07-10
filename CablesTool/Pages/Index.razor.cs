using CablesTool.Data;
using CablesTool.Services;
using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.Logging;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using System.Timers;
using Microsoft.AspNetCore.Http;
using Nito.AsyncEx.Synchronous;

namespace CablesTool.Pages
{
    partial class Index : IDisposable
    {
        [Inject] 
        IHttpContextAccessor httpContextAccessor { get; set; }
        [Inject]
        IJSRuntime JS { get; set; }
        [Inject]
        public UploadEvents<long> UploadEvents { get; set; }
        [Inject]
        public ApplicationContext ApplicationContext { get; set; }
        [Inject]
        public ILogger <Index> Logger { get; set; }
        public VideoFileEntity videoFileEntity = new();
        public List<CommentEntity> commentEntities = new();
        public string CommentContent { get; set; }
        public string ProjectPath { get; set; }
        public string UserName { get; set; }
        public double VideoTime { get; set; }
        private Timer videoTimer = new Timer() { Interval = 200 };
        private string VideoName { get; set; } = "Video not selected";

        protected override async Task OnInitializedAsync()
        {
            ProjectPath = "CablesProject/index.html";
            UploadEvents.FileUploaded += FileUploaded;

            if (ApplicationContext.VideoFiles.Count() > 0)
            {
                videoFileEntity = ApplicationContext.VideoFiles.First();
                VideoName = videoFileEntity.Name;
                commentEntities = ApplicationContext.Comments?.Where(c => c.VideoFileId == videoFileEntity.Id).ToList();
            }

            UserName = httpContextAccessor.HttpContext.User.Identity.Name != null ?
                httpContextAccessor.HttpContext.User.Identity.Name : "Guest";
            videoTimer.Elapsed += VideoTimer_Elapsed;
        }

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            try
            {
                // !important for successfull uploading ProjectPath in Iframe!
                await Task.Delay(1000);
                if (firstRender)
                {
                    if (videoFileEntity.Name != null && videoFileEntity.Name != String.Empty)
                    {
                        await SetCablesVariable("s_videoPath", videoFileEntity.Name);
                        await Stop(); //!important cuz if video starts immediately after page uploading - slider doesnt work
                        Logger.LogWarning("ONAFTERRENDERASYNC FINISHED");

                    }
                }
            }
            catch(Exception ex)
            {
                Logger.LogWarning("OnAfterRenderAsync exception! " + ex.ToString());
            }
        }

        private void FileUploaded(long videoFileId)
        {
            videoTimer.Stop();

            videoFileEntity = ApplicationContext.VideoFiles.First(v => v.Id == videoFileId);
            Task.Run(async () => { await SetCablesVariable("i_videoSpeed", "0"); });
            Task.Run(async () => { await SetCablesVariable("s_videoPath", videoFileEntity.Name); });
            UpdateCommentsSection();
            VideoName = videoFileEntity.Name;
            InvokeAsync(StateHasChanged);
            Logger.LogInformation($"FileUploaded for {videoFileEntity.Name} INVOKED in Index.razor.cs");

        }

        #region SLIDER SETUP
        private async Task Play()
        {
            videoTimer.Start();

            await SetCablesVariable("i_videoSpeed", "1");
            Logger.LogWarning("STARTED");

        }

        private async Task Stop()
        {
            videoTimer.Stop();
            await SetCablesVariable("i_videoSpeed", "0");
            Logger.LogWarning("STOPPED");

        }

        private void VideoTimer_Elapsed(object sender, ElapsedEventArgs e)
        {
            try
            {
                var task = Task.Run(async () => await GetCablesVariable("i_getTime"));
                var time = task.WaitAndUnwrapException();
                VideoTime = Math.Round(time, 0);
                Logger.LogWarning(VideoTime.ToString());
                InvokeAsync(StateHasChanged);
            }
            catch(Exception ex)
            {
                videoTimer.Stop();
                videoTimer.Elapsed -= VideoTimer_Elapsed;
                Logger.LogError(ex.ToString());
            }
        }

        private async Task VideoSliderInputMouseDown()
        {
            await Stop();
        }

        private async Task VideoSliderInputMouseUp()
        {
            await Play();
        }

        private async Task VideoSliderChanged(string step)
        {
            await SetCablesVariable("i_videoTime", step);
        }

        #endregion

        private async Task AddComment()
        {
            await Stop();

            if(CommentContent != String.Empty)
            {
                ApplicationContext.Comments.Add(new CommentEntity()
                {
                    VideoFileId = videoFileEntity.Id,
                    UserName = this.UserName,
                    Content = CommentContent,
                    Time = VideoTime,
                    Date = DateTime.Now
                }) ;
                await ApplicationContext.SaveChangesAsync();
            }
            UpdateCommentsSection();
        }

        private void UpdateCommentsSection()
        {
            commentEntities = ApplicationContext.Comments?.Where(c => c.VideoFileId == videoFileEntity.Id).OrderByDescending(c => c.Date).ToList();
            InvokeAsync(StateHasChanged);
        }

        private async Task SetCablesVariable(string varName, string varValue)
            => await JS.InvokeAsync<string>("setVariable", varName, varValue);

        private async Task<double> GetCablesVariable(string varName)
        {
            return await JS.InvokeAsync<double>("getVariable", varName);
        }

        public void Dispose()
        {
            videoTimer.Stop();
            videoTimer.Elapsed -= VideoTimer_Elapsed;
            Logger.LogWarning("DISPOSED");
        }
    }
}
