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
        public List<CableProjectEntity> CableProjects { get; set; }
        public FileManager()
        {
            FilesHierarchy = new();
        }


        public List<CableProjectEntity> Upload()
        {
            CableProjects = new();

            _projectsDirPath = AppDomain.CurrentDomain.BaseDirectory + "wwwroot/Projects/";
            var projects = new DirectoryInfo(_projectsDirPath).GetDirectories();
            foreach (var project in projects)
            {
                //FilesHierarchy.Add(project.Name, GetExecutableFileName(project.GetFiles()));
                var files = project.GetFiles();
                CableProjects.Add(new CableProjectEntity()
                {
                    FolderName = project.Name,
                    Name = GetExecutableFileName(files),
                    Path = GetServerPathToFile(project.FullName) + @"\index.html",
                    Files = GetDirContent(files),
                });
            }
            return CableProjects;
            //FileContent = await File.ReadAllTextAsync(_projectsDirPath);
        }

        private string GetServerPathToFile(string fullName)
        {
            return fullName.Split("wwwroot").Last();
        }

        private List <string> GetDirContent(FileInfo[] files)
        {
            List<string> content = new();
            foreach (var file in files)
            {
                if (file.Name.EndsWith("mp4"))
                {
                    content.Add(file.Name);
                }
            }
            return content;
        }

        private string GetExecutableFileName(FileInfo[] files)
        {
            foreach (var file in files)
                return file.Name.Contains("txt") ? file.Name : String.Empty;

            return String.Empty;
        }
    }
}