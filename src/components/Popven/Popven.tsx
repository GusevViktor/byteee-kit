import React from "react";
import classes from "./Popven.module.scss";

const { tooltip } = classes;

export interface PopvenProps {
  children?: React.ReactNode;
  placement: "left" | "right" | "top" | "bottom";
}

const Popven = ({ children, placement }: PopvenProps) => (
  <div className={`${tooltip} ${classes[placement]}`}>{children}</div>
);

export default Popven;