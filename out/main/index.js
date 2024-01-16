"use strict";
const electron = require("electron");
const path = require("path");
const utils = require("@electron-toolkit/utils");
const icon = path.join(__dirname, "../../resources/icon.png");
const optionGroup = (mainWindow) => {
  electron.ipcMain.on("fullScreen", (_, value) => {
    mainWindow.setFullScreen(value);
  });
};
function createWindow() {
  const mainWindow = new electron.BrowserWindow({
    width: 900,
    height: 600,
    show: false,
    minHeight: 378,
    minWidth: 500,
    resizable: true,
    frame: false,
    titleBarStyle: "hidden",
    autoHideMenuBar: true,
    trafficLightPosition: { x: 10, y: 13 },
    ...process.platform === "linux" ? { icon } : {},
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.js"),
      sandbox: false
    }
  });
  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
  });
  mainWindow.webContents.openDevTools({ mode: "detach" });
  mainWindow.webContents.setWindowOpenHandler((details) => {
    electron.shell.openExternal(details.url);
    return { action: "deny" };
  });
  if (utils.is.dev && process.env["ELECTRON_RENDERER_URL"]) {
    mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
  } else {
    mainWindow.loadFile(path.join(__dirname, "../renderer/index.html"));
  }
  return mainWindow;
}
electron.app.whenReady().then(() => {
  utils.electronApp.setAppUserModelId("com.electron");
  electron.app.on("browser-window-created", (_, window) => {
    utils.optimizer.watchWindowShortcuts(window);
  });
  const mainWindow = createWindow();
  optionGroup(mainWindow);
  electron.globalShortcut.register("F11", () => {
  });
  electron.app.on("activate", function() {
    if (electron.BrowserWindow.getAllWindows().length === 0)
      createWindow();
  });
});
electron.app.on("window-all-closed", () => {
  electron.globalShortcut.unregister("F11");
  electron.ipcMain.removeAllListeners();
  if (process.platform !== "darwin") {
    electron.app.quit();
  }
});
