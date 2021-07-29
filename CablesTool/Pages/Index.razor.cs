using CablesTool.Data;
using CablesTool.Services;
using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using CablesTool.Components;
using System.Security.Claims;

namespace CablesTool.Pages
{
    partial class Index
    {
        [Inject] 
        IHttpContextAccessor httpContextAccessor { get; set; }
        [Inject]
        FileChangedEventsService<long> UploadEvents { get; set; }
        [Inject]
        ApplicationContext ApplicationContext { get; set; }
        [Inject]
        ILogger <Index> Logger { get; set; }
        [Inject]
        UserWorkspaceService UserWorkspaceService { get; set; }
        List<CommentEntity> commentEntities = new();
        string CommentContent { get; set; }
        string ProjectPath { get; set; }
        string UserName { get; set; }
        string VideoName { get; set; }
        double VideoLength { get; set; }
        CablesPlayer cablesPlayerRef;
        string userIdentifier;

        protected override void OnInitialized()
        {
            ProjectPath = "CablesProject/index.html";
            UploadEvents.FileChangedAsync += OnFileChangedAsync;
            userIdentifier = httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);

            UpdatePlayer();
            UpdateCommentsSection();
            UserName = httpContextAccessor.HttpContext.User.Identity.Name ?? "Guest";
        }

        private async Task OnFileChangedAsync(long id)
        {
            UserWorkspaceService.ChangeCurrentWorkspaceVideoId(id, userIdentifier);

            UpdatePlayer();
            UpdateCommentsSection();
            await cablesPlayerRef.ChangeVideoContent(VideoName);
            StateHasChanged();
        }

        private void UpdatePlayer()
        {
            var fileId = UserWorkspaceService.GetVideoId(userIdentifier);
            VideoName = UserWorkspaceService.GetVideoName(fileId);
            VideoLength = UserWorkspaceService.GetVideoLength(fileId);
        }

        /// <summary>
        /// Comments section
        /// TODO: Comments should be encapsulated in separate razor component
        /// </summary>
        /// <returns></returns>
        private async Task AddComment()
        {
            if(CommentContent != null && CommentContent != String.Empty)
            {
                ApplicationContext.Comments.Add(new CommentEntity()
                {
                    VideoFileId = UserWorkspaceService.GetVideoId(userIdentifier),
                    UserName = this.UserName,
                    Content = CommentContent,
                    Time = cablesPlayerRef.CurrentTime,
                    Date = DateTime.Now
                }) ;
                await ApplicationContext.SaveChangesAsync();
            }
            UpdateCommentsSection();
            CommentContent = String.Empty;
        }

        private void UpdateCommentsSection()
        {
            var fileId = UserWorkspaceService.GetVideoId(userIdentifier);
            commentEntities = ApplicationContext.Comments?.Where(c => c.VideoFileId == fileId)
                                                          .OrderByDescending(c => c.Date)
                                                          .ToList();
            InvokeAsync(StateHasChanged);
        }

        private async Task CommentClicked(double time)
        {
            await cablesPlayerRef.ChangeVideoPosition(time.ToString());
        }
    }
}
