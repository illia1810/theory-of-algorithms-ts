import React from 'react';
import classNames from 'classnames/bind';
import styles from './content.module.scss';

const cx = classNames.bind(styles);

interface ContentProps {
  children: React.ReactNode;
}

function Content({ children }: ContentProps): JSX.Element {
  return <div className={cx('content')}>{children}</div>;
}

export default Content;
