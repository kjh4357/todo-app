/** @jsxImportSource @emotion/react */
"use client";

import { css } from "@emotion/react";
import { TAB_TYPES } from "../../common/constants";
import { useState } from "react";

interface TabsProps {
  activeTab: Tab;
  tabData: Tab[];
  onClickTab: (tab: Tab) => void;
}

const Tabs = ({ activeTab, tabData, onClickTab }: TabsProps) => {
  return (
    <div css={tabsStyle}>
      {tabData.map((tab, index) => (
        <button
          className={activeTab.id === tab.id ? "active" : ""}
          key={tab.id.toString()}
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
    &.active {
      color: #2182f3;
      background: #ebf4ff;
    }
  }
`;
