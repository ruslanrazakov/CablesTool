﻿using CablesTool.Data;
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
        [Inject]
        public ApplicationContext ApplicationContext { get; set; }
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
                Logger.Log(LogLevel.Information, VideoTime.ToString()); 
            }
        }
        private Timer videoTimer;

        protected override async Task OnInitializedAsync()
        {
            ProjectContent.ChangeProject += OnProjectChanged;
            ProjectContent.ChangeFile += OnFileChanged;
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

        private void OnFileChanged(string fileName)
        {
            if (fileName != VariableSetValue)
            {
                Task.Run(() => SetVariable(VariableSetName, fileName));
            }
        }

        private void OnProjectChanged(string content)
        {
            ProjectPath = content;
            ProjectName = "Project";
            StateHasChanged();
        }

        private async Task SetVariable(string varName, string varValue)
        {
           await JS.InvokeAsync<string>("setVariable", varName, varValue);
        }

        private async Task ChangeVariableName(string varName)
        {
            await JS.InvokeAsync<string>("setVariable", varName, VariableSetValue);
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
            var time = await JS.InvokeAsync<double>("getVariable", "i_getTime");
            VideoTime = Convert.ToInt32(time, CultureInfo.InvariantCulture);
            await InvokeAsync(StateHasChanged);
        }

        private async Task Stop()
        {
            videoTimer.Elapsed -= VideoTimer_Elapsed;
            videoTimer.Stop();
            await JS.InvokeAsync<string>("setVariable", "i_videoSpeed", "0");
        }

        private async Task InputMouseDown()
        {
            await JS.InvokeAsync<string>("setVariable", "i_videoSpeed", "0");
        }

        private async Task InputMouseUp()
        {
            await JS.InvokeAsync<string>("setVariable", "i_videoSpeed", "1");
        }

        private async Task VideoSliderChanged(string step)
        {
            await JS.InvokeAsync<string>("setVariable", "i_videoTime", step);
            Logger.Log(LogLevel.Information, step);
        }
    }
}
