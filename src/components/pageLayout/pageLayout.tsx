import React from "react";
import classNames from "classnames/bind";
import styles from "./pageLayout.module.scss";
import Header from "../header/header";
import SideBar from "../sidebar/sidebar";
import Content from "../content/content";

const cx = classNames.bind(styles);

interface IProps {
  page?: JSX.Element;
  headerName: string;
}

function PageLayout({page, headerName}: IProps): JSX.Element {
  return (
    <div className={cx('page-layout')}>
      <SideBar />
      <div className={cx('page-layout__body')}>
        <Header headerName={headerName} />
        <Content>{page && page}</Content>
      </div>
    </div>
  );
}

export default PageLayout;
