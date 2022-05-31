import React from "react";
import classNames from "classnames/bind";
import styles from "./normalAlgorithms.module.scss";

const cx = classNames.bind(styles);

const NormalAlgorithms: React.FC = () => {
  return (
    <div className={cx('container')}>
      <h4 className={cx('headline')}>Нормальні алгоритми Маркова</h4>
    </div>
  );
};

export default NormalAlgorithms;
