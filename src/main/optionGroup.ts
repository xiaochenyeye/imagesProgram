import { BrowserWindow, ipcMain } from "electron";

const optionGroup = (mainWindow: BrowserWindow) => {
  ipcMain.on("fullScreen", (_, value) => {
    mainWindow.setFullScreen(value);
  });

  // 实现最小化、最大化和关闭按钮的点击事件
  ipcMain.on("minimize", () => {
    mainWindow.minimize();
  });

  // 最大最小化
  ipcMain.handle("maximize", () => {
    const isMax = mainWindow.isMaximized()
    if (isMax) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
    return !isMax
  });

  // 取消最大化
  mainWindow.on('unmaximize', () => {
    // 向渲染进程发送消息
    mainWindow.webContents.send('window-maximized', false);
  });

  ipcMain.on("close", () => {
    mainWindow.close();
  });

  ipcMain.handle("alwaysOnTop", () => {
    const alwaysOnTop = mainWindow.isAlwaysOnTop();
    mainWindow.setAlwaysOnTop(!alwaysOnTop);
    return !alwaysOnTop;
  });
};

export default optionGroup;
