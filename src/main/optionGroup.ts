import { BrowserWindow, ipcMain } from "electron";

const optionGroup = (mainWindow: BrowserWindow) => {
    ipcMain.on('fullScreen', (_, value) => {
        mainWindow.setFullScreen(value)
    })

    // 实现最小化、最大化和关闭按钮的点击事件
    ipcMain.on('minimize', () => {
        mainWindow.minimize();
    });

    ipcMain.on('maximize', () => {
        if (mainWindow.isMaximized()) {
            mainWindow.unmaximize();
        } else {
            mainWindow.maximize();
        }
    });

    ipcMain.on('close', () => {
        mainWindow.close();
    });
}


export default optionGroup