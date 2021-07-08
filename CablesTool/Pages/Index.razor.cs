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
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Components.Authorization;

namespace CablesTool.Pages
{
    partial class Index
    {
        [Inject]
        UserManager<IdentityUser> UserManager { get; set; }
        [Inject]
        SignInManager<IdentityUser> SignInManager { get; set; }
        [CascadingParameter] 
        private Task<AuthenticationState> authenticationStateTask { get; set; }
        AuthenticationState authState;
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
        public string VideoPath { get; set; }
        public string CommentContent { get; set; }
        public string ProjectPath { get; set; }
        public string UserName { get; set; }
        public double VideoTime { get; set; }
        private Timer videoTimer = new Timer() { Interval = 200 };

        protected override async Task OnInitializedAsync()
        {
            ProjectPath = "CablesProject/index.html";
            UploadEvents.FileUploaded += FileUploaded;
            if (ApplicationContext.VideoFiles.Count() > 0)
            {
                videoFileEntity = ApplicationContext.VideoFiles.First();
                commentEntities = ApplicationContext.Comments?.Where(c => c.VideoFileId == videoFileEntity.Id).ToList();
            }
            authState = await authenticationStateTask;
            var user = await UserManager.FindByNameAsync("razakov.rus@yandex.ru");
            /*if (user != null)
                UserName = "razakov.rus";
            else
                UserName = "Guest";*/
            if(authState.User.Identities.First().IsAuthenticated)
                UserName = "Razakov Ruslan";
            else
                UserName = "Guest";
        }

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            await Task.Delay(500);
            if (firstRender)
            {
                // !important for successfull uploading ProjectPath in Iframe!
                if (videoFileEntity.Name != String.Empty)
                {
                    await SetCablesVariable("s_videoPath", videoFileEntity.Name);
                    await SetCablesVariable("i_videoSpeed", "0"); //!important cuz if video starts immediately after page uploading - slider doesnt work
                }
            }
        }

        private void FileUploaded(long videoFileId)
        {
            videoFileEntity = ApplicationContext.VideoFiles.First(v => v.Id == videoFileId);
            Task.Run(() => SetCablesVariable("s_videoPath", videoFileEntity.Name));
            InvokeAsync(StateHasChanged);
        }

        #region SLIDER PLAY STOP
        private async Task Play()
        {
            videoTimer.Elapsed += VideoTimer_Elapsed;
            videoTimer.Start();

            await SetCablesVariable("i_videoSpeed", "1");
        }

        private async void VideoTimer_Elapsed(object sender, ElapsedEventArgs e)
        {
            var time = await GetCablesVariable("i_getTime");
            Logger.LogInformation("string" + time);
            VideoTime = Math.Round(time, 0);
            Logger.LogInformation("double" + VideoTime.ToString());

            await InvokeAsync(StateHasChanged);
        }
        private async Task InputMouseDown()
        {
            await SetCablesVariable("i_videoSpeed", "0");
        }

        private async Task InputMouseUp()
        {
            await SetCablesVariable("i_videoSpeed", "1");
        }

        private async Task VideoSliderChanged(string step)
        {
            await SetCablesVariable("i_videoTime", step);
        }

        private async Task Stop()
        {
            videoTimer.Elapsed -= VideoTimer_Elapsed;
            videoTimer.Stop();
            await SetCablesVariable("i_videoSpeed", "0");
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
                    Content = CommentContent,
                    Time = VideoTime,
                    Date = DateTime.Now
                }) ;
                await ApplicationContext.SaveChangesAsync();
            }
            commentEntities = ApplicationContext.Comments?.Where(c => c.VideoFileId == videoFileEntity.Id).OrderByDescending(c=>c.Date).ToList();
            StateHasChanged();
        }

        private async Task SetCablesVariable(string varName, string varValue)
            => await JS.InvokeAsync<string>("setVariable", varName, varValue);

        private async Task<double> GetCablesVariable(string varName)
        {
            return await JS.InvokeAsync<double>("getVariable", varName);
        }
    }
}
