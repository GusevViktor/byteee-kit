import React, { ReactElement } from "react";
import classes from "./Popover.module.scss";

export interface PopoverProps {
  name: string;
  message: string|ReactElement;
  avatar: HTMLImageElement|ReactElement;
  className?:string;
  anchorOrigin: "right"|"left";
  children?:ReactElement;
  style?:React.CSSProperties;
}

const Popover: React.FC<PopoverProps> = ({
  name,
  children,
  message,
  avatar,
  anchorOrigin,
  className,
  style
}) => (
  <div
    className={[
      className,
      classes.container,
      classes[anchorOrigin]
    ].join(" ")}
    style={style}
  >
    <div className={classes.profile}>
      <div>
        {avatar}
      </div>
      <div className={classes.text}>
        <div className={classes.name}>{name}</div>
        <div className={classes.message}>{message}</div>
      </div>
    </div>
    {children}
  </div>
);

export default Popover;
