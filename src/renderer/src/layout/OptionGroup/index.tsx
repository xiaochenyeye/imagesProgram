import {
    FullscreenExitOutlined,
    FullscreenOutlined,
    MenuOutlined,
    PlusOutlined,
    SwapOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { DingIcon, MaximizeIcon, MinimizeIcon, CloseIcon } from "@renderer/assets/icons";


// The operation button in the upper right corner of window
export function CmmButton({ isMac }): JSX.Element {
    return <>
        <div className="absolute top-0 right-0 w-40 h-8 flex justify-center items-center">
            <div className="flex-1/[2] h-8 flex justify-center items-center">
                <div className="fill-lightash hover:fill-hoverlight/[.66] hover:text-white hover:bg-hoverlight w-5 h-5 mr-1 rounded flex justify-center items-center">
                    <DingIcon />
                </div>
            </div>
            {
                !isMac && <>
                    <div className="hover:text-white hover:bg-hoverlight flex-1 h-8 flex justify-center items-center fill-hoverlight/[.66] hover:fill-hoverlight/[2]"><MaximizeIcon /></div>
                    <div className="hover:text-white hover:bg-hoverlight flex-1 h-8  flex justify-center items-center fill-hoverlight/[.66] hover:fill-hoverlight/[2]"><MinimizeIcon /></div>
                    <div className="hover:text-white hover:bg-danger flex-1 h-8  flex justify-center items-center fill-hoverlight/[.66] hover:fill-hoverlight/[2]"><CloseIcon /></div>
                </>
            }

        </div>
    </>
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
            <div className="px-3 py-2 flex items-center h-12 gap-1">
                <div className="w-7 h-7 flex-1 justify-center items-center rounded">
                    {!isMac && (
                        <div className="hover:text-white hover:bg-hoverlight w-7 h-7 flex justify-center items-center rounded">
                            <MenuOutlined className="text-xs" />
                        </div>
                    )}
                </div>
                <div
                    className="hover:text-white hover:bg-hoverlight w-7 h-7 flex justify-center items-center rounded hover-text after:bg-black/[.975]"
                    data-hover-text="未开放"
                >
                    <SwapOutlined className="text-xs" />
                </div>
                <div
                    className="hover:text-white hover:bg-hoverlight w-7 h-7 flex justify-center items-center rounded hover-text after:bg-black/[.975]"
                    data-hover-text="添加"
                >
                    <PlusOutlined className="text-xs" />
                </div>
                <div
                    onClick={handleFullScreen}
                    className="hover:text-white hover:bg-hoverlight w-7 h-7 flex justify-center items-center rounded hover-text after:bg-black/[.975]"
                    data-hover-text={fullScreen ? "缩小" : "全屏"}
                >
                    {fullScreen ? (
                        <FullscreenExitOutlined className="text-xs" />
                    ) : (
                        <FullscreenOutlined className="text-xs" />
                    )}
                </div>
            </div>
        </>
    );
}
export default OptionGroup;
