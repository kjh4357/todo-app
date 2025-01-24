/** @jsxImportSource @emotion/react */
"use client";
import Header from "../components/common/Header";
import InputField from "../components/Input/InputField";
import Tabs from "../components/tabs/Tabs";
import TodoList from "../components/todos/TodoList";
import { css } from "@emotion/react";

const Page = () => {
  return (
    <>
      <div css={layoutStyle}>
        <Header />
        <InputField />
        <Tabs />
        <TodoList />
        테스트
      </div>
    </>
  );
};

export default Page;

const layoutStyle = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "128px 20px",
});
