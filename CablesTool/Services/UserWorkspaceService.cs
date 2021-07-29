using CablesTool.Data;
using System;
using System.Collections.Generic;
using System.Linq;

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
        private ApplicationContext _context;

        public UserWorkspaceService(ApplicationContext context)
        {
            _context = context;
        }

        /// <summary>
        /// TODO: Create IMEMORYCACHE facade for cahing results from DB
        /// </summary>
        /// <param name="userIdentifier"></param>
        /// <returns></returns>
        public long GetVideoId(string userIdentifier)
        {
            if (!_context.UserWorkspaces.Any())
            {
                _context.UserWorkspaces.Add(new UserWorkspaceEntity()
                {
                    UserIdentifier = userIdentifier
                });
                _context.SaveChanges();
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
        public void ChangeCurrentWorkspaceVideoId(long id, string userIdentifier)
        {
            var userWorkspace = _context.UserWorkspaces.FirstOrDefault(uw => uw.UserIdentifier == userIdentifier);
            userWorkspace.CurrentVideoId = id;
            _context.SaveChanges();
        }

        /// <summary>
        /// TODO: Create IMEMORYCACHE facade for cahing results from DB
        /// </summary>
        /// <param name="userIdentifier"></param>
        /// <returns></returns>
        public string GetVideoName(long videoId)
        {
            return _context.VideoFiles.FirstOrDefault(file => file.Id == videoId).Name ?? String.Empty;
        }

        /// <summary>
        /// TODO: Create IMEMORYCACHE facade for cahing results from DB
        /// </summary>
        /// <param name="userIdentifier"></param>
        /// <returns></returns>
        public double GetVideoLength(long videoId)
            => _context.VideoFiles.First(v => v.Id == videoId).Length;
    }
}
