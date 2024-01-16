import { BrowserWindow, ipcMain } from "electron";

const optionGroup = (mainWindow: BrowserWindow) => {
    ipcMain.on('fullScreen', (_, value) => {
        mainWindow.setFullScreen(value)
    })
}


export default optionGroup