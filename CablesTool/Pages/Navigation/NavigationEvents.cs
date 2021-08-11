using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CablesTool.Pages.Navigation
{
    public class NavigationEvents
    {
        public event Func<long?, Task> RootFolderSelected;
        public event Func<long?, Task> FileFolderSelected;
        public event Func<long?, Task> FileVersionSelected;
        public event Action FileUploaded;
        public event Action<string> PopupShowed;

        public async Task ChangeRootFolder(long? id)
        {
            await NotifyContentSelectedAsync(id, RootFolderSelected);
        }

        public async Task ChangeFileFolder(long? id)
        {
            await NotifyContentSelectedAsync(id, FileFolderSelected);
        }

        public async Task ChangeFileVersion(long? id)
        {
            await NotifyContentSelectedAsync(id, FileVersionSelected);
        }

        public void NoifyFileUploaded()
        {
            FileUploaded();
        }

        public void NotifyShowPopup(string popupContent)
        {
            PopupShowed(popupContent);
        }

        private async Task NotifyContentSelectedAsync(long? contentId, Func<long?, Task> contentSelected)
        {
            Func<long?, Task> handler = contentSelected;
            if (handler == null)
            {
                return;
            }
            Delegate[] invocationList = handler.GetInvocationList();
            Task[] handlerTasks = new Task[invocationList.Length];

            for (int i = 0; i < invocationList.Length; i++)
            {
                handlerTasks[i] = ((Func<long?, Task>)invocationList[i])(contentId);
            }
            await Task.WhenAll(handlerTasks);
        }



        /*private async Task NotifyRootFolderSelectedAsync()
        {
            Func<long, Task> handler = RootFolderSelected;
            if (handler == null)
            {
                return;
            }
            Delegate[] invocationList = handler.GetInvocationList();
            Task[] handlerTasks = new Task[invocationList.Length];

            for (int i = 0; i < invocationList.Length; i++)
            {
                handlerTasks[i] = ((Func<long, Task>)invocationList[i])(rootFolderId);
            }
            await Task.WhenAll(handlerTasks);
        }

        private async Task NotifyFileFolderSelectedAsync()
        {
            Func<long, Task> handler = FileFolderSelected;
            if (handler == null)
            {
                return;
            }
            Delegate[] invocationList = handler.GetInvocationList();
            Task[] handlerTasks = new Task[invocationList.Length];

            for (int i = 0; i < invocationList.Length; i++)
            {
                handlerTasks[i] = ((Func<long, Task>)invocationList[i])(fileFolderId);
            }
            await Task.WhenAll(handlerTasks);
        }

        private async Task NotifyFileVersionSelectedAsync()
        {
            Func<long, Task> handler = FileVersionSelected;
            if (handler == null)
            {
                return;
            }
            Delegate[] invocationList = handler.GetInvocationList();
            Task[] handlerTasks = new Task[invocationList.Length];

            for (int i = 0; i < invocationList.Length; i++)
            {
                handlerTasks[i] = ((Func<long, Task>)invocationList[i])(fileVersionId);
            }
            await Task.WhenAll(handlerTasks);
        }*/
    }
}
