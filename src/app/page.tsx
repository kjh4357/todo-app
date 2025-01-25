/** @jsxImportSource @emotion/react */
"use client";
import Header from "../components/layout/Header";
import SearchBar from "../components/common/SearchBar";
import Tabs from "../components/common/Tabs";
import TodoList from "../components/todos/TodoList";
import { css } from "@emotion/react";
import "../styles/globals.css";
import { useTodoStore } from "../hooks/useTodoStore";
import { useState } from "react";

const Page = () => {
  const { addTodo } = useTodoStore();
  const [tab, setTab] = useState<TodoType>("ALL");
  const handleAddTodo = (title: string) => {
    addTodo(title);
  };

  return (
    <>
      <div css={layoutStyle}>
        <Header />
        <SearchBar onSubmit={handleAddTodo} />
        <div css={todoWrapperStyle}>
          <Tabs activeTab={tab} onChange={setTab} />
          <TodoList filter={tab} />
        </div>
      </div>
    </>
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
