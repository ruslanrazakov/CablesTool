using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CablesTool.Data
{
    public class VideoFileEntity
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Path { get; set; }
    }

    public class CommentEntity
    {
        public int Id { get; set; }
        public DateTime Time { get; set; }
        public string Content { get; set; }
    }
}
