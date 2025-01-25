/** @jsxImportSource @emotion/react */
"use client";

import { css } from "@emotion/react";

interface Tab {
  id: number;
  name: string;
}

interface TabsProps {
  activeTab: Tab;
  tabData: Tab[];
  onClickTab: (tab: Tab) => void;
}

const Tabs = ({ activeTab, tabData, onClickTab }: TabsProps) => {
  return (
    <div css={tabsStyle}>
      {tabData.map((tab) => (
        <button
          key={tab.id}
          className={activeTab.id === tab.id ? "active" : ""}
          onClick={() => onClickTab(tab)}
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
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #f0f0f0;
    }

    &.active {
      color: #2182f3;
      background: #ebf4ff;
    }
  }
`;
