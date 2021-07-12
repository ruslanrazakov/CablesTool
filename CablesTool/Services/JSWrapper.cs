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

        public async Task<double> GetCablesVariable(string varName)
        {
            return await js.InvokeAsync<double>("getVariable", varName);
        }
    }
}
