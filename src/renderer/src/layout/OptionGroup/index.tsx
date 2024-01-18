import {
    FullscreenExitOutlined,
    FullscreenOutlined,
    MenuOutlined,
    PlusOutlined,
    SwapOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import {
    DingIcon,
    MaximizeIcon,
    MinimizeIcon,
    CloseIcon,
    MinimizetionIcon,
} from "@renderer/assets/icons";

// The operation button in the upper right corner of window
export function CmmButton({ isMac, fullScreen }): JSX.Element {
    const [isAlwaysOnTop, setAlwaysOnTop] = useState<boolean>(false);
    const [isMax, setIsXax] = useState<boolean>(false)

    // useEffect(() => {
    //     const handleMaximizedChange = (e, windowIsMax) => {
    //         console.log(windowIsMax, '????')
    //     }
    //     ipcRenderer.on('unmaximize', handleMaximizedChange)

    //     return () => {
    //         ipcRenderer.removeListener('unmaximize', handleMaximizedChange)
    //     }
    // }, [])


    const handleAlwaysOnTop = async () => {
        setAlwaysOnTop(await window.optionGroup.setAlwaysOnTop());
    };
    const handleSetMaximize = async () => {
        setIsXax(await window.optionGroup.setMaximize())
    }

    return (
        <>
            {/* 全屏隐藏按钮 */}
            {!fullScreen && <div
                className={`absolute top-0 right-0 ${isMac ? 'w-8' : 'w-40'
                    } h-8 flex justify-center items-center`}
            >
                <div className="flex-1/[2] h-8 flex justify-self-center items-center">
                    <div
                        onClick={handleAlwaysOnTop}
                        data-hover-text="钉在桌面"
                        className={`no-drag-area ${isMac ? "text-left" : "hover-text"
                            } after:bg-black/[.975] ${isAlwaysOnTop
                                ? "fill-hoverlight/[.66] bg-hoverlight"
                                : "fill-lightash"
                            } hover:fill-hoverlight/[.66] hover:text-white hover:bg-hoverlight w-5 h-5 mr-1 rounded flex justify-center items-center`}
                    >
                        <DingIcon className="no-drag-area" />
                    </div>
                </div>
                {!isMac && (
                    <>
                        <div
                            onClick={window.optionGroup.setMinimize}
                            className="no-drag-area hover:text-white hover:bg-hoverlight flex-1 h-8 flex justify-center items-center fill-hoverlight/[.66] hover:fill-hoverlight/[2]"
                        >
                            <MinimizeIcon />
                        </div>
                        <div
                            onClick={handleSetMaximize}
                            className="no-drag-area hover:text-white hover:bg-hoverlight flex-1 h-8  flex justify-center items-center fill-hoverlight/[.66] hover:fill-hoverlight/[2]"
                        >
                            {!isMax ? <MaximizeIcon /> : <MinimizetionIcon />}
                        </div>
                        <div
                            onClick={window.optionGroup.setClose}
                            className="no-drag-area hover:text-white hover:bg-danger flex-1 h-8  flex justify-center items-center fill-hoverlight/[.66] hover:fill-hoverlight/[2]"
                        >
                            <CloseIcon />
                        </div>
                    </>
                )}
            </div>}
        </>
    );
}

// The operation button in the upper left corner
function OptionGroup({ isMac }): JSX.Element {
    // TODO: 先在使用的是默认false，因为刚创建时为非全屏，后期可以多写一个接口，获取初始化状态更加稳妥
    const [fullScreen, setFullScreen] = useState<boolean>(false);

    const handleFullScreen = () => {
        setFullScreen(() => !fullScreen);
        window.optionGroup.setFullScreen(!fullScreen);
    };
    return (
        <>
            <div className="px-3 py-2 flex items-center h-12 gap-1 drag-area">
                <div className="w-7 h-7 flex-1 justify-center items-center rounded">
                    {!isMac && (
                        <div
                            data-hover-text="功能"
                            className="no-drag-area hover-text after:bg-black/[.975] hover:text-white hover:bg-hoverlight w-7 h-7 flex justify-center items-center"
                        >
                            <MenuOutlined className="text-xs" />
                        </div>
                    )}
                </div>
                <div
                    className="no-drag-area hover:text-white hover:bg-hoverlight w-7 h-7 flex justify-center items-center rounded hover-text after:bg-black/[.975]"
                    data-hover-text="未开放"
                >
                    <SwapOutlined className="text-xs" />
                </div>
                <div
                    className="no-drag-area hover:text-white hover:bg-hoverlight w-7 h-7 flex justify-center items-center rounded hover-text after:bg-black/[.975]"
                    data-hover-text="添加"
                >
                    <PlusOutlined className="text-xs" />
                </div>
                <div
                    onClick={handleFullScreen}
                    className="no-drag-area hover:text-white hover:bg-hoverlight w-7 h-7 flex justify-center items-center rounded hover-text after:bg-black/[.975]"
                    data-hover-text={fullScreen ? "缩小" : "全屏"}
                >
                    {fullScreen ? (
                        <FullscreenExitOutlined className="text-xs" />
                    ) : (
                        <FullscreenOutlined className="text-xs" />
                    )}
                </div>
            </div>
            <CmmButton isMac={isMac} fullScreen={fullScreen} />
        </>
    );
}
export default OptionGroup;
