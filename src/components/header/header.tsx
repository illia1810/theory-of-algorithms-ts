import React from "react";
import classNames from "classnames/bind";
import styles from "./header.module.scss";

const cx = classNames.bind(styles);

interface IProps {
  headerName: string;
}

function Header({headerName}: IProps): JSX.Element {
  return (
    <div className={cx('header-container')}>
      <div className={cx('header-text')}>{headerName}</div>
    </div>
  );
}

export default Header;
