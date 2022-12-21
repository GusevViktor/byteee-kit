/* eslint-disable @typescript-eslint/indent */

import React from "react";
import styled from "@emotion/styled"
import colors from "../../styles/emotion/color";
import { Text } from "../Typography";
import { TypesIcons, getIcon } from "../Icon";

interface CircleProps {
  error: boolean,
  disabled: boolean,
}

interface WrapProps extends CircleProps {
  reverse: boolean,
  isGap: boolean,
}

export interface RadioButtonProps {
  label: string,
  value: string,
  defaultChecked?: boolean,
  error?: boolean,
  disabled?: boolean,
  reverse?: boolean,
  icon?: TypesIcons,
}

export interface ComponentProps extends RadioButtonProps {
  className?: string,
  name: string,
  onChange: (e: React.FormEvent<HTMLInputElement>) => void,
}

const Circle = styled.input<CircleProps>`
  display: block;
  position: relative;
  width: 20px;
  height: 20px;
  background: ${colors.grayscale200};
  border-radius: 50%;
  appearance: none;
  margin: 0;
  cursor: pointer;
  outline: none;
  ${({ error }) => error && `background: ${colors.red600}`};
  ${({ disabled }) => disabled && `
    background: ${colors.grayscale200};
    cursor: default;
  `};


  :hover {
      background: ${colors.grayscale400};
      ${({ error }) => error && `background: ${colors.red600}`};
      ${({ disabled }) => disabled && `background: ${colors.grayscale200};`};
      ::after {
        ${({ disabled }) => disabled && `
          background: ${colors.grayscale100};
          box-shadow: none;
        `};
      }
  }
  :checked {  
    border: none;
    background: ${colors.violet200};
    resize: none;
    outline: none;
    ${({ error }) => error && `background: ${colors.red600}`};
    ${({ disabled }) => disabled && `background: ${colors.grayscale200};`};
    ::after {
      background: ${colors.violet700};
      box-shadow: ${`0px 0px 4px ${colors.violet500}`};
      ${({ disabled }) => disabled && `
        width: 8px;
        height: 8px;
        top: calc(50% - 4px);
        background: ${colors.grayscale100};
        cursor: default;
        box-shadow: none;
      `};
      ${({ error }) => error && `
        width: 12px;
        height: 12px;
        top: calc(50% - 6px);
        box-shadow: none;
        background: ${colors.white};
      `};
    }
  }

  ::after {
    content: "";
    cursor: pointer;
    position: absolute;
    top: calc(50% - 6px);
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 12px;
    height: 12px;
    background: ${colors.white};
    box-shadow: none;
    border-radius: 50%;
    ${({ error }) => error && `background: ${colors.white}`};
    ${({ error }) => error && (
        "width: 14px;" +
        "height: 14px;" +
        "top: calc(50% - 7px);"
    )};
    ${({ disabled }) => disabled && `
      width: 12px;
      height: 12px;
      top: calc(50% - 6px);
      background: ${colors.grayscale100};
      cursor: default;
      box-shadow: none;
    `};
    };
`;

const Label = styled.label<WrapProps>`
  display: flex;
  cursor: pointer;
  width: max-content;
  gap: ${({ isGap }) => isGap && "12px"};
  align-items: center;
  justify-content: left;
  flex-direction: ${({ reverse }) => reverse ? "row-reverse" : "row"};
`;

const TextShadow = styled.div`
  width: 0px;
  height: 0px;
  overflow: hidden;
`

const RadioButton = (props: ComponentProps) => {
  const {
    defaultChecked,
    error = false,
    disabled = false,
    reverse = false,
    label,
    value,
    icon,
    className,
    name,
    onChange,
  } = props;

  const PropsInput = {
    disabled,
    error,
    value,
    name,
    ...(defaultChecked && { defaultChecked }),
  }

  return (
    <>
      <Label
        reverse={reverse}
        disabled={disabled}
        error={error}
        isGap={Boolean(label) || Boolean(icon)}
        className={className}
      >
        <Circle
          type="radio"
          onChange={onChange}
          {...PropsInput}
        />
        {icon ? (
          <div>
            {getIcon(icon, {
              size: "m",
              color: "grayscale400",
            })}
            <TextShadow>
              {label}
            </TextShadow>
          </div>
          )
        : (
          <Text
            as="span"
            size="m"
            color={disabled ? "grayscale400" : "grayscale1000"}
          >
            {label}
          </Text>
        )
        }
      </Label>
    </>

  )
};

export default RadioButton
