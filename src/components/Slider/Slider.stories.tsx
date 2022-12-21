import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Slider, { TypeValue } from ".";

export default {
  title: "Slider",
  component: Slider,

} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => {
  const [valueViolet, setValueViolet] = useState<TypeValue>(0);
  const [valueBlue, setValueBlue] = useState<TypeValue>(0);
  const [valueDisabled, setValueDisabled] = useState<TypeValue>(0);
  const isArrayValue = typeof args.defaultValue !== "number"

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td style={{ border: "1px solid" }}>Value Violet</td>
            <td style={{ border: "1px solid" }}>Value Blue</td>
            <td style={{ border: "1px solid" }}>Value Disabled</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid" }}>
              {isArrayValue ? valueViolet[0] : valueViolet}
            </td>
            <td style={{ border: "1px solid" }}>
              {isArrayValue ? valueBlue[0] : valueBlue}
            </td>
            <td style={{ border: "1px solid" }}>
              {isArrayValue ? valueDisabled[0] : valueDisabled}
            </td>
          </tr>
          {isArrayValue && (
            <tr>
              <td style={{ border: "1px solid" }}>{valueViolet[1]}</td>
              <td style={{ border: "1px solid" }}>{valueBlue[1]}</td>
              <td style={{ border: "1px solid" }}>{valueDisabled[1]}</td>
            </tr>
          ) }
        </tbody>
      </table>
      <div>
        <h3>
        Violet
        </h3>
        <div style={{ width: "200px" }}>
          <Slider
            min={0}
            max={1000}
            step={10}
            {...args}
            onChange={value => setValueViolet(value)}
          />
        </div>
        <h3>
        Blue
        </h3>
        <div style={{ width: "200px" }}>
          <Slider
            theme="blue"
            min={0}
            max={1000}
            step={250}
            {...args}
            onChange={value => setValueBlue(value)}
          />
        </div>
        <div style={{ marginBottom: "20px" }} />
        <h3>
          Disabled
        </h3>
        <div style={{ width: "200px" }}>
          <Slider
            min={0}
            max={1000}
            step={10}
            disabled={true}
            {...args}
            onChange={value => setValueDisabled(value)}
          />
        </div>
      </div>
    </div>

  )
};

export const All = Template.bind({});

All.args = {
  range: false, defaultValue: 100
}

export const Range = Template.bind({ range: true, defaultValue: [10, 100] });

Range.args = {
  range: true, defaultValue: [10, 100]
}