/** @jsxImportSource @emotion/react */
"use client";

import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import TodoItem from "./TodoItem";
import EmptyState from "./EmptyState";
import { useTodoStore } from "../../hooks/useTodoStore";
import { TODO_TYPE_DONE, TODO_TYPE_TODO } from "../../common/constants";

const TodoList = () => {
  const { todos, isLoading, activeTab } = useTodoStore();

  const filteredTodos =
    todos.length > 0
      ? todos.filter((todo) => {
          if (activeTab === TODO_TYPE_TODO) return !todo.completed;
          if (activeTab === TODO_TYPE_DONE) return todo.completed;
          return true;
        })
      : [];
  if (isLoading) {
    return <div css={SpinnerStyle}>로딩 중...</div>;
  }
  return (
    <div css={TodoListStyle}>
      <p>총 {filteredTodos.length}개</p>
      <ul>
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo, index) => (
            <TodoItem key={index.toString()} todo={todo} />
          ))
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
const SpinnerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 18px;
  color: #555;
`;
