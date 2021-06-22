using CablesTool.Services;
using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.Logging;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Timers;

namespace CablesTool.Pages
{
    partial class Index
    {
        [Inject]
        public ILogger<Index> Logger { get; set; }
        [Inject]
        public ProjectContent<string> ProjectContent { get; set; }
        [Inject]
        public IJSRuntime JS { get; set; }
        [Inject]
        public ToastService ToastService { get; set; }
        public string FileContent { get; set; }
        public string ProjectName { get; set; }
        public string ProjectPath { get; set; }
        public string VariableSetName { get; set; }
        public string VariableSetValue { get; set; }
        public string VariableGetName { get; set; }
        public string VariableGetValue { get; set; }
        public bool Error { get; set; }
        public string DebugVariable { get; set; }
        public bool VariableIsBinded { get; set; }
        bool iFrameMouseover;

        protected override void OnInitialized()
        {
            ProjectContent.OnChange += ChangeContent;
            VariableSetName = "myVideoStr";
            VariableSetValue = "space.mp4";
        }

        private void ChangeContent(string content, string i, string d)
        {
            ProjectPath = content;
            ProjectName = "Project";
            StateHasChanged();
        }

        private async Task SetVariable()
        {
           await JS.InvokeAsync<string>("setVariable", VariableSetName, VariableSetValue);
        }

        private async Task GetVariable()
        {
            var variable = await JS.InvokeAsync<object>("getVariable", VariableGetName);
            if (variable.ToString() == "undefined")
            {
                DebugVariable = VariableGetName;
            }
            else
                VariableGetValue = variable.ToString();
            StateHasChanged();
        }

        private async Task IFrameMouseMove()
        {
            iFrameMouseover = true;
            while(iFrameMouseover && VariableIsBinded)
            { 
                await Task.Delay(100);
                await GetVariable();
                Logger.Log(LogLevel.Information, "mouseOver");
            }
        }

        private void IFrameMouseOut()
        {
            iFrameMouseover = false;
        }
    }
}
