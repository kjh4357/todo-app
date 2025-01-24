/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const headerStyle = css`
  text-align: center;
  margin-bottom: 20px;
`;

const Header = () => {
  return (
    <header css={headerStyle}>
      <h1>To Do List</h1>
    </header>
  );
};

export default Header;
