/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface EmptyStateProps {
  activeTab: TabProps;
}

const EmptyState = ({ activeTab }: EmptyStateProps) => {
  return (
    <div css={emptyStateStyle}>
      {activeTab.name === "Done" ? (
        <h2>아직 완료된 목록이 없어요!</h2>
      ) : (
        <h2>아직 할 일이 없어요!</h2>
      )}
    </div>
  );
};

export default EmptyState;

const emptyStateStyle = css`
  padding: 84px 0;
  text-align: center;
  h2 {
    color: #333;
    font-size: 24px;
    line-height: 32px;
  }
`;
