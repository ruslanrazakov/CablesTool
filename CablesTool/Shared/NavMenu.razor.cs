using CablesTool.Data;
using CablesTool.Services;
using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CablesTool.Shared
{
    partial class NavMenu
    {

        [Inject]
        public FileManager FileManager { get; set; }
        [Inject]
        public ProjectContent<string> ProjectContent { get; set; }
        public List<CableProject> CableProjects { get; set; }
        protected override async Task OnInitializedAsync()
        {
            CableProjects = new();
            CableProjects = FileManager.Upload();
            await Task.Delay(20);
        }

        private void OnFileClicked(string projectPath, string projectName, string comments)
        {
            ProjectContent.Set(projectPath, projectName, comments);
        }
    }
}
