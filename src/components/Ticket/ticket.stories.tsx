import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Ticket from "./index";
import avatar from "../../../public/avatar.svg";
import Button from "../Button/Button";
import style from "./stories.module.scss"

const { wrap, widthTicket } = style;
export default {
  title: "Ticket",
  component: Ticket,

} as ComponentMeta<typeof Ticket>;

const Component = (args) => <div className={widthTicket}>
  <Ticket {...args}
    status="upcoming"
    date="Jan 22, 2023"
    time="11:00 a.m.– 7:00 p.m."
    organizer="Alex Wander"
    src={avatar}
  >
    <Button size="s">Register</Button>
  </Ticket>
</div>
const Component2 = (args) => <div className={widthTicket}>
  <Ticket {...args}
    status="live"
    date="Jan 22, 2023"
    time="11:00 a.m.– 7:00 p.m."
    organizer="Alex Wander"
    src={avatar}
  >
    <>
      <Button size="s">Register</Button>
      <Button type="outline" size="s">Cancel speaking</Button>
    </>
  </Ticket>
</div>

const Template: ComponentStory<typeof Ticket> = (args) => (
  <div className={wrap}>
    <div className={widthTicket}>
      <Ticket {...args}
        status="draft"
        date="Jan 22, 2023"
        time="11:00 a.m.– 7:00 p.m."
        organizer="Alex Wander"
        src={avatar}/>
    </div>
    <Component {...args}/>
    <Component2 {...args}/>
  </div>
)

export const Primary = Template.bind({});
