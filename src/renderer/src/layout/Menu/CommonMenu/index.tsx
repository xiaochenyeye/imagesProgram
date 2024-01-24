import { useState } from "react";
import {
  ImagesIcon,
  HistoryIcon,
  HeartIcon,
  BoxIcon,
} from "@renderer/assets/icons";

function CommonMenu(): JSX.Element {
  const [active, setActive] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setActive(index);
  };

  const styles = (index: number) =>
    `h-8 p-2 ${
      index === active ? "bg-lightash" : "hover:bg-lightash/[.5]"
    } rounded-lg flex items-center`;

  return (
    <>
      <div className={styles(0)} onClick={() => handleClick(0)}>
        <ImagesIcon className="mr-1.5 fill-white" />
        <div className="flex-1 flex justify-between">
          <span className="flex items-center text-center">全部</span>
          <span>10</span>
        </div>
      </div>
      <div className={styles(1)} onClick={() => handleClick(1)}>
        <HistoryIcon className="mr-1.5 fill-white" />
        <div className="flex-1 flex justify-between">
          <span className="flex items-center text-center">最近使用</span>
          <span>10</span>
        </div>
      </div>
      <div className={styles(2)} onClick={() => handleClick(2)}>
        <HeartIcon className="mr-1.5 fill-white" />
        <div className="flex-1 flex justify-between">
          <span className="flex items-center text-center">我的收藏</span>
          <span>10</span>
        </div>
      </div>
      <div className={styles(3)} onClick={() => handleClick(3)}>
        <BoxIcon className="mr-1.5 fill-white" />
        <div className="flex-1 flex justify-between">
          <span className="flex items-center text-center">回收站</span>
          <span>10</span>
        </div>
      </div>
    </>
  );
}

export default CommonMenu;
