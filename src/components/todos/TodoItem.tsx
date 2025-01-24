/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const TodoItemStyle = css`
  text-align: center;
  margin-bottom: 20px;
`;

const TodoItem = () => {
  return <div css={TodoItemStyle}></div>;
};

export default TodoItem;
