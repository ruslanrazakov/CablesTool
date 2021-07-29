using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CablesTool.Data
{
    public class UserWorkspaceEntity
    {
        public long Id { get; set; }
        public string UserIdentifier { get; set; }
        public long CurrentVideoId { get; set; }
    }
}
