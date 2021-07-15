using Microsoft.Extensions.Logging;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CablesTool.Services
{
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

        public async Task TrySetCablesVariableWithRetries(string varName, string varValue)
        {
            TimeSpan nextDelay = TimeSpan.FromSeconds(1);
            bool success = false;
            for (int i = 0; i < 5; i++)
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
            if(!success) // last try, and call exception
                await js.InvokeAsync<string>("setVariable", varName, varValue);
        }

        public async Task<double> GetCablesVariable(string varName)
        {
            return await js.InvokeAsync<double>("getVariable", varName);
        }
    }
}
