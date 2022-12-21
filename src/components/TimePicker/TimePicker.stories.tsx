import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TimePicker, { DateValueType } from ".";

export default {
  title: "TimePicker",
  component: TimePicker,

} as ComponentMeta<typeof TimePicker>;

const Template: ComponentStory<typeof TimePicker> = () => {
  const [value, setValue] = useState<DateValueType>();
  return (
    <div>
      <div style={{ width: "200px", margin: "0 0 20px 0" }}>
        <TimePicker
          name="test-timepicker"
          value={value}
          onChange={e => setValue(e)}
          placehalder="Send Date"
          afterTime={[10, 15]}
        />
      </div>
      <div style={{ width: "200px" }}>
        <TimePicker
          name="test-timepicker"
          value={value}
          onChange={e => setValue(e)}
          placehalder="Send Date"
          beforeTime={[10, 15]}
        />
      </div>
      <div style={{ marginBottom: "20px" }} />
    </div>
  )
};

export const Primary = Template.bind({});