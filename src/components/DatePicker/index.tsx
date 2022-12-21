import React, { useRef, forwardRef } from "react";
import DatePicker from "react-datepicker";
import color from "../../styles/emotion/color";
import "react-datepicker/dist/react-datepicker.css";
import styled from "@emotion/styled"
import { getSize } from "../Typography";
import { getIcon } from "../Icon";

export type DateValueType = Date | null | undefined;

export interface DatePickerProps {
  placehalder: string;
  value: DateValueType;
  dateFormat?: string;
  name?: string;
  onChange(e: DateValueType): void;
}

const Wrap = styled.div`
  position: relative;
  background: ${color.white};
  .react-datepicker-popper {
    z-index: 20 !important;
  }
`

const InputComponent = styled.input`
  position: relative;
  background: transparent;
  display: flex;
  width: 100%;
  justify-content: space-between;
  border: 1px solid red;
  padding: 12px 48px 12px 16px;
  border: 1px solid ${color.grayscale300};
  border-radius: 12px;
  font-size: ${getSize("m", "fs")};
  line-height: ${getSize("m", "lh")};
  color: ${color.grayscale600};
  z-index: 2;
  cursor: pointer;
  caret-color: ${color.grayscale300};
  &:focus-visible {
    border: 1px solid ${color.grayscale300};
    outline: none;
  }
  &:active {
    border: 1px solid ${color.grayscale300};
  }
  &::placeholder {
    font-size: ${getSize("m", "fs")};
    line-height: ${getSize("m", "lh")};
    color: ${color.grayscale600};
  }
`
const MyContainer = styled.div`
  border: 1px solid ${color.grayscale300};
`

const Icon = styled.div`
  position: absolute;
  right: 16px;
  top: 12px;
  z-index: 0;
`

const Input = forwardRef<any, any>(({ ...rest }, ref) => (
  <InputComponent
    {...rest}
    forwardedref={ref}
  />
));

Input.displayName = "InputDatePicker";

const DatePickerComponent = (props: DatePickerProps) => {
  const ref = useRef();
  const {
    onChange,
    value,
    placehalder,
    dateFormat = "MMM dd, yyyy",
    name,
  } = props;

  return (
    <Wrap>
      <DatePicker
        name={name}
        onChange={(e: DateValueType) => onChange(e)}
        selected={value}
        customInput={<Input ref={ref} />}
        dateFormat={dateFormat}
        placeholderText={placehalder}
        calendarContainer={MyContainer}
      />
      <Icon>
        {getIcon("Calendar", {
          size: "m",
          color: "grayscale600",
        })}
      </Icon>
    </Wrap>
  )
};

export default DatePickerComponent;
