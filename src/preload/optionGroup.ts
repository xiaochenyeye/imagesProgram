import { ipcRenderer } from "electron"


const setFullScreen = (value: boolean) => {
    ipcRenderer.send('fullScreen', !!value)
}


export default {
    setFullScreen
}