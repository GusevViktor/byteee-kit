import React, { ReactElement } from "react";
import style from "./Button.module.scss";
import { getIcon, TypesIcons } from "../Icon/index";
import Colors from "../../styles/emotion/color";

type ThemeType = {
  iconColor: keyof typeof Colors
}
interface ThemesI {
  "violet": ThemeType,
  "red": ThemeType,
  "yellow": ThemeType,
  "black": ThemeType,
  "white": ThemeType,
  "mint": ThemeType,
}
export interface ButtonProps {
  type?: "solid" | "outline" | "flat";
  htmlType?: "button" | "submit" | "reset";
  theme?: keyof ThemesI;
  size?: "xs" | "s" | "m" | "l" | "xl";
  children?: ReactElement | string;
  startIcon?: TypesIcons;
  endIcon?: TypesIcons;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  disabled?: boolean;
}

const Button = ({
  children,
  disabled,
  onClick,
  type = "solid",
  theme = "violet",
  size,
  startIcon,
  endIcon,
  htmlType = "button",
  className
}: ButtonProps) => {

  const styleSize = {
    xs: style.buttonXs,
    s: style.buttonS,
    m: style.buttonM,
    l: style.buttonL,
    xl: style.buttonXl,
  }

  const themes = {
    violet: {
      iconColor: "white",
      iconColorAlt: "violet600",
    },
    red: {
      iconColor: "white",
      iconColorAlt: "red600",
    },
    yellow: {
      iconColor: "grayscale1000",
      iconColorAlt: "yellow600",
    },
    black: {
      iconColor: "white",
      iconColorAlt: "grayscale1000",
    },
    white: {
      iconColor: "grayscale1000",
      iconColorAlt: "white",
    },
    mint: {
      iconColor: "white",
      iconColorAlt: "mint600",
    },
  } as ThemesI

  return (
    <button
      type={htmlType}
      onClick={onClick}
      disabled={disabled}
      className={[
        style.button,
        size ? styleSize[size] : styleSize.m,
        style[type],
        style[theme],
        className
      ].join(" ")
      }
    >
      {startIcon && (
        <div
          className={
            [
              style.icon_left,
              !children ? style.no_margin : "",
            ].join(" ")
          }
        >
          {getIcon(startIcon, {
            size: "m",
            color: themes[theme][type === "solid" ? "iconColor" : "iconColorAlt"],
          })}
        </div>
      )}
      {children}
      {endIcon && (
        <div
          className={
            [
              style.icon_right,
              !children ? style.no_margin : "",
            ].join(" ")
          }
        >
          {getIcon(endIcon, {
            size: "m",
            color: themes[theme][type === "solid" ? "iconColor" : "iconColorAlt"],
          })}
        </div>
      )}
    </button>
  );
};

export default Button;
