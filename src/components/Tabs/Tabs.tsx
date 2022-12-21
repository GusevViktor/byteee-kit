import React from "react";
import classes from "./tabs.module.scss"
import { Text } from "../Typography";
import { Tab } from "./Tab"

export interface TabsProps {
  className?: string;
  onChange?: () => void;
  onClick: (key: React.Key | null) => void;
  children: React.FunctionComponentElement<Labels>[];
  activeKey: React.Key | null;
}

export interface Labels {
  label: string,
  key: React.Key | null,
}

export interface ChildProps {
  child: React.ReactNode
}


const Tabs = ({ children, onChange, onClick, className, activeKey }: TabsProps) => {
  let labels: Labels[] = [];

  if (Array.isArray(children) && children.length) {
    labels = children.map((child) => ({ label: child.props.label, key: child.key }))
  }

  return (
    <div>
      <ul onChange={onChange}
        className={`${classes.tabs} ${className} ${classes.list}`}>
        {labels.map((label) => (
          <li key={label.key} onChange={onChange} onClick={() => onClick(label.key)}
            className={classes.tab}>
            <Text
              size={["m", 6]}
              font="inter"
              bold
              color={activeKey === label.key ? "grayscale900" : "grayscale400"}
            >
              {label.label}
            </Text>
            {activeKey === label.key && (
              <div className={classes.indicator}/>
            )}
          </li>
        ))
        }
      </ul>
      {React.Children.map(children, (child) => {
        if (activeKey === child.key) {
          return child;
        } else return null;
      })}
    </div>
  )
}
Tabs.Tab = Tab;
export default Tabs;
