import React from "react";
import LogoDark from "./LogoDark"

export interface LogoI {
  theme: "dark" | "light"
}

const Logo = ({ theme }: LogoI) => (
  <>
    {theme === "dark" && (
      <LogoDark />
    )}
    {theme === "light" && (
      <LogoDark />
    )}
  </>
)

export default Logo
