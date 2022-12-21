import React, { useEffect, useState } from "react";
import style from "./style.module.scss"
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw, EditorState } from "draft-js";
import { getIcon } from "../Icon";

const { wrapper,
  editor,
  toolbar,
  option,
  svg,
  wrapAll,
  filled,
  hidePlaceholder } = style;

export interface TextEditorProps {
  placeholder?: string,
  onChange?: (e: EditorState) => void,
  value?: EditorState
}

const TextEditor = ({ placeholder, onChange, value }: TextEditorProps) => {
  const emptyState = EditorState.createEmpty();
  const [state, setState] = useState(value? value : emptyState);
  const rawState = convertToRaw(state.getCurrentContent());
  const textLength = rawState.blocks[0].text.length;

  useEffect(() => {
    if (onChange) {
      onChange(state)
    }
  }, [state]);

  function BoldIconButton(props: {
    onChange: (prop: string, value: boolean) => void,
    currentState: { bold: boolean }
  }) {
    return (
      <div
        onClick={() => {
          props.onChange("bold", true)
        }}
        className={svg}>
        {getIcon("Bold", {
          size: "m",
          color: props.currentState.bold
            ? "violet700"
            : "grayscale500",
        })}
      </div>
    )
  }

  function ListIconButton(props: {
    onChange: (prop: string, value: boolean) => void,
    currentState: { listType: string }
  }) {
    return (
      <div
        onClick={() => {
          props.onChange("unordered", true)
        }}
        className={svg}>
        {getIcon("List", {
          size: "m",
          color: props.currentState.listType === "unordered"
            ? "violet700"
            : "grayscale500",
        })}
      </div>
    )
  }


  return (
    <div className={`${wrapAll} 
    ${rawState.blocks[0].type === "unordered-list-item" && hidePlaceholder}`}>
      <Editor
        editorState={state}
        toolbarClassName={`${toolbar} 
        ${textLength > 0 && filled}`}
        wrapperClassName={`${editor} 
        ${textLength > 0 && filled}`}
        editorClassName={wrapper}
        tabIndex={0}
        onEditorStateChange={setState}
        placeholder={placeholder}
        toolbar={{
          options: ["inline", "list"],
          inline: {
            inDropdown: false,
            options: ["bold"],
            bold: { className: option },
            component: BoldIconButton
          },
          list: {
            inDropdown: false,
            options: ["unordered"],
            unordered: { className: option },
            component: ListIconButton
          },
        }}
      />
    </div>)
};

export default TextEditor;
