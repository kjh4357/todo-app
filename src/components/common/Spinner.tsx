/** @jsxImportSource @emotion/react */
"use client";
import { css } from "@emotion/react";
import IcoSpinner from "@/assets/images/icons/ico_spinner.svg";
const Spinner = () => {
  return (
    <div css={SpinnerStyle}>
      <IcoSpinner />
    </div>
  );
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
