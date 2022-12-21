import React from "react";

export interface TabProps {
  key: string | number;
  label: string;
  children?: React.ReactNode;
}

export const Tab = ({ children }: TabProps) => (
  <>{children && children}</>
)
