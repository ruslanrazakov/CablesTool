using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CablesTool.Data
{
    public class CableProject
    {
        public string Name { get; set; }
        public string FolderName { get; set; }
        public string Path { get; set; }
        public string Content { get; set; }
        public List<string> Files { get; set; }
    }
}
