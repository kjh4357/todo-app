/** @jsxImportSource @emotion/react */
"use client";

import { css } from "@emotion/react";
import TodoItem from "./TodoItem";

interface TodoListProps {
  listData: TodoProps[];
}

const TodoList = ({ listData }: TodoListProps) => {
  return (
    <div css={TodoListStyle}>
      <p>총 {listData.length}개</p>
      <ul>
        {listData.map((todo, index) => (
          <TodoItem key={index.toString()} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

const TodoListStyle = css`
  margin-top: 32px;
  > p {
    padding: 16px;
    font-size: 20px;
    line-height: 28px;
    color: #000;
  }
`;
