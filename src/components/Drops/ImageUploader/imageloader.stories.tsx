import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ImageUploader from "./index";

export default {
  title: "ImageLoader",
  component: ImageUploader,
} as ComponentMeta<typeof ImageUploader>;


const Template: ComponentStory<typeof ImageUploader> = (args) => (
  <ImageUploader{...args}/>
);

export const Default = Template.bind({});
