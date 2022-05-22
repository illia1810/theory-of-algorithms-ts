import React from "react";
import classNames from "classnames/bind";
import styles from "./basicConcepts.module.scss";

const cx = classNames.bind(styles);

const BasicConcepts: React.FC = () => {
  return (
    <div className={cx('container')}>
      <h4 className={cx('headline')}>Основні поняття та визначення</h4>
      <p></p>
    </div>
  );
};

export default BasicConcepts;
