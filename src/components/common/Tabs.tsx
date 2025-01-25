/** @jsxImportSource @emotion/react */
"use client";

import { useState } from "react";
import { css } from "@emotion/react";

const TabData = ["ALL", "To do", "Done"];

interface TabsProps {
  activeTab: TodoType;
  onChange: (tab: TodoType) => void;
}
const Tabs = ({ activeTab, onChange }: TabsProps) => {
  return (
    <div css={tabsStyle}>
      {TabData.map((tab, index) => (
        <button
          className={activeTab === tab ? "active" : ""}
          key={index.toString()}
          onClick={() => onChange(tab as TodoType)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;

const tabsStyle = css`
  display: flex;
  justify-content: center;
  button {
    width: 108px;
    height: 40px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    border-radius: 12px;
    &.active {
      color: #2182f3;
      background: #ebf4ff;
    }
  }
`;
