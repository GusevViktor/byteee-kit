import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Animate from "../Animate";


export default {
  title: "Animate",
  component: Animate,


} as ComponentMeta<typeof Animate>;

const Template: ComponentStory<typeof Animate> = () => <>
  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "1fr",
    gap: "20px",
  }}>
    <Animate type="agile" />
    <Animate type="dot" />
    <Animate type="ellipse" />
    <Animate type="rectangle" />
    <Animate type="subtract" />
  </div>
</>;
export const All = Template.bind({});
