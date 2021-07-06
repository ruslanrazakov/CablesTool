using CablesTool.Services;
using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace CablesTool.Shared
{
    partial class MainLayout
    {
        [Inject]
        NavigationManager NavigationManager { get; set; }
        [Inject]
        public ILogger<MainLayout> Logger { get; set; }
        [Inject]
        public LoginState LoginState { get; set; }
        public bool Authentificated { get; set; }
    }
}
