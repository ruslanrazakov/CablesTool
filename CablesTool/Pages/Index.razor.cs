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
using CablesTool.Components;

namespace CablesTool.Pages
{
    partial class Index
    {
        [Inject] 
        IHttpContextAccessor httpContextAccessor { get; set; }
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
        public string VideoName { get; set; }
        public double VideoLength { get; set; }
        private CablesPlayer cablesPlayerRef;

        protected override void OnInitialized()
        {
            ProjectPath = "CablesProject/index.html";
            UploadEvents.FileUploadedAsync += OnFileUploadedAsync;

            if (ApplicationContext.VideoFiles.Count() > 0)
            {
                InitCablesPlayer(ApplicationContext.VideoFiles.First().Id);
                commentEntities = ApplicationContext.Comments?.Where(c => c.VideoFileId == videoFileEntity.Id).ToList();
            }

            UserName = httpContextAccessor.HttpContext.User.Identity.Name != null ?
                httpContextAccessor.HttpContext.User.Identity.Name : "Guest";
        }

        private async Task OnFileUploadedAsync(long id)
        {
            InitCablesPlayer(id);
            commentEntities = ApplicationContext.Comments?.Where(c => c.VideoFileId == videoFileEntity.Id).ToList();
            await cablesPlayerRef.ChangeVideoContent(VideoName);
            StateHasChanged();
        }

        private void InitCablesPlayer(long id)
        {
            videoFileEntity = ApplicationContext.VideoFiles.First(v => v.Id == id);
            VideoName = videoFileEntity.Name;
            VideoLength = videoFileEntity.Length;
        }

        private async Task AddComment()
        {
            if(CommentContent != String.Empty)
            {
                ApplicationContext.Comments.Add(new CommentEntity()
                {
                    VideoFileId = videoFileEntity.Id,
                    UserName = this.UserName,
                    Content = CommentContent,
                    Time = cablesPlayerRef.CurrentTime,
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

        private async Task CommentClicked(double time)
        {
            await cablesPlayerRef.ChangeVideoPosition(time.ToString());
        }
    }
}
