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
        UploadEventsService<long> UploadEvents { get; set; }
        [Inject]
        ApplicationContext ApplicationContext { get; set; }
        [Inject]
        ILogger <Index> Logger { get; set; }
        [Inject]
        UserWorkspaceService UserWorkspaceService { get; set; }
        VideoFileEntity videoFileEntity = new();
        List<CommentEntity> commentEntities = new();
        string CommentContent { get; set; }
        string ProjectPath { get; set; }
        string UserName { get; set; }
        string VideoName { get; set; }
        double VideoLength { get; set; }
        CablesPlayer cablesPlayerRef;
        UserWorkspaceEntity userWorkspace;
        string userIdentifier;

        protected override void OnInitialized()
        {
            ProjectPath = "CablesProject/index.html";
            UploadEvents.FileUploadedAsync += OnFileUploadedAsync;

            //TODO: need refactoring! Should be encapsulated in some userworkspace service
            //in porgress
            userWorkspace = GetUserWorkspace();
            if (userWorkspace == null)
            {
                ApplicationContext.UserWorkspaces.Add(new UserWorkspaceEntity()
                {
                    UserIdentifier = userIdentifier
                });
                ApplicationContext.SaveChanges();
            }
            else if(userWorkspace.CurrentVideoId != null )
            {
                InitCablesPlayer(userWorkspace.CurrentVideoId);
                UpdateCommentsSection();

            }

            UserName = httpContextAccessor.HttpContext.User.Identity.Name ?? "Guest";
        }

        private UserWorkspaceEntity GetUserWorkspace()
        {
            userIdentifier = httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);
            return ApplicationContext.UserWorkspaces.FirstOrDefault(uw => uw.UserIdentifier == userIdentifier);
        }

        private async Task OnFileUploadedAsync(long id)
        {
            userWorkspace.CurrentVideoId = id;
            ApplicationContext.SaveChanges();

            InitCablesPlayer(id);
            UpdateCommentsSection();
           
            await cablesPlayerRef.ChangeVideoContent(VideoName);
            StateHasChanged();
        }

        private void InitCablesPlayer(long? id)
        {
            videoFileEntity = ApplicationContext.VideoFiles.First(v => v.Id == id);
            VideoName = videoFileEntity.Name;
            VideoLength = videoFileEntity.Length;
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
                    VideoFileId = videoFileEntity.Id,
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
            commentEntities = ApplicationContext.Comments?.Where(c => c.VideoFileId == videoFileEntity.Id)
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
