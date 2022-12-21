import React from "react";
import TimePicker from "react-datepicker";
import color from "../../styles/emotion/color";
import "react-datepicker/dist/react-datepicker.css";
import styled from "@emotion/styled"
import { getSize } from "../Typography";
import { getIcon } from "../Icon";
import moment from "moment";


export type DateValueType = Date | null | undefined;
export interface TimePickerProps {
  placehalder: string;
  value: DateValueType;
  dateFormat?: string;
  timeFormat?: string;
  timeIntervals?: number;
  filterTime?(date: Date): boolean;
  onChange(e: DateValueType): void;
  name: string;
  beforeTime?: [number, number];
  afterTime?: [number, number];
}

const Wrap = styled.div`
  position: relative;
  background: ${color.white};
  .react-datepicker-popper {
    width: 100%;
    z-index: 20 !important;
    .react-datepicker__time-container {
      width: 100%;
      .react-datepicker__time-box {
        width: 100%;
        li {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-size: ${getSize("m", "fs")};
          line-height: ${getSize("m", "lh")};
          color: ${color.grayscale600};
          background: ${color.white};
          padding-left: 16px !important;
          padding-right: 16px !important;
          ::after {
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2;
            margin-left: -26px;
            margin-top: -3px;
            font-size: ${getSize("m", "fs")};
            line-height: ${getSize("m", "lh")};
            color: inherit;
            background: inherit;
            width: 37px;
            height: 20px;
          }
        }
        li.react-datepicker__time-list-item--selected {
          background: ${color.violet} !important;
          
        }
        li.react-custom-datepicker-pm {
          ::after {
            content: "p.m.";
          }
        }
        li.react-custom-datepicker-am {
          ::after {
            content: "a.m.";
          }
        }
        li.react-custom-datepicker-am.react-datepicker__time-list-item--disabled {
          ::after {
            content: "a.m.";
            background: ${color.white};
          }
        }
        li.react-custom-datepicker-pm.react-datepicker__time-list-item--disabled {
          ::after {
            content: "p.m.";
            background: ${color.white};
          }
        }
      }
    }
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
  .react-datepicker__header {
    display: none;
  };
  overflow: hidden;
  border: 1px solid ${color.grayscale300};
  border-radius: 12px;
  width: 100%;
`

const Icon = styled.div`
  position: absolute;
  right: 16px;
  top: 12px;
  z-index: 0;
`

const Input = ({ ...rest }) => (
  <InputComponent
    {...rest}
    value={rest.value.replace("AM", "a.m.").replace("PM", "p.m.")}
  />
);

const handleColor = (time) => time.getHours() > 11 ?
  "react-custom-datepicker-pm" : "react-custom-datepicker-am";

const TimePickerComponent = (props: TimePickerProps) => {

  const {
    onChange,
    value,
    placehalder,
    filterTime,
    dateFormat = "h:mm aa",
    timeFormat = "h:mm aa",
    timeIntervals = 15,
    name,
    beforeTime,
    afterTime,
  } = props;
  const filterTimeDate = (date: Date) => {
    const time = afterTime || beforeTime
    if(time) {
      const firstDate = moment(date).valueOf();
      const dateMs = new Date().setHours(time[0], time[1] || 0, 0)
      const secondDate =
        afterTime ? dateMs : moment(dateMs).subtract(timeIntervals, "minutes");
      return afterTime ? firstDate > secondDate : secondDate > firstDate
    }
    return true
  }

  return (
    <Wrap>
      <TimePicker
        name={name}
        onChange={(e: DateValueType) => onChange(e)}
        selected={value && new Date(value) || null}
        customInput={<Input />}
        dateFormat={dateFormat}
        timeFormat={timeFormat}
        placeholderText={placehalder}
        calendarContainer={MyContainer}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={timeIntervals}
        timeCaption="Time"
        timeClassName={handleColor}
        filterTime={filterTime || filterTimeDate}
      />
      <Icon>
        {getIcon("Clock", {
          size: "m",
          color: "grayscale600",
        })}
      </Icon>
    </Wrap>
  )
};

export default TimePickerComponent;
