import React, { ReactElement } from "react";
import styles from "./Link.module.scss";
import { getIcon, TypesIcons } from "../Icon/index";

export interface LinkProps {
  children: ReactElement | string;
  className?: string;
  color?: "black" | "blue" | "violet" | "white" ;
  size?: "s" | "m" | "l";
  startIcon?: TypesIcons;
  endIcon?: TypesIcons;
  style?:React.CSSProperties;
  underline?: boolean;
  hoverUnderLine?: boolean;
}

const Link = (props: LinkProps) => {
  const {
    className,
    size = "m",
    color = "black",
    // Todo Возможно ненужный проп
    underline = false,
    children,
    startIcon,
    style,
    endIcon,
    hoverUnderLine = true,
  } = props;

  const {
    none_border,
    none_hover_border,
    link,
    link_pl,
    link_pr,
    icon__left,
    icon__right,
    icon,
  } = styles;

  return (
    <span style={style} className={[
      link,
      styles[color],
      styles[size],
      startIcon ? link_pl : "",
      endIcon ? link_pr : "",
      !underline ? none_border : "",
      !hoverUnderLine ? none_hover_border : "",
      className
    ].join(" ")}
    >
      {startIcon && (
        <span
          className={[icon__left, icon].join(" ")}
        >
          {getIcon(startIcon, {
            size: "s",
            color: color,
          })}
        </span>
      )}
      {children}
      {endIcon && (
        <span
          className={[icon__right, icon].join(" ")}
        >
          {getIcon(endIcon, {
            size: "s",
            color: color,
          })}
        </span>
      )}
    </span>
  );
};

export default Link;
