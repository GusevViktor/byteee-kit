declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
  SVGSVGElement
  > & { title?: string }>;

  const src: string;
  export default src;
}

declare module "*.css" {
  const content: {[key:string]: string};
  export default content;
}

declare module"*.scss" {
  const content: {[key: string]: any}
  export = content
}

declare module "*.png"