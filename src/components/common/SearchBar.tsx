/** @jsxImportSource @emotion/react */
"use client";

import { css } from "@emotion/react";
import { useState } from "react";

interface SearchBarProps {
  onSubmit: (title: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [value, setValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim()) {
      onSubmit(value.trim());
      setValue("");
    }
  };

  return (
    <div css={inputFieldStyle}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="할 일을 입력하세요 (20자 이내)"
        maxLength={20}
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
