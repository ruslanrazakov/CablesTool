using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CablesTool.Data
{
    public class VideoFileEntity
    {
        public long Id { get; set; }
        public long FolderId { get; set; }
        public string Name { get; set; }
        public string Path { get; set; }
        public double Length { get; set; }
        public string UserIdentifier { get; set; }
    }

    public class CommentEntity
    {
        public long Id { get; set; }
        public string UserName { get; set; }
        public long VideoFileId { get; set; }
        public DateTime Date { get; set; }
        public double Time { get; set; }
        public string Content { get; set; }
    }
}
