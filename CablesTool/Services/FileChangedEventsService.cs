using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CablesTool.Services
{
    /// <summary>
    /// This service is an event manager that contains event handlers for
    /// uploading/changing videofiles
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public class FileChangedEventsService<T>
    {
        public T CurrentVideoFileId { get; set; }
        public event Func<T, Task> FileChangedAsync;

        public async Task ChangeFile(T id)
        {
            if (!CurrentVideoFileId.Equals(id))
            {
                CurrentVideoFileId = id;
                await NotifyFileUploadedAsync();
            }
        }

        private async Task NotifyFileUploadedAsync()
        {
            Func<T, Task> handler = FileChangedAsync;

            if (handler == null)
            {
                return;
            }

            Delegate[] invocationList = handler.GetInvocationList();
            Task[] handlerTasks = new Task[invocationList.Length];

            for (int i = 0; i < invocationList.Length; i++)
            {
                handlerTasks[i] = ((Func<T, Task>)invocationList[i])(CurrentVideoFileId);
            }

            await Task.WhenAll(handlerTasks);
        }
    }
}
