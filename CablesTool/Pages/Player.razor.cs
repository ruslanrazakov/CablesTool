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
    partial class Player
    {
        [CascadingParameter(Name = "NameIdentifier")] 
        public string NameIdentifier { get; set; }
        [CascadingParameter(Name = "UserName")]
        public string UserName { get; set; }
        [Inject]
        ApplicationContext ApplicationContext { get; set; }
        [Inject]
        ILogger <Index> Logger { get; set; }
        [Inject]
        UserWorkspaceService UserWorkspaceService { get; set; }
        [Parameter]
        public string VideoId { get; set; }
        List<CommentEntity> commentEntities = new();
        string CommentContent { get; set; }
        string ProjectPath { get; set; }
        string VideoName { get; set; }
        double VideoLength { get; set; }
        CablesPlayer cablesPlayerRef;
        string userIdentifier;

        protected override async Task OnInitializedAsync()
        {
            ProjectPath = "CablesProject/index.html";
            try
            {
                userIdentifier = NameIdentifier;
            }
            catch(Exception ex)
            {
                Logger.LogWarning(ex.ToString());
            }
            await UpdatePlayer();
            await UpdateCommentsSection();
        }

        private async Task UpdatePlayer()
        {
            var fileId = Convert.ToInt32(VideoId);
            VideoName = UserWorkspaceService.GetVideoName(fileId).Split("wwwroot").Last();
            
            VideoLength = UserWorkspaceService.GetVideoLength(fileId);
            StateHasChanged();
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
                    VideoFileId = await UserWorkspaceService.GetVideoId(userIdentifier),
                    UserName = UserName,
                    Content = CommentContent,
                    Time = cablesPlayerRef.CurrentTime,
                    Date = DateTime.Now
                }) ;
                await ApplicationContext.SaveChangesAsync();
            }
            await UpdateCommentsSection();
            CommentContent = String.Empty;
        }

        private async Task UpdateCommentsSection()
        {
            var fileId = await UserWorkspaceService.GetVideoId(userIdentifier);
            commentEntities = ApplicationContext.Comments?.Where(c => c.VideoFileId == fileId)
                                                          .OrderByDescending(c => c.Date)
                                                          .ToList();
            StateHasChanged();
        }

        private async Task CommentClicked(double time)
        {
            await cablesPlayerRef.ChangeVideoPosition(time.ToString());
        }
    }
}
