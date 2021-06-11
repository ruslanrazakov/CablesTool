using CablesTool.Data;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace CablesTool.Services
{
    public class FileManager
    {
        public string FileContent { get; set; }
        public string _projectsDirPath;
        public Dictionary<string, string> FilesHierarchy { get; set; }
        public List <CableProject> CableProjects { get; set; }
        public FileManager()
        {
            FilesHierarchy = new();
        }

        private string GetFileName() => "test.txt";

        public List<CableProject> Upload()
        {
            CableProjects = new();

            _projectsDirPath = AppDomain.CurrentDomain.BaseDirectory + "wwwroot/Projects/";
            var projects = new DirectoryInfo(_projectsDirPath).GetDirectories();
            foreach(var project in projects)
            {
                //FilesHierarchy.Add(project.Name, GetExecutableFileName(project.GetFiles()));
                var files = project.GetFiles();
                CableProjects.Add(new CableProject()
                {
                    FolderName = project.Name,
                    Name = GetExecutableFileName(files),
                    Path = project.FullName,
                    Content = GetDirContent(files)
                });
            }
            return CableProjects;
            //FileContent = await File.ReadAllTextAsync(_projectsDirPath);
        }

        private string GetDirContent(FileInfo[] files)
        {
            foreach (var file in files)
                return file.Name.Contains("txt") ? File.ReadAllText(file.FullName) : String.Empty;

            return String.Empty;
        }

        private string GetExecutableFileName(FileInfo[] files)
        {
            foreach (var file in files)
                return file.Name.Contains("txt") ? file.Name : String.Empty;

            return String.Empty;
        }
    }
}
