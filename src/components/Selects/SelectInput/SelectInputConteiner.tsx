import React, { useState } from "react";
import SelectInput, { SelectInputProps } from ".";

export const defaultOptions = [
  {
    value: "red",
    label: "Red",
  },
  {
    value: "black",
    label: "Black",
  },
  {
    value: "green",
    label: "Green",
  },
  {
    value: "pink",
    label: "Pink",
  },
  {
    value: "orange",
    label: "Orange",
  },
]
const SelectInputConteiner = (props: SelectInputProps) => {
  const [value, setValue] = useState("")
  const [options, setOptions] = useState(defaultOptions)
  const [option, setOption] = useState({
    value: "",
    label: "",
  })
  return (
    <div>
      <SelectInput
        {...props}
        placeholder={"Colors"}
        option={option}
        value={value}
        options={options}
        onChange={
          (e) => {
            setValue(e.currentTarget.value);
            setOptions(defaultOptions.filter(
              (i) => i.value.indexOf(e.currentTarget.value) !== -1
            ));
          }
        }
        onClick={
          (e) => {
            setValue(e.label)
            setOption({
              value: e.value,
              label: e.label,
            })

          }
        }
      />
    </div>

  )
};

export default SelectInputConteiner;
