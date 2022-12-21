import React from "react";
import AccordionItem, { AccordionI } from "./AccordionItem";
import styled from "@emotion/styled"
import colors from "../../styles/emotion/color";
import media from "../../styles/emotion/media"

export interface AccordionProps {
  items: AccordionI[];
}


const List = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 32px 16px;
  box-sizing: border-box;
  background: ${colors.white};
  border-radius: 20px;
  ${media.ml} {
    padding: 25px 34px 45px;
  }
  ${media.tp} {
    border-radius: 26px;
    padding: 48px;
  }
  ${media.tl} {
    padding: 48px 164px;
  }
  ${media.d} {
    padding: 60px 120px;
  } 
  ${media.dhd} {
    padding: 80px 160px;
    border-radius: 32px;
  } 
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: ${colors.grayscale100};
  margin: 24px 0;
`

const Accordion: React.FC<AccordionProps> = ({
  items
}) => (
  <List>
    {items.map((el, index) => <>
      <AccordionItem
        title={el.title}
        content={el.content}
        key={`${el.content} ${el.title}`}
      />
      {index !== items.length - 1 && (
        <Line />
      )}
    </>)}
  </List>
);

export default Accordion;
