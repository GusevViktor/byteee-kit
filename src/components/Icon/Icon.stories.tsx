import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconWrap from "./IconWrap";
import Icons, { getIconStroyBock } from ".";
import colors from "../../styles/emotion/color";


export default {
  title: "Icons",
  component: IconWrap,
  argTypes: {
    size: {
      options: ["s", "m"],
      control: { type: "radio" },
    },
    color: {
      options: Object.keys(colors),
      control: { type: "select" },
    },
    fill: {
      options: Object.keys(colors),
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof IconWrap>;

const Template: ComponentStory<typeof IconWrap> = (args) => (
  <div style={{
    display: "flex",
    boxSizing: "border-box",
    width: "100%",
    padding: "20px",
    gap: "20px",
    flexWrap: "wrap",
    alignItems: "flex-start",
    background: "#E5E5E5",
  }}>
    {Object.keys(Icons).map(item => getIconStroyBock(item, {
      ...args,
    }))}
  </div>
);

const TableTemplate: ComponentStory<typeof IconWrap> = (args) => (
  <div style={{
    display: "gap",
    boxSizing: "border-box",
    width: "100%",
    padding: "20px",
    gap: "20px",
    flexWrap: "wrap",
    alignItems: "flex-start",
    background: "#E5E5E5"
  }}>
    <table>
      <tr>
        <th>Icon</th>
        <th>Name</th>
      </tr>
      {Object.keys(Icons).map(item => (
        <tr key={item}>
          <td>
            {getIconStroyBock(item, { ...args, })}
          </td>
          <td style={{ paddingLeft: "20px" }}>
            {item}
          </td>
        </tr>
      ))}
    </table>

  </div>
);

export const All = Template.bind({});
All.args = {
  color: "brand500",
};

export const Table = TableTemplate.bind({});
Table.args = {
  color: "brand500",
};
