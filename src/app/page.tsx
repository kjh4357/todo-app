/** @jsxImportSource @emotion/react */
"use client";
import Header from "../components/layout/Header";
import SearchBar from "../components/common/SearchBar";
import Tabs from "../components/common/Tabs";
import TodoList from "../components/todos/TodoList";
import { css } from "@emotion/react";
import { useTodoStore } from "../hooks/useTodoStore";
import { useState } from "react";
import { TAB_TYPES, TODO_TYPE_ALL } from "../common/constants";
import "../styles/globals.css";

const TodoTabData = Array.isArray(TAB_TYPES)
  ? TAB_TYPES.map((data, index) => ({ id: index, name: data }))
  : [];

const Page = () => {
  const { addTodo } = useTodoStore();
  const [activeTab, setActiveTab] = useState({
    id: TodoTabData[0].id,
    name: TodoTabData[0].name,
  });

  const handleAddTodo = (title: string) => {
    addTodo(title);
  };

  return (
    <>
      <div css={layoutStyle}>
        <Header />
        <SearchBar onSubmit={handleAddTodo} />
        <div css={todoWrapperStyle}>
          <Tabs
            activeTab={activeTab}
            tabData={TodoTabData}
            onClickTab={setActiveTab}
          />
          <TodoList activeTab={activeTab} />
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
