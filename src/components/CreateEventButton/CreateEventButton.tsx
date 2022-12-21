import React from "react";
import { Text } from "../Typography";
import classes from "./CreateEvent.module.scss";
import { ReactComponent as CreateEvent } from
  "../../../assets/icons/create_event.svg";

const { wrap } = classes;

export interface CreateEventProps{
  onClick?: () => void;
  disabled?: boolean;
}
const CreateEventButton = ({ onClick, disabled }:CreateEventProps) => (
  <div className={`${wrap} ${disabled && classes.disabled}`} onClick={onClick}>
    <CreateEvent/>
    <Text size="m" as="span" bold color={disabled ? "grayscale200" : "violet600"}>
            Create event
    </Text>
  </div>
);

export default CreateEventButton;
