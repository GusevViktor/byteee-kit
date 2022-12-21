import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DatePicker, { DateValueType } from "./";

export default {
  title: "DatePicker",
  component: DatePicker,

} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = () => {
  const [value, setValue] = useState<DateValueType>();
  return (
    <div>
      <div style={{ width: "200px" }}>
        <DatePicker
          value={value}
          onChange={e => setValue(e)}
          placehalder="Send Date"
        />
      </div>
      <div style={{ marginBottom: "20px" }} />
    </div>
  )
};

export const Primary = Template.bind({});