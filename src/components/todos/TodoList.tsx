/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const TodoListStyle = css`
  text-align: center;
  margin-bottom: 20px;
`;

const TodoList = () => {
  return <div css={TodoListStyle}></div>;
};

export default TodoList;
