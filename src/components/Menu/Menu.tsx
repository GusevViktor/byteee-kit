import React, { ReactElement, useState } from "react";
import { getIcon } from "../Icon";
import classes from "./Menu.module.scss";


export interface MenuProps {
  children?: ReactElement | string | ReactElement[];
  className?: string;
  open?: boolean;
  title: string;
  size?: "l" | "m";
  endIcon?: "more" | "another";
  onClick?: () => void
}


const Menu = ({
  children,
  title,
  open = false,
  size = "l",
  endIcon = "more",
}: MenuProps) => {
  const [isOpen, setOpen] = useState(open);

  function onClickHandler() {
    setOpen(!isOpen);
  }
  const rootClasses = {
    "more": !isOpen ? "" : classes.icon_rotate,
  };
  const className = rootClasses[endIcon];
  return (
    <div>
      <div className={classes.head} onClick={onClickHandler}>
        <p
          className={classes[size]}
        >
          {title}
        </p>
        <div className={className}>
          {getIcon((
            endIcon === "more" ? "MoreVertical" : "MoreVertical"
          ), {
            size: "m",
          })}
        </div>

      </div>
      {isOpen && <ul className={classes.menuList}>
        {children}
      </ul>
      }
    </div>
  );
};

export default Menu;
