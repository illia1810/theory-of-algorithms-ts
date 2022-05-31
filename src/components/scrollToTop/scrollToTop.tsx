import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import styles from "./scrollToTop.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
  
const ScrollToTop = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <div className={cx(visible && 'scroll-to-top')}>
     <FaArrowCircleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}}
     className={cx('icon')} />
    </div>
  );
}
  
export default ScrollToTop;