import React from "react";
import classes from "./Checkbox.module.scss";

import { Text } from "../Typography";
import { ReactComponent as CheckIcon } from "./icon/check.svg";

export interface CheckboxProps {
  size: "s" | "m",
  name: string,
  label?: string,
  error?: boolean,
  labelPlacement?: "left" | "right",
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void,
  onClick?: () => void,
  checked?: boolean,
  defaultChecked?: boolean,
  disabled?: boolean,
  required?: boolean,
  value?: string;
}


export const Checkbox: React.FC<CheckboxProps> = ({
  size = "s",
  label,
  name,
  labelPlacement,
  onChange,
  onClick,
  defaultChecked,
  disabled,
  error,
  required,
  value,
  checked
}) => {
  const labelClassname = labelPlacement === "left" ?
    `${classes.wrap} ${classes.left}`
    : classes.wrap;

  const heightBlock = size === "s" ?
    classes.heightS
    : classes.heightM;

  return (<label
    className={ [labelClassname, heightBlock].join(" ")}
  >
    <input className={classes.visually_hidden}
      type={"checkbox"}
      onChange={onChange}
      disabled={disabled}
      name={name}
      value={value}
      defaultChecked={defaultChecked}
      required={required}
      onClick={onClick}
      checked={checked}/>
    <div
      className={`
                  ${classes.checkbox}
                  ${classes[size]}
                  ${error && classes.error}
                  ${disabled && classes.error}
                `}>
      <CheckIcon/>
    </div>
    {label &&
    <Text
      size={"m"}
      color={!disabled ? "grayscale1000" : "grayscale400"}
    >
      {label}
    </Text>
    }
  </label>);
}

export default Checkbox;
