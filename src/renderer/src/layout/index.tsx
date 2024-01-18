import { useState } from "react";
import Menu from "./Menu";

function LayOut(): JSX.Element {
  const [isMac] = useState<boolean>(
    window.electron.process.platform === "darwin",
  );
  return (
    <div className="flex overflow-hidden h-screen">
      <Menu isMac={isMac} />
      <main
        className="flex-1 bg-black h-screen overflow-hidden"
        style={{
          borderLeft: "1px solid #2A2B2F",
          borderRight: "1px solid #2A2B2F",
        }}
      >
        <div className="w-full bg-white/[0.1] relative">
        </div>
      </main>
    </div>
  );
}

export default LayOut;
