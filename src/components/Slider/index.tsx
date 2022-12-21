import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import color from "../../styles/emotion/color";
import styled from "@emotion/styled"

type TypeTheme = "violet" | "blue";
export type TypeValue = number | number[];

export interface SliderProps {
  onChange: (value: TypeValue) => void;
  theme?: TypeTheme,
  range?: boolean,
  disabled?: boolean,
  defaultValue?: TypeValue,
  min?: number,
  max?: number,
  step?: number,
}
const themes = {
  violet: {
    color: color.violet600,
    border: color.violet400,
  },
  blue: {
    border: color.blue400,
    color: color.blue600,
  },
}
const getThemeColor = (
  theme: TypeTheme, force: "active" | "hover", disabled: boolean
) => {
  const border = `border: 1px solid ${themes[theme].border};`
  const boxShadowNone = "box-shadow: none;"
  if(disabled) {
    return
  }
  if(force === "hover") {
    return [
      `${border};`
    ].join(" ")
  }
  if(force === "active") {
    return [
      `${border}`,
      `${boxShadowNone}`
    ].join(" ")
  }
}

const Wrap = styled.div<{theme: TypeTheme, disabled: boolean}>`
  background: ${color.white};
  .rc-slider-horizontal {

  }
  .rc-slider-handle {
    top: 4px;
    width: 16px;
    height: 16px;
    border-radius: "50px";
    box-shadow: 0px 0px 0.5px rgba(0, 0, 0, 0.35), 0px 5px 15px rgba(0, 0, 0, 0.15);
    opacity: 1;
    border: 1px solid ${color.grayscale100};
    background: ${color.white};
    ${({ theme }) => theme === "blue" && ("")};
    &:hover {
      ${({ theme, disabled }) => getThemeColor(theme, "hover", disabled)};
    }
    &:active {
      ${({ theme, disabled }) => getThemeColor(theme, "active", disabled)};
    }
  };
  .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {
    ${({ theme, disabled }) => getThemeColor(theme, "active", disabled)};
  }
  .rc-slider-disabled {
    background: none;
  }
`

const SliderComponent = (props: SliderProps) => {

  const {
    onChange,
    theme = "violet",
    range = false,
    disabled = false,
    defaultValue = 0,
    min = 0,
    max = 10,
    step = 1,
  } = props;

  return (
    <Wrap
      theme={theme}
      disabled={disabled}
    >
      <Slider
        range={range}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        defaultValue={defaultValue}
        onChange={onChange}
        railStyle={{
          background: disabled ? color.grayscale100 : color.grayscale200,
        }}
        trackStyle={{
          background: disabled ? color.grayscale400 : themes[theme].color,
        }}
      />
    </Wrap>
  )
};

export default SliderComponent;
