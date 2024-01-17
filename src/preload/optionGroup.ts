import { ipcRenderer } from "electron";

const setFullScreen = (value: boolean) => {
  ipcRenderer.send("fullScreen", !!value);
};

const setMinimize = () => {
  ipcRenderer.send("minimize");
};

const setMaximize = () => {
  ipcRenderer.send("maximize");
};
const setClose = () => {
  ipcRenderer.send("close");
};

const setAlwaysOnTop = () => {
  return ipcRenderer.invoke("alwaysOnTop");
};

export default {
  setFullScreen,
  setMinimize,
  setMaximize,
  setClose,
  setAlwaysOnTop,
};
