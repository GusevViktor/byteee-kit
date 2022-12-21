import React, { ReactElement } from "react";
import styled from "@emotion/styled"

interface TemplateAllProps {
  children?: ReactElement;
}

const Element = styled.div`
  display: grid; 
  grid-template-columns: repeat(4, min-content); 
  grid-template-rows: repeat(4, auto); 
  gap: 30px 16px;
`;

const TemplateAll = ({ children }: TemplateAllProps) => (
  <Element>
    {children}
  </Element>
)

export default TemplateAll;
