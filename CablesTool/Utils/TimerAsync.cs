using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace CablesTool.Utils
{
    public class TimerAsync
    {
        private CancellationTokenSource cts;
        public int Delay { get; private set; }

        public TimerAsync(int delay)
        {
            Delay = delay;
        }

        public async Task Start(Func<Task> task)
        {
            cts = new CancellationTokenSource();

            while(!cts.IsCancellationRequested)
            {
                await task();
                await Task.Delay(Delay);
            }
        }

        public async Task Stop(Func<Task> task)
        {
            await task();
            cts?.Cancel();
        }

        public void Stop()
        {
            cts?.Cancel();
        }
    }
}
