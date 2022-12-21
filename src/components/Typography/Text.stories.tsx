import React from "react";
import { Text, TextProductProps, typeSizesProduct } from ".";
import typography from "../../styles/emotion/typography";

export default {
  title: "Text Product",
  component: Text
};

const Template = (args: TextProductProps) => {
  const keys = Object.keys(typography.product)
  return (
    <div>
      {keys.map((name) => {
        const newName = name as typeSizesProduct
        return (
          <div key={`Size: ${name}`}>
            <Text {...args} size={newName}>
              {`Size: ${name}`}
            </Text>
          </div>
        )
      })}
    </div>
  )
};


export const All = Template.bind({});
