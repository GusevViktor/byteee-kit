import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tabs from "./Tabs";


export default {
  title: "Tabs",
  component: Tabs,

} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = () => {
  const [selected, setSelected] = useState<React.Key| null>("1");

  return (
    <Tabs activeKey={selected} onClick={(key) => setSelected(key)}>
      <Tabs.Tab key={"1"} label={"My events"}>
        <div
          style={{
            padding: 10,
            borderRadius: 10,
            background: "#ffefef",
            color: "grey",
            fontWeight: 700
          }}>
                    Component ❤️
        </div>
      </Tabs.Tab>
      <Tabs.Tab key={"2"} label={"Analytics"} >
        <div
          style={{
            padding: 10,
            borderRadius: 10,
            background: "#f1e1fa",
            color: "grey",
            fontWeight: 700
          }}>

                    Component 💜
        </div>
      </Tabs.Tab>
      <Tabs.Tab key={"3"} label={"My events"}>
        <div
          style={{
            padding: 10,
            borderRadius: 10,
            background: "#e3f1c9",
            color: "grey",
            fontWeight: 700
          }}>
                Component 💚
        </div>
      </Tabs.Tab>
    </Tabs>
  )

}

export const Primary = Template.bind({});
