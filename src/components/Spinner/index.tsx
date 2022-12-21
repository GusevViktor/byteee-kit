import React from "react";
import style from "./style.module.scss";
export interface SpinnerProps {
  size: "xs" | "s" | "m" | "l";
  className?: string;
}
const { loader, path } = style;

const Spinner = ({ size = "m", className }: SpinnerProps) => (
  <div className={`${className} ${style[size]}`}>
    <svg
      className={`${loader} ${style[size]}`}
      viewBox="0 0 50 50">
      <circle className={path}
        cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
    </svg>
  </div>
);

export default Spinner;
