
using CablesTool.Data;
using CablesTool.Services;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.Extensions.Logging;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace CablesTool.Shared
{
    partial class NavMenu
    {

        [Inject]
        public FileManager FileManager { get; set; }
        [Inject]
        IJSRuntime JS { get; set; }
        [Inject]
        public ProjectContent<string> ProjectContent { get; set; }
        [Inject]
        public ILogger<NavMenu> Logger { get; set; }
        public List<CableProject> CableProjects { get; set; }
        private bool uploadFileMenuOpened;
        private string folderNameToUpload;
        protected override async Task OnInitializedAsync()
        {
            CableProjects = new();
            CableProjects = FileManager.Upload();
        }

        private void OnFileClicked(string fileName)
        {
            ProjectContent.SetVideoFile(fileName);
        }

        private void OnFolderClicked(string projectPath)
        {
            ProjectContent.SetProject(projectPath);
        }

        private void ToggleUploadFileMenu(string folderName)
        {
            if (!uploadFileMenuOpened)
            {
                folderNameToUpload = folderName;
                uploadFileMenuOpened = true;
            }
            else if (uploadFileMenuOpened && folderNameToUpload == folderName)
                uploadFileMenuOpened = false;
            else
                folderNameToUpload = folderName;
        }
    }
}
