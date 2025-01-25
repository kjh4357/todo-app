/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
const Spinner = () => {
  return <div css={SpinnerStyle}>로딩 중...</div>;
};
const SpinnerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  font-size: 18px;
  color: #555;
`;

export default Spinner;
