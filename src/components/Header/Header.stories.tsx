import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from "./Header";
import Button from "../Button/Button";

export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} >
  <>
    <Button type={"flat"} size={"s"} theme={"black"}>Events</Button>
    <Button type={"flat"} size={"s"} theme={"black"}>Events</Button>
    <Button type={"flat"} size={"s"} theme={"black"}>Events</Button>
    <Button type={"flat"} size={"s"} theme={"black"}>Events</Button>
    <Button type={"flat"} size={"s"} theme={"black"}>Events</Button>
    <Button type={"flat"} size={"s"} theme={"black"}>Events</Button>
  </>
</Header>;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  accountElements: <>
    <Button size={"s"}>out</Button>
  </>
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  accountElements: (
    <div style={{ display: "flex" }}>
      <Button type={"flat"} size={"s"}>Login</Button>
      <Button type={"solid"} size={"s"}>SignUp</Button>
    </div>
  )
};
