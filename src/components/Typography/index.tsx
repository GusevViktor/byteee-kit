import React from "react";
import media from "../../styles/emotion/media";
import Colors from "../../styles/emotion/color";
import Typography from "../../styles/emotion/typography";

import styled from "@emotion/styled"

type typeSizeProduct = keyof typeof Typography.product
export type typeSizesProduct = typeSizeProduct | typeSizeProduct[]

type typeSizeOpenPart = keyof typeof Typography.openPart
export type typeSizesOpenPart = typeSizeOpenPart | typeSizeOpenPart[]

type typeType = "product" | "openPart";

interface TextProductI {
  as?: React.ElementType;
  className?: string;
  bold?: boolean;
  children: React.ReactNode;
  font?: "sangbleu" | "inter";
  color?: keyof typeof Colors | "inherit";
}

export interface TextProductProps extends TextProductI {
  size: typeSizesProduct;
}

export interface TextOpenPartProps extends TextProductI {
  size: typeSizesOpenPart;
}

type DefaultSizeType = {
  mp: number,
  ml: number,
  tp: number,
  tl: number,
  d: number,
  ds: number,
  dhd: number,
}
interface ElementProps {
  fontFamily: string,
  bold: boolean,
  color: keyof typeof Colors | "inherit";
  fontSize: DefaultSizeType,
  lineHeight: DefaultSizeType,
}

export const getSizeOP = (size: typeSizeOpenPart, style: "fs" | "lh") => {
  let result;
  style === "fs" && (result = `${Typography.openPart[size].fontSize}px`)
  style === "lh" && (result = `${Typography.openPart[size].lineHeight}px`)
  return result
}

export const getSize = (size: typeSizeProduct, style: "fs" | "lh") => {
  let result;
  style === "fs" && (result = `${Typography.product[size].fontSize}px`)
  style === "lh" && (result = `${Typography.product[size].lineHeight}px`)
  return result
}

const Element = styled.div<ElementProps>`
  font-family: ${({ fontFamily }) => `${fontFamily}`}, sans-serif;
  font-style: normal;
  font-weight: ${({ bold }) => bold ? 700 : 400};
  color: ${({ color }) => color === "inherit" ? "inherit" : Colors[color]};
  margin: 0;
  padding: 0;
  font-size: ${({ fontSize }) => `${fontSize.mp}px`};
  line-height: ${({ lineHeight }) => `${lineHeight.mp}px`};
  ${media.ml} {
    font-size: ${({ fontSize }) => `${fontSize.ml}px`};
    line-height: ${({ lineHeight }) => `${lineHeight.ml}px`};
  }
  ${media.tp} {
    font-size: ${({ fontSize }) => `${fontSize.tp}px`};
    line-height: ${({ lineHeight }) => `${lineHeight.tp}px`};
  }
  ${media.tl} {
    font-size: ${({ fontSize }) => `${fontSize.tl}px`};
    line-height: ${({ lineHeight }) => `${lineHeight.tl}px`};
  }
  ${media.d} {
    font-size: ${({ fontSize }) => `${fontSize.d}px`};
    line-height: ${({ lineHeight }) => `${lineHeight.d}px`};
  } 
  ${media.ds} {
    font-size: ${({ fontSize }) => `${fontSize.ds}px`};
    line-height: ${({ lineHeight }) => `${lineHeight.ds}px`};
  } 
  ${media.dhd} {
    font-size: ${({ fontSize }) => `${fontSize.dhd}px`};
    line-height: ${({ lineHeight }) => `${lineHeight.dhd}px`};
  } 
`;

const createStyle = (
  styleType: "lineHeight" | "fontSize",
  size: typeSizeProduct | typeSizeOpenPart,
  type: typeType
) => Typography[type][size][styleType]

const createFont = (
  size: typeSizesProduct | typeSizesOpenPart,
  type: typeType
) => {
  const DefaultSizes = {
    mp: 0,
    ml: 0,
    tp: 0,
    tl: 0,
    d: 0,
    ds: 0,
    dhd: 0,
  }
  const fontSize = { ...DefaultSizes }
  const lineHeight = { ...DefaultSizes }

  const mediaKeys = Object.keys(media)
  if(typeof size !== "object" ) {
    for(const query of mediaKeys) {
      fontSize[query] = createStyle("fontSize", size, type)
      lineHeight[query] = createStyle("lineHeight", size, type)
    }
  } else {
    const length =
      size.length >= mediaKeys.length
        ? mediaKeys.length
        : size.length
    for(const index in mediaKeys) {
      const numberSize = Number(index) < length ? Number(index) : length - 1
      fontSize[mediaKeys[index]] =
        createStyle("fontSize", size[numberSize], type)
      lineHeight[mediaKeys[index]] =
        createStyle("lineHeight", size[numberSize], type)
    }
  }

  return {
    fontSize,
    lineHeight,
  }
}


export const TextOP = (props: TextOpenPartProps) => {
  const {
    as = "p",
    className,
    bold = false,
    font = "sangbleu",
    color = "grayscale900",
    size,
    children
  } = props;

  const fonts = createFont(size, "openPart")

  return (
    <Element
      fontFamily={font === "inter" ? "Inter" : "SangBleu Kingdom"}
      fontSize={fonts.fontSize}
      className={className}
      lineHeight={fonts.lineHeight}
      as={as}
      bold={bold}
      color={color}
    >
      {children}
    </Element>
  );
}

export const Text = (props: TextProductProps) => {
  const {
    as = "p",
    className,
    bold = false,
    font = "inter",
    color = "grayscale900",
    size,
    children
  } = props;

  const fonts = createFont(size, "product")

  return (
    <Element
      fontFamily={font === "inter" ? "Inter" : "SangBleu Kingdom"}
      fontSize={fonts.fontSize}
      className={className}
      lineHeight={fonts.lineHeight}
      as={as}
      bold={bold}
      color={color}
    >
      {children}
    </Element>
  );
}