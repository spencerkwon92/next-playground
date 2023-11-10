import { css } from "@emotion/react";

type SpacerProps = {
  size?: number
}

const componentCss = (size:number) => css`
  height: ${size}px;
`

const Spacer = ({size=10}:SpacerProps) => {
  return <div css={componentCss(size)}></div>;
}

export default Spacer