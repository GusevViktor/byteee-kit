import React, { useState } from "react";
import Select, { SelectProps } from ".";


const SelectConteiner = (props: SelectProps) => {
  const [value, setValue] = useState({
    value: "",
    label: "",
  })
  return (
    <div>
      <Select
        {...props}
        placeholder={"Colors"}
        options={[
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
        ]}
        onClick={(e) => setValue(e)}
        option={value}
      />
    </div>

  )
};

export default SelectConteiner;
