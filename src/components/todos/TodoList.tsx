/** @jsxImportSource @emotion/react */
"use client";

import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import TodoItem from "./TodoItem";
import EmptyState from "./EmptyState";

const TodoList = () => {
  const [Todos, setTodos] = useState<TodoProps[]>([]);

  useEffect(() => {
    setTodos([
      { id: 1, title: "아침 산책", completed: false },
      { id: 2, title: "점심 식사", completed: true },
      { id: 3, title: "커피 한 잔", completed: false },
    ]);
  }, []);

  return (
    <div css={TodoListStyle}>
      <p>총 4개</p>
      <ul>
        {Todos.length > 0 ? (
          Todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        ) : (
          <EmptyState />
        )}
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
