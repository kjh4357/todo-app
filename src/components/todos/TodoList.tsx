/** @jsxImportSource @emotion/react */
"use client";

import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import TodoItem from "./TodoItem";
import EmptyState from "./EmptyState";
import { useTodoStore } from "../../hooks/useTodoStore";
import { TODO_TYPE_DONE, TODO_TYPE_TODO } from "../../common/constants";
import Spinner from "../common/Spinner";

const TodoList = ({ activeTab }: { activeTab: Tab }) => {
  const { todos, isLoading } = useTodoStore();

  const filteredTodos =
    todos.length > 0
      ? todos.filter((todo) => {
          if (activeTab.name === TODO_TYPE_TODO) return !todo.completed;
          if (activeTab.name === TODO_TYPE_DONE) return todo.completed;
          return true;
        })
      : [];
  if (isLoading) {
    return <Spinner />;
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
          <EmptyState activeTab={activeTab} />
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
