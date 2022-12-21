import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tag from "./index";


export default {
  title: "Tag",
  component: Tag,

} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = () => {
  const [active, setActive] = useState(false)
  return (
    <Tag active={active} onClick={(active) => setActive(!active)}>
      Organizer
    </Tag>
  )
}

export const Primary = Template.bind({});
