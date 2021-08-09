using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace CablesTool.Data
{
    public class RootFolderEntity
    {
        public long Id { get; set; }
        public string Name { get; set; }
        [Column(TypeName = "TEXT")]
        public FolderStatus Status { get; set; }
        public string Path { get; set; }
    }

    public enum FolderStatus
    {
        [EnumMember(Value = "Active")]
        Active,
        [EnumMember(Value = "Archived")]
        Archived,
        [EnumMember(Value = "Deleted")]
        Deleted,
    }
}
