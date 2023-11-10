import React, { FC } from "react";
import Link from "next/link";
import { css } from "@emotion/react";

import { AppLayoutProps } from "../../types";

const cssTesting = css`
  color: red;
  font-size: 20px;
`;

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto max-w-screen-lg">
      <div className="navbar bg-base-100">
        <Link href="/">
          <a className="btn btn-ghost normal-case text-lg" css={cssTesting}>
            Next-PlayGround
          </a>
        </Link>
      </div>
b
      <div className="content-section">{children}</div>
    </div>
  );
};
export default AppLayout;
