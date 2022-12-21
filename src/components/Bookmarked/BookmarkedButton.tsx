import React from "react";
import { getIcon } from "../Icon";
import classes from "./BookmarkedButton.module.scss"

export interface BookmarkProps {
  onClick?: () => void;
  onChange?: () => void;
  disabled?: boolean;
  checked?: boolean;
}
const { wrap, disable } = classes

const BookmarkedButton = ({
  onClick,
  onChange,
  checked,
  disabled
}: BookmarkProps) => (
  <div className={`${wrap} ${checked} ${disabled && disable } `}
    onClick={onClick}
    onChange={onChange}>
    {getIcon("Bookmark", {
      size: "m",
      ...(checked ? { color: "violet600" } : { color: "violet" }),
      ...(checked && { fill: "violet600" }),
      ...(disabled && { color: "grayscale300" })
    })}
  </div>
);

export default BookmarkedButton;
