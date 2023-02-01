const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    printFile: (filesItems) => ipcRenderer.send('print-file', filesItems),
    getPrinters: () => ipcRenderer.invoke('get-printers'),
});
