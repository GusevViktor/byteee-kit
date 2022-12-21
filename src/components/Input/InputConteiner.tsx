import React, { useState } from "react";
import Input, { InputProps } from "../Input";


const InputConteiner = (props: InputProps) => {
  const [value, setValue] = useState("")
  return (
    <div>
      <Input
        {...props}
        onChange={(text) => setValue(text.currentTarget.value)}
        value={value}
      />
    </div>

  )
};

export default InputConteiner;
