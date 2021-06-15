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
        [Inject]
        public ProjectContent<string> ProjectContent { get; set; }
        public string FileContent { get; set; }

        protected override async Task OnInitializedAsync()
        {
            ProjectContent.OnChange += ChangeContent;
            await Task.Delay(100);
        }

        private void ChangeContent(string content)
        {
            FileContent = content;
            StateHasChanged();
        }
    }
}
