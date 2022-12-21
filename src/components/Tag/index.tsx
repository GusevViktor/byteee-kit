import React from "react";
import styled from "@emotion/styled"
import colors from "../../styles/emotion/color";
import { getIcon } from "../Icon";
import { Text } from "../Typography";

export interface TagProps {
  active: boolean;
  key?: string;
  onClick: (active: boolean) => void;
  children: React.ReactNode;
}

const TagComponent = styled.div<{active: boolean}>`
  box-sizing: border-box;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: auto;
  border-radius: 50px;
  overflow: hidden;
  padding: 8px 24px;
  border: 1px solid ${colors.grayscale200};
  background: ${colors.white};
  cursor: pointer;
  ${({ active }) => active && `border: 1px solid ${colors.violet300}`};
  p {
    ${({ active }) => active && "margin-right: 8px"};
  }
  ::hover {
    border: 1px solid ${colors.grayscale400};
    ${({ active }) => active && `border: 1px solid ${colors.violet300}`};
  }
  ::active {
    border: 1px solid ${colors.grayscale100};
    ${({ active }) => active && `border: 1px solid ${colors.violet300}`};
  }
`

const Tag = ({ children, onClick, active, key }: TagProps) => {

  const onClickTag = () => onClick(active)
  return (
    <TagComponent active={active} onClick={onClickTag} key={key}>
      <Text size="m" color={active ? "violet600" : "grayscale800"}>
        {children}
      </Text>
      {active && (
        getIcon("X", {
          size: "s",
          color: "violet600",
        })
      )}
    </TagComponent>
  )
}

export default Tag
