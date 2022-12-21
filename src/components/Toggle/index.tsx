import React from "react";
import style from "./style.module.scss"

const { wrap, toggle, slider, blue, green, orange, violet } = style;

export interface ToggleProps {
  checked?: boolean,
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  color: "blue" | "violet" | "green" | "orange";
  name?: string;
  value?: string;
  disabled?: boolean;
}

const Toggle = ({ checked,
  onChange,
  color,
  name,
  disabled,
  value }: ToggleProps) => {
  const setColor = (color) => {
    switch (color) {
      case "blue":
        return blue
      case "green":
        return green
      case "orange":
        return orange
      case "violet":
        return violet
      default:
        return violet
    }
  };
  return (
    <div className={wrap}>
      <label className={`${toggle} ${setColor(color)} ${disabled && disabled}`}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          name={name}
          value={value}
          disabled={disabled}/>
        <span className={slider}/>
      </label>
    </div>
  )
}
export default Toggle;