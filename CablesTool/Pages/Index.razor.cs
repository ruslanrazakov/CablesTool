using CablesTool.Services;
using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.Logging;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Globalization;
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
        public string DebugVariable { get; set; }
        public bool VariableIsBinded { get; set; }
        bool iFrameMouseover;
        int _getAccessorsAmount;
        public int GetAccessorsAmount
        {
            get => _getAccessorsAmount;
            set
            {
                _getAccessorsAmount = value;
                StateHasChanged();
            }
        }
        int _setAccessorsAmount;
        public int SetAccessorsAmount
        {
            get => _setAccessorsAmount;
            set
            {
                _setAccessorsAmount = value;
                StateHasChanged();
            }
        }
        double _videoTime;
        public double VideoTime
        {
            get
            {
                return _videoTime;
            }
            set
            {
                _videoTime = value;
               // JS.InvokeAsync<string>("setVariable", "i_videoSetTime", VideoTime);
                Logger.Log(LogLevel.Information, VideoTime.ToString()); 
            }
        }
        private Timer videoTimer;

        protected override async Task OnInitializedAsync()
        {
            ProjectContent.OnChange += ChangeContent;
            VariableSetName = "s_videoPath";
            VariableSetValue = "test.mp4";
            VariableGetName = "i_rotY";
            GetAccessorsAmount = 1;
            SetAccessorsAmount = 1;

            videoTimer = new Timer()
            {
                Interval = 100
            };

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

        private async Task Play()
        {
            videoTimer.Elapsed += VideoTimer_Elapsed;
            videoTimer.Start();

            await JS.InvokeAsync<string>("setVariable", "i_videoSpeed", "1");
        }

        private async void VideoTimer_Elapsed(object sender, ElapsedEventArgs e)
        {
            var time = await JS.InvokeAsync<object>("getVariable", "i_getTime");
            var i = time.ToString();
            VideoTime = Convert.ToDouble(i, CultureInfo.InvariantCulture);
            await InvokeAsync(StateHasChanged);
        }

        private async Task Stop()
        {
            videoTimer.Elapsed -= VideoTimer_Elapsed;
            videoTimer.Stop();
            await JS.InvokeAsync<string>("setVariable", "i_videoSpeed", "0");
        }

        private async Task VideoSliderChanged(string step)
        {
            await JS.InvokeAsync<string>("setVariable", "i_videoTime", step);
            await JS.InvokeAsync<string>("setVariable", "i_videoSpeed", "0");

            Logger.Log(LogLevel.Information, step);
        }
    }
}
