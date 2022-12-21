import React from "react";
import { getIcon } from "../Icon";
import classes from "./Role.module.scss";
export interface RoleProps {
  value: "attendee" | "organizer" | "speaker";
}

const Role = ({ value }: RoleProps) => {
  const role = value?.charAt(0).toUpperCase() + value?.slice(1);
  const icon = () => {
    switch (value) {
      case "attendee":
        return "Attendee";
      case "organizer":
        return "Organizer";
      case "speaker":
        return "Microphone";
      default:
        return "Attendee";
    }
  };
  const Icon = value && getIcon(icon(), { size: "s", color: "grayscale600" });

  return (
    <div className={classes.wrap}>
      <div className={classes.icon}>
        {Icon}
      </div>
      <p>
        {role}
      </p>
    </div>
  );
};

export default Role;
