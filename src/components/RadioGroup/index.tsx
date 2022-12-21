/* eslint-disable @typescript-eslint/indent */

import React from "react";
import RadioButton, { RadioButtonProps } from "../RadioButton"

export interface RadioGroupProps {
  items: RadioButtonProps[],
  name: string,
  className?: string,
  onChange: (e: React.FormEvent<HTMLInputElement>) => void,
}

const RadioGroup = (props: RadioGroupProps) => {
  const { items, name, className, onChange } = props;
  return (
    <div role="group" aria-labelledby={name} className={className}>
      {items.map(item => (
        <RadioButton
          onChange={onChange}
          key={item.value}
          name={name}
          {...item}
        />
      ))}
    </div>
  )
};

export default RadioGroup