import React from "react";
import styles from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={"flex flex-1 items-center justify-items-centers"}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
