import React, { useEffect, useState } from "react";
import classes from "./PhotoUploader.module.scss";
import { Text } from "../../Typography";
import { getIcon } from "../../Icon";
import { fileReader } from "../fileReader";


export interface UploaderProps {
  onClick?: () => void;
  onClickEdit?:() => void;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  value?: string;
  srcImage?: string;
  readonly?:boolean;
}

const { wrap, input, content, img, edit, borderNone } = classes;


const PhotoUploader = ({
  onChange: onChangeProp,
  onClickEdit,
  readonly,
  onClick,
  value,
  srcImage
} : UploaderProps) => {
  const [src, setSrc] = useState("hidden" || srcImage );
  const onChange = (event) => {
    fileReader(event, setSrc)
    onChangeProp(event);
  }
  useEffect(() => {
    setSrc(srcImage || "hidden")
  }, [srcImage])
  return (
    <div className={`${wrap} ${readonly && classes.readonly}`}>
      <label
        className={`${input} ${src !== "hidden" && borderNone && classes.readonly}`}
        onClick={onClick}>
        <input
          type="file"
          value={value}
          accept="image/png, image/jpeg"
          onChange={onChange}
          readOnly={readonly}
        />
        {
          src === "hidden" &&
        <div className={ content }>
          {getIcon("Image", {
            size: "m",
            color: "grayscale500",
          })}
          <Text size={"xs"} font={"inter"} color={"grayscale500"}>
              Upload your
            <br/>
              photo
          </Text>
        </div>
        }
        <img className={img} src={src}/>
      </label>
      {src !== "hidden" && !readonly && <div className={edit} onClick={onClickEdit}>
        {getIcon("Edit_2", {
          size: "m",
          color: "violet600",
        })}
      </div> }
    </div>
  )
};

export default PhotoUploader;
