const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    printFile: (filesItems) => ipcRenderer.send('print-file', filesItems),
    appQuit: () => ipcRenderer.send('app-quit'),
    winMinimize: () => ipcRenderer.send('window-minimize'),
    getPrinters: () => ipcRenderer.invoke('get-printers'),
});
