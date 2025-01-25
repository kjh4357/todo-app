/** @jsxImportSource @emotion/react */
"use client";

import Header from "@/components/layout/Header";
import SearchBar from "@/components/common/SearchBar";
import Tabs from "@/components/common/Tabs";
import TodoList from "@/components/todos/TodoList";
import EmptyState from "@/components/todos/EmptyState";
import Spinner from "@/components/common/Spinner";
import { css } from "@emotion/react";
import { useTodoStore } from "@/hooks/useTodoStore";
import { useState } from "react";
import { TAB_TYPES, TODO_TYPE_DONE, TODO_TYPE_TODO } from "@/common/constants";
import "@/styles/globals.css";

interface Tab {
  id: number;
  name: string;
}

const TodoTabData: Tab[] = Array.isArray(TAB_TYPES)
  ? TAB_TYPES.map((data, index) => ({ id: index, name: data }))
  : [];

const Page = () => {
  const { todos, addTodo, isLoading } = useTodoStore();
  const [activeTab, setActiveTab] = useState<Tab>(
    TodoTabData[0] || { id: 0, name: "All" }
  );

  const handleAddTodo = (title: string) => {
    addTodo(title);
  };

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
    <div css={layoutStyle}>
      <Header />
      <SearchBar onSubmit={handleAddTodo} />
      <div css={todoWrapperStyle}>
        <Tabs
          activeTab={activeTab}
          tabData={TodoTabData}
          onClickTab={setActiveTab}
        />
        {filteredTodos.length > 0 ? (
          <TodoList listData={filteredTodos} />
        ) : (
          <EmptyState activeTab={activeTab} />
        )}
      </div>
    </div>
  );
};

export default Page;

const layoutStyle = css`
  display: flex;
  width: 737px;
  margin: 0 auto;
  padding: 128px 20px;
  justify-content: center;
  flex-direction: column;
`;

const todoWrapperStyle = css`
  margin-top: 32px;
  padding: 32px;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.1);
`;
