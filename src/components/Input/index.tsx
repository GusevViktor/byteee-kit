import React, { ReactElement } from "react";
import { Input as InputStyled,
  IconLeft,
  IconRight,
  InputWrap,
  Label } from "./style";
import { Text } from "../Typography";
import { getIcon, TypesIcons } from "../Icon/index";

export interface InputProps {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  value: string;
  label?: string;
  name?: string;
  startIcon?: TypesIcons;
  endIcon?: TypesIcons;
  placeholder?: string;
  error?: string;
  size?: "l" | "m" | "s";
  type?: "text" | "password" | "email";
  disabled?: boolean;
  labelIcon?:ReactElement;
}

const Input = (props: InputProps) => {
  const {
    size = "l",
    label,
    name,
    placeholder = "Enter text...",
    startIcon,
    endIcon,
    error,
    type = "text",
    value = "",
    onChange,
    disabled = false,
    labelIcon,
  } = props;

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    if(!disabled) {
      onChange(e)
    }
  };

  return (
    <div>
      {label && (
        <Label
          htmlFor={name || label}
        >
          <Text
            size={size === "s" ? "s" : "m"}
            color={disabled ? "grayscale400" : "grayscale1000"}
          >
            {label}
          </Text>
          {labelIcon && (
            <div>
              {labelIcon}
            </div>
          )}
        </Label>
      )}
      <InputWrap
        mt={Boolean(label)}
        mb={Boolean(error)}
      >
        {startIcon && (
          <IconLeft>
            {getIcon(startIcon, {
              size: "m",
              color: "grayscale600",
            })}
          </IconLeft>
        )}
        <Text
          as="div"
          size={size === "s" ? "s" : "m"}
          color={disabled ? "grayscale400" : "grayscale800"}
        >
          <InputStyled
            {...((name || label) && { name: name || label })}
            value={value}
            type={type}
            sizeElement={size}
            placeholder={placeholder}
            onChange={(e) => handleOnChange(e)}
            isFilled={Boolean(value)}
            error={Boolean(error)}
            pl={Boolean(startIcon)}
            pr={Boolean(endIcon)}
            disabled={disabled}
          />
        </Text>
        {endIcon && (
          <IconRight>
            {getIcon(endIcon, {
              size: "m",
              color: "grayscale600",
            })}
          </IconRight>
        )}
      </InputWrap>
      {error && (
        <Text
          size="xs"
          color="red600"
        >
          {error}
        </Text>
      )}
    </div>
  )
};

export default Input;
