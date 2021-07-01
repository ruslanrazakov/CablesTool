using BlazorInputFile;
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
        protected override async Task OnInitializedAsync()
        {
            CableProjects = new();
            CableProjects = FileManager.Upload();
        }

        private void OnFileClicked(string projectPath, string projectName, string comments)
        {
            ProjectContent.Set(projectPath, projectName, comments);
        }

        private void ToggleUploadFileMenu()
        {
            uploadFileMenuOpened = !uploadFileMenuOpened;
            StateHasChanged();
        }
    }
}
