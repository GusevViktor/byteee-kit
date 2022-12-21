import React from "react";
import { getIcon } from "../Icon";
import classes from "./Bookmark.module.scss"

export interface BookmarkProps {
  onClick?: () => void;
  onChange?: () => void;
  checked?: boolean;
  key?: string | number;
}

const { wrap } = classes

const Bookmark = ({
  onClick,
  onChange,
  key,
  checked
}: BookmarkProps) => (
  <div
    className={wrap}
    onClick={onClick}
    onChange={onChange}
    key={key}>
    {getIcon("Bookmark", {
      size: "s",
      color: "white",
      ...(checked && { fill: "white" }),
    })}
  </div>
);

export default Bookmark;
