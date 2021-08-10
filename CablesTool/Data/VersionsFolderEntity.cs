using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CablesTool.Data
{
    public class FileFolderEntity
    {
        public long Id { get; set; }
        public long? RootFolderId { get; set; }
        public string Name { get; set; }
        [Column(TypeName = "TEXT")]
        public FolderStatus Status { get; set; }
        public string Path { get; set; }
    }
}
