/** @jsxImportSource @emotion/react */
"use client";

import { css } from "@emotion/react";
import { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const handleAddTodo = () => {};

  return (
    <div css={inputFieldStyle}>
      <input
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

const inputFieldStyle = css`
  margin-top: 64px;
  input {
    width: 100%;
    padding: 32px;
    background: #e5e5e5;
    border-radius: 24px;
  }
`;
