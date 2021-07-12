using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CablesTool.Services
{
    public class UploadEvents<T>
    {
        public T Id { get; set; }
        public event Func<object, T, Task> FileUploaded;

        public async Task UploadFile(T id)
        {
            if (!Id.Equals(id))
            {
                Id = id;
                await NotifyFileUploaded();
            }
        }

        private async Task NotifyFileUploaded()
        {
            Func<object, T, Task> handler = FileUploaded;

            if (handler == null)
            {
                return;
            }

            Delegate[] invocationList = handler.GetInvocationList();
            Task[] handlerTasks = new Task[invocationList.Length];

            for (int i = 0; i < invocationList.Length; i++)
            {
                handlerTasks[i] = ((Func<object, T, Task>)invocationList[i])(this, Id);
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
