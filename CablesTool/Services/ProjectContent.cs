using System;

namespace CablesTool.Services
{
    public class ProjectContent<T>
    {
        public T Path { get; set; }
        public T fileName { get; set; }
        public event Action<T> ChangeProject;
        public event Action<T> ChangeFile;

        public void SetProject(T projectPath)
        {
            if (!String.Equals(this.Path, projectPath))
            {
                Path = projectPath;
                NotifyProjectChanged();
            }
        }

        public void SetVideoFile(T projectfileName)
        {
            if (!String.Equals(this.fileName, projectfileName))
            {
                fileName = projectfileName;
                NotifyFileChanged();
            }
        }

        private void NotifyProjectChanged() =>
            ChangeProject?.Invoke(Path);

        private void NotifyFileChanged() =>
            ChangeFile?.Invoke(fileName);
    }
}