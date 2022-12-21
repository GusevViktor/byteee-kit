import React, { ReactElement, } from "react";
import classes from "./Header.module.scss";
import Logo from "../Logo";

export interface HeaderProps {
  children?: ReactElement;
  accountElements?: ReactElement;
  style?:React.CSSProperties;
  className?:string;
}


export const Header = ({
  children,
  accountElements,
}: HeaderProps) => (
  <div className={classes.container}>
    <header className={classes.header}>
      <div >
        <Logo theme="dark" />
      </div>
      <div>
        <nav className={classes.nav}>
          {children}
        </nav>
      </div>
      <div className={classes.buttons}>
        {accountElements}
      </div>
    </header>
  </div>
);
