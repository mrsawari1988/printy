const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { getPrinters, print } = require('pdf-to-printer');
function createPrintWindow(filePath) {
    // console.log(filePath);
    // getPrinters().then(res=>{
    //     console.log(res)
    // })
    print(filePath, { silent: true, printer: 'Canon MF4400 Series UFRII LT' }).then((res) => {
        console.log(res);
    });
}

function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    win.loadURL('http://localhost:3000');
    // win.webContents.openDevTools();
    ipcMain.on('print-file', (event, filesItems) => {
        //createPrintWindow(filePath);
        console.log(filesItems);
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
