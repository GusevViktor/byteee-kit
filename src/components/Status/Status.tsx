import React from "react";
import classes from "./Status.module.scss";
import { Text } from "../Typography";


export interface StatusProps {
  color: "blue" | "mint" | "grayscale" | "tangerine";
  text: string;
  size: "xs" | "m"
}

const Status = ({ color, text, size="m" }: StatusProps) => {

  const classname = classes[color]

  return (
    <div className={[classname, classes.wrap].join(" ")}>
      <Text size={size}>{text}</Text>
    </div>
  );
};

export default Status;
