import React from "react";
import classNames from "classnames/bind";
import styles from "./machineTuring.module.scss";

const cx = classNames.bind(styles);

const MachineTuring: React.FC = () => {
  return (
    <div className={cx('container')}>
      Машина Тюрінга
    </div>
  );
};

export default MachineTuring;
