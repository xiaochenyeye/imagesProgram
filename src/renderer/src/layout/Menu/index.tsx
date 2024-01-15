import { useState } from "react";

function Menu(): JSX.Element {
    const [leftPanelWidth, setLeftPanelWidth] = useState<number>(200);

    const handleMouseDown = () => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleMouseMove);
        });
    };

    const handleMouseMove = (event: MouseEvent) => {
        console.log(event.clientX)
        setLeftPanelWidth(event.clientX);
    };


    return (
        <>
            <nav className="bg-black/[.975] flex min-w-48 max-w-96" style={{ resize: 'horizontal', width: leftPanelWidth }}>
                <ul>
                    <li>
                        <a href={`/`}>全部</a>
                    </li>
                    <li>
                        <a href={`/aa`}></a>
                    </li>

                </ul>
            </nav>
            <div onMouseDown={handleMouseDown} className="w-2 cursor-col-resize bg-black/[.975]" ></div>
        </>
    )
}

export default Menu