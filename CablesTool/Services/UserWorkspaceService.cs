using CablesTool.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
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
        private ApplicationContext _context;

        public UserWorkspaceService(ApplicationContext context)
        {
            _context = context;
        }

        public long? GetCurrentVideoIdFromWorkspace(string userIdentifier)
        {
            var userWorkspace = _context.UserWorkspaces.FirstOrDefault(uw => uw.UserIdentifier == userIdentifier);
            if (userWorkspace == null)
            {
                _context.UserWorkspaces.Add(new UserWorkspaceEntity()
                {
                    UserIdentifier = userWorkspace.UserIdentifier
                });
                _context.SaveChanges();
            }
            return userWorkspace.CurrentVideoId;
        }

        public void ChangeCurrentWorkspaceVideoId(long id, string userIdentifier)
        {
            var userWorkspace = _context.UserWorkspaces.FirstOrDefault(uw => uw.UserIdentifier == userIdentifier);
            userWorkspace.CurrentVideoId = id;
            _context.SaveChanges();
        }
    }
}
