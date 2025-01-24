/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const emptyStateStyle = css`
  text-align: center;
  margin-bottom: 20px;
`;

const EmptyState = () => {
  return (
    <div css={emptyStateStyle}>
      <h2>할 일이 없어요!</h2>
    </div>
  );
};

export default EmptyState;
