import React from "react";
import { ReactComponent as DotIcon } from "./svg/dot.svg";
import { ReactComponent as AgileIcon } from "./svg/agile.svg";
import { ReactComponent as EllipseIcon } from "./svg/ellipse.svg";
import { ReactComponent as RectangleIcon } from "./svg/rectangle.svg";
import { ReactComponent as SubtractIcon } from "./svg/subtract.svg";
import styled from "@emotion/styled"
import { keyframes } from "@emotion/css"

type IconType = "agile" | "dot" | "ellipse" | "rectangle" | "subtract"

export interface AnimateI {
  type?: IconType
}

const bounce = keyframes`
    0% {
      transform: scale(0);
      transform-origin: top right;
    }
    100% {
      transform: scale(1);
      transform-origin: top right;
    }
`


const Wrap = styled.div`
  position: relative;
  fill: inherit;
`

const Element = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 250px;
  height: 250px;
  display: flex;
  /* border-radius: 50%; */
  justify-content: center;
  align-items: center;
	border: none;
  background: black;
  transition: width 1s ease-out;
  animation: ${bounce} 1s ease infinite alternate;
  transition: height 1s ease-out;
`;

const Mask = styled.div`
  position: relative;
  z-index: 2;
  fill: inherit;
  svg path {
    fill: red;
  }
`

const getElement = (children) => (
  <Wrap>
    <Element />
    <Mask>
      {children}
    </Mask>
  </Wrap>
)

const getIcon = (type: IconType) => (
  <>
    {type === "agile" && (
      getElement(<AgileIcon />)
    )}
    {type === "dot" && (
      <DotIcon />
    )}
    {type === "ellipse" && (
      <EllipseIcon />
    )}
    {type === "rectangle" && (
      <RectangleIcon />
    )}
    {type === "subtract" && (
      <SubtractIcon />
    )}
  </>
)

const Animate = ({ type = "ellipse" }: AnimateI) => (
  <div>
    {getIcon(type)}
  </div>
)

export default Animate
