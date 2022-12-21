import React from "react";
import style from "./style.module.scss"
import Status from "../Status/Status";
import { Text } from "../Typography";
import { Avatar } from "../../index";

export interface TicketProps {
  status?: string,
  children?: React.ReactNode | React.ReactElement,
  onClickUser?: () => void;
  className?: string,
  date?: string,
  time?: string,
  organizer: string,
  src: string,
}

const {
  wrap,
  topBlock,
  dateSection,
  info,
  organizerInfo,
  topBlockWithChild,
  border,
  mb,
  component
} = style;

const Ticket = ({
  status,
  onClickUser,
  children,
  date,
  time,
  organizer,
  src
}: TicketProps) => {

  const statusColor = (status: string) => {
    switch (status) {
      case "live":
        return "mint";
      case "upcoming":
        return "blue";
      case "past":
        return "grayscale";
      case "draft":
        return "tangerine";
      default:
        throw new Error("smth is wrong");
    }
  };
  const capitalizeFirstLetter =
    (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <div className={wrap}>
      <div className={`${topBlock} ${children && topBlockWithChild}`}>
        {status &&
            <div className={mb}>
              <Status
                color={statusColor(status)}
                text={capitalizeFirstLetter(status)}
                size="m"/>
            </div>}
        <div className={dateSection}>
          <Text size={6} bold>
            {date}
          </Text>
          <Text size="m">
            {time}
          </Text>
        </div>
        <div className={info}>
          <Text size="xs" color="grayscale500">
            Organizer
          </Text>
          <div className={organizerInfo} onClick={onClickUser}>
            <Avatar size="xs" src={src} status="offline" alt={src}/>
            <Text size="s">{organizer}</Text>
          </div>
        </div>
        {children &&
            <div className={border}>
              <div/>
            </div>
        }
      </div>
      {children &&
          <div className={component}>
            {children}
          </div>}
    </div>
  )
}
export default Ticket;