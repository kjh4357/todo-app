/** @jsxImportSource @emotion/react */
"use client";

import { useState } from "react";
import { css } from "@emotion/react";

const TabData = [
  { id: 1, name: "ALL" },
  { id: 2, name: "To Do" },
  { id: 3, name: "Done" },
];

const Tabs = () => {
  const [currentTabId, setCurrentTabId] = useState<number>(1);

  return (
    <div css={tabsStyle}>
      {TabData.map((tab, index) => (
        <button
          className={currentTabId === tab.id ? "active" : ""}
          key={index.toString()}
          onClick={() => setCurrentTabId(tab.id)}
        >
          {tab.name}
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
