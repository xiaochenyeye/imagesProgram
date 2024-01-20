import { useState } from "react";

let currentX = 0;
function Info(): JSX.Element {
  const [rightWidth, setRightWidth] = useState<number>(200);

  const handleMouseDown = (event) => {
    currentX = event.screenX;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", handleMouseMove);
    });
  };

  const handleMouseMove = (event: MouseEvent) => {
    const MIN_WIDTH = 168,
      MAX_WIDTH = 448;
    const dif = rightWidth - (event.screenX - currentX);
    setRightWidth(Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, dif)));
  };
  return (
    <>
      <div
        onMouseDown={handleMouseDown}
        className="w-1 cursor-col-resize bg-black/[.975]"
      ></div>
      <div
        className={`bg-black/[0.978] pt-8 min-w-48 max-w-lg`}
        style={{ width: rightWidth }}
      >
        111
      </div>
    </>
  );
}

export default Info;
