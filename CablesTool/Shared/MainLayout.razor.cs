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

        protected override async Task OnInitializedAsync()
        {
            if (!LoginState.IsLoggedIn)
            {
                NavigationManager.NavigateTo("https://oauth.yandex.ru/authorize?response_type=token&client_id=30de933f77394525b36f98af1ea3ffd1");
                Logger.LogWarning("Redirect to Yandex Oauth");
                LoginState.SetLogin(true, "user");
            }
        }
    }
}
