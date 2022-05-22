import React from "react";
import classNames from "classnames/bind";
import styles from "./mnr.module.scss";

const cx = classNames.bind(styles);

const MNR: React.FC = () => {
  return (
    <div className={cx('container')}>
      МНР програма
    </div>
  );
};

export default MNR;
