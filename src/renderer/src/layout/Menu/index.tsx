import { useState } from "react";
import CommonMenu from "./CommonMenu";
import OptionGroup from "../OptionGroup";

function Menu({ isMac }): JSX.Element {
  const [leftPanelWidth, setLeftPanelWidth] = useState<number>(200);
  const handleMouseDown = () => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", handleMouseMove);
    });
  };

  const handleMouseMove = (event: MouseEvent) => {
    setLeftPanelWidth(event.clientX);
  };

  return (
    <>
      <nav
        className="bg-black/[.975] flex flex-col min-w-48 max-w-lg "
        style={{ resize: "horizontal", width: leftPanelWidth }}
      >
        <OptionGroup isMac={isMac} />
        <CommonMenu />
      </nav>
      <div
        onMouseDown={handleMouseDown}
        className="w-1 cursor-col-resize bg-black/[.975]"
      ></div>
    </>
  );
}

export default Menu;
