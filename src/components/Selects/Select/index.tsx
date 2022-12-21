import React, { useState } from "react";
import { Select as SelectStyled, Arrow, SelectWrap } from "./style";
import { List, Item } from "../style";
import { Text } from "../../Typography";
import { getIcon } from "../../Icon/index";

type OptionType = {
  value: string,
  label: string,
}

export interface SelectProps {
  onClick: (e: OptionType) => void;
  option: OptionType;
  options: OptionType[];
  label?: string;
  placeholder?: string;
  size?: "l" | "m" | "s";
  disabled?: boolean;
  location?: "left" | "right" | "center";
}

const Select = (props: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const {
    size = "l",
    label,
    placeholder = "Enter text...",
    onClick,
    disabled = false,
    options,
    location = "left",
    option,
  } = props;

  let timeoutID


  const handleOnClick = (e: OptionType) => {
    if(!disabled) {
      onClick(e)
    }
  };

  const onClickSelect = () => {
    window.clearTimeout(timeoutID)
    setIsOpen(!isOpen)
  }

  const onMouseLeaveList = () => {
    timeoutID = window.setTimeout(() => {
      setIsOpen(false)
    }, 1000)
  }

  const onMouseMoveList = () => {
    window.clearTimeout(timeoutID)
  }

  return (
    <>
      {label && (
        <Text
          size={size === "s" ? "s" : "m"}
          color={disabled ? "grayscale400" : "grayscale1000"}
        >
          {label}
        </Text>
      )}
      <SelectWrap
        mt={Boolean(label)}
      >

        <SelectStyled
          value={option.value}
          sizeElement={size}
          disabled={disabled}
          onClick={onClickSelect}
          isOpen={isOpen}
          type="button"
        >
          <Text
            as="p"
            size={size === "s" ? "s" : "m"}
            color={disabled ? "grayscale400" : "grayscale600"}
          >
            {option?.label || placeholder}
          </Text>
          <Arrow
            isRotate={isOpen}
          >
            {getIcon("ChevronDown", {
              size: "m",
              color: "grayscale400",
            })}
          </Arrow>
          <List
            visible={isOpen}
            location={location}
            onMouseLeave={onMouseLeaveList}
            onMouseMove={onMouseMoveList}
            sizeElement={size}
          >
            {options.map(item => (
              <Item
                onClick={() => handleOnClick(item)}
                key={item.value}
                sizeElement={size}
                selected={item.value === option.value}
              >
                <Text
                  as="span"
                  color="grayscale1000"
                  size="m"
                >
                  {item.label}
                </Text>
              </Item>
            ))}
          </List>
        </SelectStyled>
      </SelectWrap>
    </>
  )
};

export default Select;
