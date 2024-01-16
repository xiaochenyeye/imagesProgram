import { FullscreenExitOutlined, FullscreenOutlined, MenuOutlined, PlusOutlined, SwapOutlined } from "@ant-design/icons"
import { useState } from "react"

function OptionGroup(): JSX.Element {

    // TODO: 先在使用的是默认false，因为刚创建时为非全屏，后期可以多写一个接口，获取初始化状态更加稳妥
    const [fullScreen, setFullScreen] = useState<boolean>(false)

    const handleFullScreen = () => {
        setFullScreen(() => !fullScreen)
        window.optionGroup.setFullScreen(!fullScreen)
    }
    return (
        <>
            <div className="px-3 py-2 flex items-center h-12 gap-1">
                <div className="w-7 h-7 flex-1 justify-center items-center rounded" >
                    <div className="hover:text-white hover:bg-hoverlight w-7 h-7 flex justify-center items-center rounded hover-text after:bg-black/[.975]" data-hover-text="折叠">
                        <MenuOutlined className="text-xs" />
                    </div>
                </div>
                <div className="hover:text-white hover:bg-hoverlight w-7 h-7 flex justify-center items-center rounded hover-text after:bg-black/[.975]" data-hover-text="未开放">
                    <SwapOutlined className="text-xs" />
                </div>
                <div className="hover:text-white hover:bg-hoverlight w-7 h-7 flex justify-center items-center rounded hover-text after:bg-black/[.975]" data-hover-text="添加">
                    <PlusOutlined className="text-xs" />
                </div>
                <div onClick={handleFullScreen} className="hover:text-white hover:bg-hoverlight w-7 h-7 flex justify-center items-center rounded hover-text after:bg-black/[.975]" data-hover-text={fullScreen ? '缩小' : '全屏'}>
                    {fullScreen ? <FullscreenExitOutlined className="text-xs" /> : <FullscreenOutlined className="text-xs" />}
                </div>
            </div>
        </>
    )
}
export default OptionGroup