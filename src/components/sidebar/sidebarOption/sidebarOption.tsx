import React, { useMemo } from "react";
import classNames from "classnames/bind";
import styles from "./sidebarOption.module.scss";
import { ISidebarOptionProps } from "../sidebarTypes";
import useIsSelectedFromPathname from "../../../hooks/useIsSelectedFromPathname";
import { NavLink } from "react-router-dom";
import { ReactComponent as ArrowIcon } from '../../../assets/arrow.svg';

const cx = classNames.bind(styles);

export function SidebarOption({option, selected :selectedFromProps, className}: ISidebarOptionProps): JSX.Element {
  const {optionText} = option;
  const isSelectedFromPath: Function = useIsSelectedFromPathname();
  const selectedFromPath: boolean = useMemo(
    () => isSelectedFromPath(option),
    [option, isSelectedFromPath],
  );

  return (
    <div className={ cx(selectedFromPath && 'wrapper-for-tooltip__selected', 'wrapper-for-tooltip')}>
      <NavLink
        to={option.redirectRoute}
        className={`${cx({
          'option-container': true,
          // 'option-container__with-custom-icon': customIconPath,
        })} ${className}`}
      >
        <div className={cx('option-body')}>
          {selectedFromPath && <ArrowIcon />}
          <h4 className={cx(selectedFromPath && 'option-text__selected', 'option-text')}>{optionText}</h4>
        </div>
      </NavLink>
    </div>
  );
}
