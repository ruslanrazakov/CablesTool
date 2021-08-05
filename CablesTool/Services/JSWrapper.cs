using Microsoft.Extensions.Logging;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CablesTool.Services
{
    /// <summary>
    /// Wrapper for JS invoke functions in patchProcessor.js
    /// </summary>
    public class JSWrapper
    {
        private readonly IJSRuntime js;
        private readonly ILogger logger;

        public JSWrapper(IJSRuntime jSRuntime, ILogger<JSWrapper> logger)
        {
            js = jSRuntime;
            this.logger = logger;
        }

        public async Task SetCablesVariable(string varName, string varValue)
            => await js.InvokeAsync<string>("setVariable", varName, varValue);

        /// <summary>
        /// Sometimes, /wwwroot/CablesProject/index.html cant upload in time in iframe in Index.razor
        /// cuz of weak internet connection or something else, so patch.js is undefined. 
        /// This method provides retries and exception handling.
        /// </summary>
        /// <param name="varName"></param>
        /// <param name="varValue"></param>
        /// <returns></returns>
        public async Task TrySetCablesVariableWithRetries(string varName, string varValue)
        {
            TimeSpan nextDelay = TimeSpan.FromSeconds(1);
            bool success = false;
            for (int i = 0; i < 3; i++)
            {
                try
                {
                    logger.LogWarning($"Trying to set {varName} with {varValue} in {i} attempt");
                    await js.InvokeAsync<string>("setVariable", varName, varValue);
                    success = true;
                    logger.LogWarning($"Successfully set {varName} with {varValue} in {i} attempt!");

                    break;
                }
                catch (Exception ex)
                {
                    logger.LogWarning($"Failed setting {varName} in {i} attempt");
                }
                await Task.Delay(nextDelay);
            }
        }

        public async Task<double> GetCablesVariable(string varName)
        {
            return await js.InvokeAsync<double>("getVariable", varName);
        }

        public async Task<double> TryGetCablesVariableWithRetries(string varName)
        {
            TimeSpan nextDelay = TimeSpan.FromSeconds(1);
            double result = 0;
            for (int i = 0; i < 3; i++)
            {
                try
                {
                    logger.LogWarning($"Trying to get {varName}  in {i} attempt");
                    result = await js.InvokeAsync<double>("getVariable", varName);
                }
                catch
                {
                    logger.LogWarning($"Failed getting {varName} in {i} attempt");
                }
                await Task.Delay(nextDelay);
            }
            return result;
        }

        public async Task DownloadFile(string path)
        {
            await js.InvokeVoidAsync("downloadFile", path);
        }
    }
}
