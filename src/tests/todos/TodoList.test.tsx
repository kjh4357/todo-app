import { render, screen } from "@testing-library/react";
import TodoList from "../../components/todos/TodoList";

// Mock TodoItem 컴포넌트
jest.mock("../../components/todos/TodoItem", () => {
  return ({ todo }: { todo: TodoProps }) => (
    <li data-testid="todo-item">{todo.title}</li>
  );
});

describe("TodoList Component", () => {
  const mockListData = [
    { id: 1, title: "Test Todo 1", completed: false },
    { id: 2, title: "Test Todo 2", completed: true },
  ];

  it("할 일 목록이 올바르게 렌더링되어야 한다", () => {
    render(<TodoList listData={mockListData} />);

    // 총 개수 표시 확인
    const totalCount = screen.getByText(`총 ${mockListData.length}개`);
    expect(totalCount).toBeInTheDocument();

    // TodoItem 렌더링 확인
    const todoItems = screen.getAllByTestId("todo-item");
    expect(todoItems).toHaveLength(mockListData.length);
    expect(todoItems[0]).toHaveTextContent("Test Todo 1");
    expect(todoItems[1]).toHaveTextContent("Test Todo 2");
  });

  it("할 일이 없을 때 '0개'로 표시되어야 한다", () => {
    render(<TodoList listData={[]} />);

    // 총 개수 0개 확인
    const totalCount = screen.getByText("총 0개");
    expect(totalCount).toBeInTheDocument();

    // TodoItem이 없는지 확인
    const todoItems = screen.queryByTestId("todo-item");
    expect(todoItems).not.toBeInTheDocument();
  });
});
