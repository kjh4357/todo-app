"use client";
/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import TodoItem from "./TodoItem";
import EmptyState from "./EmptyState";

const TodoList = () => {
  const [Todos, setTodos] = useState<TodoProps[]>([]);

  return <div>{Todos.length === 0 ? <EmptyState /> : <ul></ul>}</div>;
};

export default TodoList;

const listStyle = css`
  list-style: none;
  padding: 0;
`;
