/** @jsxImportSource @emotion/react */
"use client";

import { useState } from "react";
import { css } from "@emotion/react";

const tabsStyle = css`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 20px 0;
`;

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
        <button key={index.toString()} onClick={() => setCurrentTabId(tab.id)}>
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
