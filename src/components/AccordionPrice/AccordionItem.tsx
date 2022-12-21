import React, { useState } from "react";
import { getIcon } from "../Icon";
import { Text } from "../Typography";
import styled from "@emotion/styled"
import media from "../../styles/emotion/media"
export interface AccordionI {
  title: string;
  content: string;
}

const Title = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
  padding-right: 32px;
  ${media.tp} {
    padding-right: 128px;
  }
  ${media.d} {
    padding-right: 192px;
  } 
  ${media.dhd} {
    padding-right: 200px;
  } 
`

const Arrow = styled.div<{ isRotate: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  z-index: 1;
  transition: transform .3s linear;

  ${({ isRotate }) => isRotate && "transform:rotate(180deg);"};
`

const Content = styled.div`
  margin-top: 28px;
  ${media.tp} {
    margin-top: 16px;
  }
  ${media.d} {
    margin-top: 8px;
  }
`

function AccordionTitle({ title, content }: AccordionI) {
  const [active, setActive] = useState(false);

  const clickHandler = () => {
    setActive(!active);
  }

  return (
    <div>
      <Title onClick={clickHandler}>
        <Text
          size={["m", "m", "l"]}
        >
          {title}
        </Text>
        <Arrow
          isRotate={active}
        >
          {getIcon("ChevronDown", {
            size: "m",
            color: "violet600",
          })}
        </Arrow>

      </Title>
      {active && (
        <Content>
          <Text
            size={["s", "s", "m"]}
          >
            {content}
          </Text>
        </Content>
      )}
    </div>
  );
}

export default AccordionTitle;
