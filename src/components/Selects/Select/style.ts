import styled from "@emotion/styled"
import colors from "../../../styles/emotion/color"

interface SelectProps {
  disabled: boolean,
  isOpen: boolean,
  sizeElement: "s" | "m" | "l",
}

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

export const Wrap = styled.div<SelectProps>`
  position: relative;
`

export const SelectWrap = styled.div<{mt: boolean}>`
  position: relative;
  ${({ mt, }) => mt ? "margin-top: 8px" : ""};
`

const IsOpenStyle = `
  border: 1px solid ${colors.grayscale700};
  p {
    color: ${colors.grayscale400};
  };
  svg path {
    stroke: ${colors.grayscale400};
  }
`

const DisabledStyle = `
  background: ${colors.grayscale100};
  border: 1px solid ${colors.grayscale200};
  cursor: default;
  p {
    color: ${colors.grayscale400}
  };
  svg path {
    stroke: ${colors.grayscale400}
  }
  :hover {
    background: ${colors.grayscale100};
    border: 1px solid ${colors.grayscale400};
    cursor: default;
    p {
      color: ${colors.grayscale400}
    };
    svg path {
      stroke: ${colors.grayscale400}
    }
  }
`
const InputStyle = `
  border-radius: 8px;
  padding:  0 40px 0 16px;
  border: 1px solid ${colors.grayscale400};
  background: ${colors.grayscale100};
  p {
    color: ${colors.grayscale1000};
  }
  :hover {
    border: 1px solid ${colors.violet400};
    p {
      color: ${colors.grayscale800};
    }
    svg path {
      stroke: ${colors.grayscale800};
    }
    ${({ isOpen }) => isOpen && IsOpenStyle};
  }
  :active {
    border: 1px solid ${colors.violet300};
    p {
      color: ${colors.grayscale400};
    }
    ${({ disabled }) => disabled && DisabledStyle};
  }
`

export const Arrow = styled.div<{
  isRotate: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  z-index: 1;
  transition: transform .3s linear;
  position: absolute; right: 16px; top: calc(50% - 12px);
  ${({ isRotate }) => isRotate && "transform:rotate(180deg);"};

`
export const Select = styled.button<SelectProps>`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: ${({ sizeElement = "l" }) => `${sizes[sizeElement].minWidth}px`};
  height: ${({ sizeElement = "l" }) => `${sizes[sizeElement].height}px`};
  box-sizing: border-box;
  font-weight: 400;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  cursor: pointer;
  ${({ disabled }) => disabled && DisabledStyle};
  ${InputStyle};
  ${({ isOpen }) => isOpen && IsOpenStyle};
  ${({ disabled }) => disabled && DisabledStyle};
  ${({ isOpen }) => isOpen && IsOpenStyle};
  }
`;
