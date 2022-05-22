import React from "react";
import classNames from "classnames/bind";
import styles from "./sidebar.module.scss";
import logo from "../../assets/logo.png";
import { SIDEBAR_OPTIONS } from "./options";
import { SidebarOption } from "./sidebarOption/sidebarOption";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function SideBar(): JSX.Element {
  const createSidebarOptions = (): Array<JSX.Element> => {
    return SIDEBAR_OPTIONS.map((option) => {
      return (<SidebarOption 
        key={option.id}
        option={option}
        className={cx('option-margin')}
      />)
    })
  }

  return (
    <nav className={cx('sidebar-container')}>
      <div className={cx('sidebar')}>
        <Link to="/">
          <div className={cx('logo')}>
            <img src={logo} className={cx('logo-icon')} alt="FacultyLogo" />
          </div>
        </Link>
        <div className={cx('options')}>{createSidebarOptions()}</div>
      </div>
    </nav>
  );
}

export default SideBar;
