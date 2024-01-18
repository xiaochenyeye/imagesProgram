"use strict";
const electron = require("electron");
const preload = require("@electron-toolkit/preload");
const setFullScreen = (value) => {
  electron.ipcRenderer.send("fullScreen", !!value);
};
const setMinimize = () => {
  electron.ipcRenderer.send("minimize");
};
const setMaximize = () => {
  return electron.ipcRenderer.invoke("maximize");
};
const setClose = () => {
  electron.ipcRenderer.send("close");
};
const setAlwaysOnTop = () => {
  return electron.ipcRenderer.invoke("alwaysOnTop");
};
const optionGroup = {
  setFullScreen,
  setMinimize,
  setMaximize,
  setClose,
  setAlwaysOnTop
};
const api = {};
if (process.contextIsolated) {
  try {
    electron.contextBridge.exposeInMainWorld("electron", preload.electronAPI);
    electron.contextBridge.exposeInMainWorld("api", api);
    electron.contextBridge.exposeInMainWorld("optionGroup", optionGroup);
  } catch (error) {
    console.error(error);
  }
} else {
  window.electron = preload.electronAPI;
  window.api = api;
  window.optionGroup = optionGroup;
}
