using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CablesTool.Services
{
    public class UploadEvents<T>
    {
        public T Id { get; set; }
        public event Action<T> FileUploaded;

        public void UploadFile(T id)
        {
            if (!Id.Equals(id))
            {
                Id = id;
                NotifyFileUploaded(id);
            }
        }

        private void NotifyFileUploaded(T id)
            => FileUploaded?.Invoke(Id);
    }
}
