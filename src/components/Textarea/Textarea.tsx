import React, { useEffect, useRef } from "react";
import classes from "../Textarea/Textarea.module.scss";
import { Text } from "../Typography";

export interface TextareaProps {
  name?: string;
  label?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onError?: () => void;
  value?: string;
  maxLength: number;
  rows?:number;
  symbolsAmount?:number;
}

const Textarea: React.FC<TextareaProps> = ({
  name,
  label,
  placeholder = "placeholder",
  error,
  errorMessage,
  value,
  className,
  onChange,
  rows,
  symbolsAmount,
  onError,
  maxLength,
}) => {

  const handleOnChange = (e: any) => {
    if (onChange !== undefined) {
      onChange(e);
    }
  };
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [value])

  return (
    <div className={classes.wrap}>
      {
        label &&
        (<label className={classes.label}>
          <Text size={"m"} color={"black"}>
            {label}
          </Text>
          {
            symbolsAmount !== undefined
                &&
                <Text size={"s"} color={"grayscale500"}>{symbolsAmount}</Text>
          }
        </label>)}
      <textarea
        name={name}
        rows={rows}
        ref={textareaRef}
        className={[
          error && classes.error,
          className,
          value && classes.filled].join(" ")}
        placeholder={placeholder}
        onError={onError}
        onChange={handleOnChange}
        value={value}
        maxLength={maxLength}
      />
      {error && <div className={classes.textError}>{errorMessage}</div>}
    </div>

  );
};

export default Textarea;
