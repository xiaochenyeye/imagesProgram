import { useState } from "react";

function CommonMenu(): JSX.Element {
  const [active, setActive] = useState();
  const styles = (active?: boolean) =>
    `h-9 p-2 ${
      active ? "bg-lightash" : ""
    } rounded-lg flex item-center justify-between hover:bg-lightash/[.5]`;
  return (
    <>
      <div className={styles()}>
        <span>全部</span>
        <span>10</span>
      </div>
      <div className={styles()}>
        <span>最近使用</span>
        <span>10</span>
      </div>
      <div className={styles()}>
        <span>我的收藏</span>
        <span>10</span>
      </div>
      <div className={styles()}>
        <span>回收站</span>
        <span>10</span>
      </div>
    </>
  );
}

export default CommonMenu;
