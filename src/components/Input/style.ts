import styled from "@emotion/styled"
import colors from "../../styles/emotion/color"

interface InputProps {
  pl: boolean,
  pr: boolean,
  error: boolean,
  disabled: boolean,
  isFilled: boolean,
  sizeElement: "s" | "m" | "l",
}

export const sizes = {
  l: {
    minWidth: 220,
    height: 56,
  },
  m: {
    minWidth: 220,
    height: 48,
  },
  s: {
    minWidth: 220,
    height: 40,
  },
}

export const Wrap = styled.div`
  position: relative;
`
export const Label = styled.label`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
`

export const InputWrap = styled.div<{mt: boolean, mb: boolean}>`
  position: relative;
  ${({ mt }) => mt ? "margin-top: 8px" : ""};
  ${({ mb }) => mb ? "margin-bottom: 8px" : ""};
`

export const IconLeft = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 18px;
  top: calc(50% - 12px);
  width: 24px;
  height: 24px;
  z-index: 1;
`
export const IconRight = styled(IconLeft)`
  left: auto;
  right: 18px;
`

export const Input = styled.input<InputProps>`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-width: ${({ sizeElement = "l" }) => `${sizes[sizeElement].minWidth}px`};
  height: ${({ sizeElement = "l" }) => `${sizes[sizeElement].height}px`};
  border-radius: 12px;
  padding: 16px;
  border: ${({ isFilled }) => (
    isFilled ?
      `1px solid ${colors.grayscale600}`
      : `1px solid ${colors.grayscale300}`
  )};
  font-weight: 400;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  cursor: text;
  ${({ error }) => error ? `border: 1px solid ${colors.red600}` : ""};

  ${({ disabled }) => disabled && `background: ${colors.grayscale100}`};
  ${({ disabled }) => disabled && `border: 1px solid ${colors.grayscale200}`};
  ${({ disabled }) => disabled && "cursor: default"};

  ${({ pl }) => pl ? "padding-left: 48px" : ""};
  ${({ pr }) => pr ? "padding-right: 48px" : ""};

  :hover {
    border: 1px solid ${colors.violet400};
    ${({ error }) => error ? `border: 1px solid ${colors.red600}` : ""};
    ${({ disabled }) => disabled && `border: 1px solid ${colors.grayscale200}`};
  }

  :active {
    border: 1px solid ${colors.violet300};
    ${({ error }) => error ? `border: 1px solid ${colors.red600}` : ""};
    ${({ disabled }) => disabled && `border: 1px solid ${colors.grayscale200}`};
  }
  
  :focus {
    outline: none;
    border: none;
    box-shadow: none;
    border: 1px solid ${colors.violet300};
    ${({ error }) => error ? `border: 1px solid ${colors.red600}` : ""};
    ::placeholder {
      color: ${colors.grayscale400};
    }
  }

  ::placeholder {
    color: ${colors.grayscale500};
    ${({ disabled }) => disabled && `color: ${colors.grayscale400}`};
  }
`;
