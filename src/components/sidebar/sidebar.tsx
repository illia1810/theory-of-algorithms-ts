import React from "react";
import classNames from "classnames/bind";
import styles from "./sidebar.module.scss";
import logo from "../../assets/logo.png";

const cx = classNames.bind(styles);

function SideBar(): JSX.Element {
  return (
    <nav className={cx('sidebar-container')}>
      <div className={cx('sidebar')}>
        {/* replace div with Link */}
        <div className={cx('logo')}>
          <img src={logo} className={cx('logo-icon')} alt="FacultyLogo" />
        </div>
        <div className={cx('options')}></div>
      </div>
    </nav>
  );
}

export default SideBar;
