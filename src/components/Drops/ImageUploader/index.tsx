import React, { useEffect, useRef, useState } from "react";
import classes from "./style.module.scss";
import { Text } from "../../Typography";
import { getIcon } from "../../Icon";
import { fileReader, fileToUrl } from "../fileReader";
import { useDropzone } from "react-dropzone";


const { wrap, input, content, img, deleteButton, readonly } = classes;

export interface UploaderProps {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  value?: string;
  srcImage?: string;
}

const ImageUploader = ({
  onChange: onChangeProp,
  value,
  srcImage
} : UploaderProps) => {
  const [src, setSrc] = useState("hidden" || srcImage );
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone();
  const dropZoneProps = getInputProps();
  const rootDropZoneProps = getRootProps();
  const inputRef = useRef<HTMLInputElement>(null)
  const onChange = (event) => {
    fileReader(event, setSrc)
    onChangeProp && onChangeProp(event);
  }

  useEffect(() => {
    fileToUrl(acceptedFiles[0], setSrc)
  }, [acceptedFiles]);

  useEffect(() => {
    setSrc(srcImage || "hidden")
  }, [srcImage])

  return (
    <div {...rootDropZoneProps}
      onClick={src !== "hidden" ? undefined : rootDropZoneProps.onClick}
      className={wrap} >
      <label
        className={`${input} ${src !== "hidden" && readonly}`}>
        <input
          {...dropZoneProps}
          type="file"
          value={value}
          accept="image/png, image/jpeg"
          onChange={onChange}
          className={src !== "hidden" ? readonly : ""}
          ref={inputRef}
        />
        {
          src === "hidden" &&
          <div className={ content }>
            {getIcon("Image", {
              size: "m",
              color: "grayscale400",
            })}
            <Text size="m" bold font="inter" color="grayscale400">
                Drop or click to upload
              <br/>
                file here
            </Text>
          </div>
        }
        <img className={img} src={src} alt={src}/>
      </label>
      {src !== "hidden" &&
      <div className={deleteButton} onClick={() => {
        if (inputRef.current !== null){
          inputRef.current.value = ""
        }
        setSrc("hidden")
      }}>
        {getIcon("Trash_2", {
          size: "m",
          color: "violet600",
        })}
      </div>
      }
    </div>
  )
};

export default ImageUploader;
