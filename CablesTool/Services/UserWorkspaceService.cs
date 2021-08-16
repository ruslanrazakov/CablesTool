using CablesTool.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CablesTool.Services
{
    /// <summary>
    /// This service saves user workspace, specifically, last file user worked with
    /// </summary>
    public class UserWorkspaceService
    {
        public UserWorkspaceEntity CurrentUserWorkspace { get; set; }
        public string UserIdentifier { get; set; }
        public long CurrentVideoId { get; set; }
        public event Func<Task> videoUploaded;
        private ApplicationContext _context;
        
        public UserWorkspaceService(ApplicationContext context)
        {
            _context = context;
        }

        public void UploadFinished()
        {
            videoUploaded();
        }

        /// <summary>
        /// TODO: Create IMEMORYCACHE facade for cahing results from DB
        /// </summary>
        /// <param name="userIdentifier"></param>
        /// <returns></returns>
        public async Task <long> GetVideoId(string userIdentifier)
        {
            if (!_context.UserWorkspaces.Any(uw => uw.UserIdentifier == userIdentifier))
            {
                _context.UserWorkspaces.Add(new UserWorkspaceEntity()
                {
                    UserIdentifier = userIdentifier
                });
                await _context.SaveChangesAsync();
                return _context.UserWorkspaces.First().CurrentVideoId;
            }
            else
                return _context.UserWorkspaces.First(user => user.UserIdentifier == userIdentifier).CurrentVideoId;
        }

        /// <summary>
        /// TODO: Create IMEMORYCACHE facade for cahing results from DB
        /// </summary>
        /// <param name="userIdentifier"></param>
        /// <returns></returns>
        public async Task ChangeCurrentWorkspaceVideoId(long id, string userIdentifier)
        {
            var userWorkspace = _context.UserWorkspaces.FirstOrDefault(uw => uw.UserIdentifier == userIdentifier);
            userWorkspace.CurrentVideoId = id;
            await _context.SaveChangesAsync();
        }

        /// <summary>
        /// TODO: Create IMEMORYCACHE facade for cahing results from DB
        /// </summary>
        /// <param name="userIdentifier"></param>
        /// <returns></returns>
        public string GetVideoName(long videoId)
        {
            if (_context.VideoFiles.Any(file => file.Id == videoId))
                return _context.VideoFiles.FirstOrDefault(file => file.Id == videoId).Path ?? String.Empty;
            else
                return String.Empty;
        }

        /// <summary>
        /// TODO: Create IMEMORYCACHE facade for cahing results from DB
        /// </summary>
        /// <param name="userIdentifier"></param>
        /// <returns></returns>
        public double GetVideoLength(long videoId)
        {
            if (_context.VideoFiles.Any(file => file.Id == videoId))
                return _context.VideoFiles.FirstOrDefault(file => file.Id == videoId).Length;
            else
                return 0;
        }
    }
}
