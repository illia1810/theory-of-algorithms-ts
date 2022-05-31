import React from 'react';
import classNames from 'classnames/bind';
import styles from './content.module.scss';
import ScrollToTop from '../scrollToTop/scrollToTop';

const cx = classNames.bind(styles);

interface ContentProps {
  children: React.ReactNode;
}

function Content({ children }: ContentProps): JSX.Element {
  return (
    <div className={cx('content')}>
      {children}
      <ScrollToTop />
    </div>
  );
}

export default Content;
