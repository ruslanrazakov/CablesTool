using System;

namespace CablesTool.Services
{
    public class ProjectContent<T>
    {
        public T Content { get; set; }
        public event Action<T> OnChange;

        public void Set(T content)
        {
            if (!String.Equals(this.Content, content))
            {
                Content = content;
                NotifyStateChanged();
            }
        }

        private void NotifyStateChanged() =>
            OnChange?.Invoke(Content);
    }
}