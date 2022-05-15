import React from "react";
import classNames from "classnames/bind";
import styles from "./mainPage.module.scss";

const cx = classNames.bind(styles);

const MainPage: React.FC = () => {
  return (
    <div className={cx('container')}>
      Main Page
    </div>
  );
};

export default MainPage;
