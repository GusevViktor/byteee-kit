import React from "react";
import { TextOP, typeSizesOpenPart } from ".";
import typography from "../../styles/emotion/typography";

export default {
  title: "Text Open Part",
  component: TextOP
};

const Template = (args: typeSizesOpenPart) => {
  const keys = Object.keys(typography.openPart)
  return (
    <div>
      {keys.map((name) => {
        const newName = name as unknown as typeSizesOpenPart
        return (
          <div key={`Size: ${name}`}>
            <TextOP {...args} size={newName}>
              {`Size: ${name}`}
            </TextOP>
          </div>
        )
      })}
    </div>
  )
};


export const All = Template.bind({});
