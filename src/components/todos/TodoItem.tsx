/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";

const TodoItem = ({
  todo,
}: {
  todo: { id: number; text: string; completed: boolean };
}) => {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  return (
    <li css={itemStyle}>
      <div>
        <input type="checkbox" checked={todo.completed} />
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
      </div>
      <button style={{ color: "red", background: "none", border: "none" }}>
        삭제
      </button>
    </li>
  );
};

export default TodoItem;

const itemStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;
