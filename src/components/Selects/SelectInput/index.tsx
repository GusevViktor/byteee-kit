import React, { useState } from "react";
import { Arrow, Wrapper, Input } from "./style";
import { List, Item } from "../style";
import { Text } from "../../Typography";
import { getIcon } from "../../Icon/index";

type OptionType = {
  value: string,
  label: string,
}

export interface SelectInputProps {
  onClick: (e: OptionType) => void;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  option: OptionType;
  options: OptionType[];
  placeholder?: string;
  size?: "l" | "m" | "s";
  disabled?: boolean;
  location?: "left" | "right" | "center";
  value: string;
}

const SelectInput = (props: SelectInputProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const {
    size = "l",
    placeholder = "Enter text...",
    onClick,
    disabled = false,
    options,
    location = "left",
    option,
    onChange,
    value,
  } = props;

  let timeoutID

  const handleOnClick = (e: OptionType) => {
    if(!disabled) {
      onClick(e)
    }
  };
  const openSelect = () => {
    window.clearTimeout(timeoutID)
    setIsOpen(true)
  }
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
  const onChangeInput = (e) => {
    onChange(e)
    openSelect()

  }

  return (
    <Wrapper
      disabled={disabled}
      sizeElement={size}
    >
      <Input
        placeholder={placeholder}
        sizeElement={size}
        value={value}
        onChange={onChangeInput}
      />
      <Arrow
        isRotate={isOpen}
        onClick={() => onClickSelect()}
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

    </Wrapper>
  )
};

export default SelectInput;
