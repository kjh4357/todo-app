/** @jsxImportSource @emotion/react */
"use client";

import { useState } from "react";
import { css } from "@emotion/react";
import { TAB_TYPES } from "../../common/constants";
import { useTodoStore } from "../../hooks/useTodoStore";
const TabData = Array.isArray(TAB_TYPES) ? TAB_TYPES : [];

const Tabs = () => {
  const { activeTab, setTab } = useTodoStore();
  return (
    <div css={tabsStyle}>
      {TabData.map((tab, index) => (
        <button
          className={activeTab === tab ? "active" : ""}
          key={index.toString()}
          onClick={() => setTab(tab as TodoType)}
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
