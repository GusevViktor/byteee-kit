
import React from "react";
import styled from "@emotion/styled"
import Colors from "../../styles/emotion/color";

export const sizes = {
  "m": {
    width: 24,
    height: 24,
    strokeWidth: 2,
  },
  "s": {
    width: 16,
    height: 16,
    strokeWidth: 1,
  }
}

interface ElementProps {
  color: keyof typeof Colors;
  fill?: keyof typeof Colors;
  width: number;
  height: number;
  strokeWidth: number;
}

export interface IconProps {
  color?: keyof typeof Colors;
  fill?: keyof typeof Colors;
  size?: "m" | "s";
}

export interface ComponentProps extends IconProps {
  children: React.ReactNode;
}

const Element = styled.div<ElementProps>`
  color: ${({ color }) => color ? Colors[color] : ""};
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  outline: 0;
	padding: 0;
	margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
	border: none;
  svg {
    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};
  }
  svg path {
    stroke: ${({ color }) => color ? Colors[color] : ""};
    strokeWidth: ${({ strokeWidth }) => strokeWidth && ""};
    fill: ${({ fill }) => fill ? Colors[fill] : "transparent"};
  }
`;

const Icon = (props: ComponentProps) => {
  const {
    children,
    size = "s",
    color = "black",
    fill
  } = props;

  return (
    <Element
      width={sizes[size].width}
      height={sizes[size].height}
      color={color}
      fill={fill}
      strokeWidth={sizes[size].strokeWidth}
    >
      {children}
    </Element>
  )
};

export default Icon