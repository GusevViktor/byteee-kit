import styled from "@emotion/styled"
import colors from "../../styles/emotion/color"


export const sizes = {
  l: {
    minWidth: 270,
    height: 56,
  },
  m: {
    minWidth: 270,
    height: 48,
  },
  s: {
    minWidth: 270,
    height: 40,
  },
}

export const List = styled.div<{
  location: "right" | "left" | "center",
  visible: boolean,
  sizeElement: "s" | "m" | "l",
}>`

  position: absolute;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  display: ${({ visible }) => visible ? "flex" : "none"};
  top: calc(100% + 8px);
  gap: 8px;
  max-width: 100%;
  min-width: max-content;
  padding: 16px;
  background: ${colors.white};
  border: 1px solid ${colors.grayscale200};
  box-shadow: 0px 4px 13px -5px rgba(189, 189, 189, 0.5);
  border-radius: 12px;
  z-index: 2;
  ${({ location }) => location === "right" && "right: 0;"};
  ${({ location }) => location === "left" && "left: 0;"};
  ${({ location }) => location === "center" && `
    left: 0;
    right: 0;
    margin: 0 auto;
  `};
  ${({ sizeElement }) => sizeElement === "s" && "max-height: 376px;"};
  ${({ sizeElement }) => sizeElement === "m" && "max-height: 412px;"};
  ${({ sizeElement }) => sizeElement === "l" && "max-height: 448px;"};
  overflow-y: auto;
  overflow-x: hidden;
  &::-moz-scrollbar-button:decrement,
::-moz-scrollbar-button:increment,
::-webkit-scrollbar-button:decrement,
::-webkit-scrollbar-button:increment {
  width: 0px;
}
}
`

export const Item = styled.div<{
  sizeElement: "s" | "m" | "l",
  selected: boolean
}>`
  width: calc(100% + 32px);
  box-sizing: border-box;
  text-align: left;
  ${({ sizeElement }) => sizeElement === "s" && "padding:4px 0;"};
  ${({ sizeElement }) => sizeElement === "m" && "padding:6px 0;"};
  ${({ sizeElement }) => sizeElement === "l" && "padding:8px 0;"};
  ${({ selected }) => selected && `
  background-color: #F4EBF4;
  margin: -4px -16px;
  padding: 4px 16px;
  `};


  :hover {
    background: ${colors.grayscale100};
    margin-left:  -16px;
    padding-left:  16px;
    margin-right:  -16px;
    padding-right:  16px;
  }
`
