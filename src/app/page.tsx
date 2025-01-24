import React from "react";
import Layout from "./layout";
import Header from "../components/common/Header";
import InputField from "../components/Input/InputField";
import Tabs from "../components/tabs/Tabs";
import TodoList from "../components/todos/TodoList";

const Page = () => {
  return (
    <Layout>
      <Header />
      <InputField />
      <Tabs />
      <TodoList />
    </Layout>
  );
};

export default Page;
