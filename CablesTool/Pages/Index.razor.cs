using CablesTool.Services;
using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CablesTool.Pages
{
    partial class Index
    {
        [Inject]
        public FileManager FileManager { get; set; }
        public string FileContent { get; set; }
        [Parameter]
        public string ProjectNameRouteParam { get; set; }

        protected override async Task OnInitializedAsync()
        {
            InitContent();
            await Task.Delay(100);

        }

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            InitContent();
            await Task.Delay(100);
        }

        private void InitContent()
        {
            if (ProjectNameRouteParam == null)
                FileContent = FileManager.CableProjects.First().Content;
            else
                FileContent = FileManager.CableProjects.FirstOrDefault(p => p.Name == ProjectNameRouteParam).Content;
        }
    }
}
