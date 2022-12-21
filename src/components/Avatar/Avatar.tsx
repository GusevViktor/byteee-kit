import React from "react";
import classes from "./Avatar.module.scss";

export interface AvatarProps {
  status:"online"|"offline";
  className?:string;
  badgeClassName?:string;
  size: "xs"|"s"|"m"|"l"|"xl";
  src:string;
  alt:string;
  style?:React.CSSProperties;
  imageClassname?: string,
}

const Avatar: React.FC<AvatarProps> = ({
  status,
  src,
  alt,
  size,
  style,
  className,
  badgeClassName,
  imageClassname,
}) => {


  if(status === "online"){
    return (
      <div
        style={{
          position: "relative",
          display: "inline-block"
        }}
        className={
          [classes[size],
            className].join(" ")
        }
      >
        <img
          src={src}
          alt={alt}
          className={[
            classes[size], classes.avatar, imageClassname].join(" ")
          }
        />
        <div className={[classes.badge, badgeClassName].join(" ")}/>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className={
        [
          className, classes[size], classes.avatar, imageClassname
        ].join(" ")
      }
      style={style}
    />
  );
};

export default Avatar;
