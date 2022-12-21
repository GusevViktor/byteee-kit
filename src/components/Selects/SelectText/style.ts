import styled from "@emotion/styled"
import colors from "../../../styles/emotion/color"

interface SelectProps {
  disabled: boolean,
  isOpen: boolean,
  sizeElement: "s" | "m" | "l",
  color: "violet" | "black";
}

export const sizes = {
  l: {
    minWidth: 270,
    height: 40,
  },
  m: {
    minWidth: 270,
    height: 36,
  },
  s: {
    minWidth: 270,
    height: 32,
  },
}

export const Wrap = styled.div<SelectProps>`
  position: relative;
`


const IsOpenStyle = `
  p {
    color: ${colors.grayscale400};
  };
  svg path {
    stroke: ${colors.grayscale400};
  }
`

const DisabledStyle = `
  cursor: default;
  p {
    color: ${colors.grayscale400}!important;
  };
  svg path {
    stroke: ${colors.grayscale400}!important;
  }
  :hover {
    cursor: default;
    p {
      color: ${colors.grayscale400}
    };
    svg path {
      stroke: ${colors.grayscale400}
    }
  }
`

const TextStyle = `
  padding: 0;
  border: none;
  font: inherit;
  svg path {
    stroke: ${colors.grayscale1000};
  }
  background-color: transparent;
  width: unset;
  min-width: unset;
}
  :hover {
    p {
      color: ${colors.grayscale800};
    }
    svg path {
      stroke: ${colors.grayscale800};
    }
    ${({ disabled }) => disabled && DisabledStyle};
    :active {
      p {
        color: ${colors.grayscale400};
      }
      svg path {
        stroke: ${colors.grayscale400};
      }
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
  height: ${({ sizeElement = "l" }) => `
  ${ sizes[sizeElement].height}px `};
  box-sizing: border-box;
  font-weight: 400;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  cursor: pointer;
  ${({ color }) => color==="black"
    ? `
    p {
      color: ${colors.grayscale900};
    }
    svg path {
      stroke: ${colors.grayscale400};
    }
    :hover {

    }
`
    : `
    p {
      color: ${colors.violet600}!important;
    }
    svg path {
      stroke: ${colors.violet600}!important;
    }
    :hover {

    }
`
}
    ${({ disabled }) => disabled && DisabledStyle};
    ${TextStyle};
    ${({ isOpen }) => isOpen && IsOpenStyle};
    ${({ disabled }) => disabled && DisabledStyle};
  }
`;
