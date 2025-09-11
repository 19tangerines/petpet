console.log('Hello from Electron 👋')

const { app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 250,
        height: 250,
        transparent: true, 
        frame: false,
        alwaysOnTop: true, 
        hasShadow: false,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })

    win.setIgnoreMouseEvents(false)
    win.loadFile('home.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })

})

ipcMain.on('close-window', (event) => {
    console.log("clicked")
    const win = BrowserWindow.fromWebContents(event.sender)
    if (win) win.close()
})


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
