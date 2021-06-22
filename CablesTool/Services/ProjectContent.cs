using System;

namespace CablesTool.Services
{
    public class ProjectContent<T>
    {
        public T Path { get; set; }
        public T Name { get; set; }
        public T Comments { get; set; }
        public event Action<T, T, T> OnChange;

        public void Set(T projectPath, T projectName, T comments)
        {
            if (!String.Equals(this.Path, projectPath))
            {
                Path = projectPath;
                Name = projectName;
                Comments = comments;
                NotifyStateChanged();
            }
        }

        private void NotifyStateChanged() =>
            OnChange?.Invoke(Path, Name, Comments);
    }
}