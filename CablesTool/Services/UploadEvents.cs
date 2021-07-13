using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CablesTool.Services
{
    public class UploadEvents<T>
    {
        public T CurrentVideoFileId { get; set; }
        public event Func<T, Task> FileUploaded;

        public async Task UploadFile(T id)
        {
            if (!CurrentVideoFileId.Equals(id))
            {
                CurrentVideoFileId = id;
                await NotifyFileUploaded();
            }
        }

        private async Task NotifyFileUploaded()
        {
            Func<T, Task> handler = FileUploaded;

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


        //sync uploadEvents


        //public event Action<T> FileUploaded;
        //public void UploadFile(T id)
        //{
        //    if (!Id.Equals(id))
        //    {
        //        Id = id;
        //        NotifyFileUploaded(id);
        //    }
        //}

        //private void NotifyFileUploaded(T id)
        //    => FileUploaded?.Invoke(Id);
    }
}
