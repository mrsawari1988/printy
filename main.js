const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { getPrinters, print } = require('pdf-to-printer');
function printFiles(filesItems) {
    // console.log(filePath);
    // getPrinters().then(res=>{
    //     console.log(res)
    // })
    filesItems.forEach((element) => {
        print(element.filePath, { silent: true, printer: element.printerName }).then((res) => {
            console.log(res);
        });
    });
}

const sendPrinters = async () => {
    const printers = await getPrinters();
    return printers;
};

function createWindow() {
    const win = new BrowserWindow({
        width: 920,
        height: 510,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
        resizable: false,
        // frame: false,
        titleBarStyle: 'hidden',
    });

    win.loadURL('http://localhost:3000');
    // win.webContents.openDevTools();
    ipcMain.on('print-file', (event, filesItems) => {
        //createPrintWindow(filePath);
        // console.log(filesItems);
    });
    ipcMain.on('print-file', (event, filesItems) => {
        printFiles(filesItems);
        // console.log(filesItems);
    });
    ipcMain.on('app-quit', () => {
        // console.log('quit app');
        app.quit();
    });
    ipcMain.on('window-minimize', () => {
        // console.log('quit app');
        win.minimize();
    });
    //sending printers list back to the front end
    ipcMain.handle('get-printers', sendPrinters);
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
