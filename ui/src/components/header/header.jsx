import React from "react";

import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <img
        alt="B"
        className={[styles["header-image"], styles["vertical-center"]].join(
          " "
        )}
        src="/favicon.ico"
      />
      <div
        className={[styles["header-text"], styles["vertical-center"]].join(" ")}
      >
        oard{" "}
      </div>
    </div>
  );
};

export default Header;
