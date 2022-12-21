import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PhotoUploader from "./PhotoUploader";

export default {
  title: "Drop",
  component: PhotoUploader,
} as ComponentMeta<typeof PhotoUploader>;


const Template: ComponentStory<typeof PhotoUploader> = (args) => (
  <PhotoUploader{...args}/>
);

export const Default = Template.bind({});
