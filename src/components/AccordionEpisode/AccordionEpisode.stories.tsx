import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Accordion from ".";

export default {
  title: "AccordionEpisode",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;


const Template: ComponentStory<typeof Accordion> = (args) => <>
  <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    background: "gray",
    padding: "20px"
  }}>
    <Accordion
      {...args}
      subtitle="Episode 1"
      title=""
    >
              23124
    </Accordion>
  </div>
</>;
export const Primary = Template.bind({});

export const StatusComingSoon = Template.bind({});

StatusComingSoon.args = { status: "coming_soon" };

export const StatusView = Template.bind({ status: "view" });

StatusView.args = { status: "viewed" };
