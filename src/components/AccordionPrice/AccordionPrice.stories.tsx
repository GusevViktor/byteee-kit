import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AccordionPrice from ".";


export default {
  title: "AccordionPrice",
  component: AccordionPrice,
} as ComponentMeta<typeof AccordionPrice>;


const Template: ComponentStory<typeof AccordionPrice> = (args) => (
  <div style={{
    display: "flex",
    padding: "20px",
    flexDirection: "column",
    alignItems: "flex-start",
    background: "#E5E5E5"
  }}>
    <AccordionPrice {...args}/>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      title:
        "I use Free right now." +
        "What happens when you roll out other plans?",
      content:
        "We’ll notify you and other registered users" +
        "in advance. After that, you’ll still be able to organize" +
        "free events with all the features you had before or upgrade to a" +
        "paid plan with even more useful tools and options.",
    },
    {
      title: "Is Pro a subscription-based plan?",
      content:
        "No, we don’t do subscriptions. You only pay for what you  need: " +
        " for organizing an event or for a ticket if the admission isn’t free.",
    },
  ]
  // Icon: '/img/broadcast_icon.svg' || '/img/broadcast_icon.svg'
};
