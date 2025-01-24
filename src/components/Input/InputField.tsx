/** @jsxImportSource @emotion/react */
"use client";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

const InputField = () => {
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

export default InputField;

const inputFieldStyle = css`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;
