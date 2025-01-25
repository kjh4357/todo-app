/** @jsxImportSource @emotion/react */
import { useState } from "react";
import styled from "@emotion/styled";
import IconCheck from "../../assets/images/icons/ico_check.svg";
import IconDelete from "../../assets/images/icons/ico_delete.svg";
import { useTodoStore } from "../../hooks/useTodoStore";
const TodoItem = ({ todo }: { todo: TodoProps }) => {
  const { toggleTodo, removeTodo } = useTodoStore();
  return (
    <TodoListItem>
      <Button onClick={() => toggleTodo(todo.id)}>
        <Checkbox completed={todo.completed}>
          {todo.completed && (
            <IconCheck
              data-testid="check-icon"
              fill="#fff"
              width={20}
              height={20}
            />
          )}
        </Checkbox>
        <Title completed={todo.completed}>{todo.title}</Title>
      </Button>
      <DeleteButton onClick={() => removeTodo(todo.id)} aria-label="삭제">
        <IconDelete fill="#b9b9b9" width={24} height={24} />
      </DeleteButton>
    </TodoListItem>
  );
};

export default TodoItem;

const TodoListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 32px 16px;
  > div {
    display: flex;
    align-items: center;
  }
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Checkbox = styled.div<{ completed: boolean }>((props) => ({
  display: "flex",
  width: 32,
  height: 32,
  border: "1px solid #e5e5e5",
  borderRadius: 50,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: props.completed ? "#2182F3" : "#fff",
}));

const Title = styled.p<{ completed: boolean }>((props) => ({
  marginLeft: 16,
  fontSize: 20,
  lineHeight: "28px",
  color: props.completed ? "#868686" : "#000",
}));

const DeleteButton = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  border-radius: 8px;
`;
