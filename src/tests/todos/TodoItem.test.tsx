import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "@/components/todos/TodoItem";
import { useTodoStore } from "@/hooks/useTodoStore";

// Mock SVG components
jest.mock("@/assets/images/icons/ico_check.svg", () => () => (
  <span data-testid="check-icon">MockCheckIcon</span>
));

// Mock useTodoStore
jest.mock("@/hooks/useTodoStore");

const mockedUseTodoStore = useTodoStore as unknown as jest.Mock;

describe("TodoItem Component", () => {
  const mockTodo = { id: 1, title: "Test Todo", completed: false };

  beforeEach(() => {
    mockedUseTodoStore.mockReturnValue({
      toggleTodo: jest.fn(),
      removeTodo: jest.fn(),
    });
  });

  it("체크박스를 클릭하면 toggleTodo 함수가 호출되어 완료 상태가 변경되어야 한다", () => {
    const mockToggleTodo = jest.fn();
    mockedUseTodoStore.mockReturnValue({
      toggleTodo: mockToggleTodo,
      removeTodo: jest.fn(),
    });

    render(<TodoItem todo={mockTodo} />);

    const checkbox = screen.getByText("Test Todo");
    fireEvent.click(checkbox);

    expect(mockToggleTodo).toHaveBeenCalledWith(mockTodo.id);
  });

  it("삭제 버튼을 클릭하면 removeTodo 함수가 호출되어야 한다", () => {
    const mockRemoveTodo = jest.fn();
    mockedUseTodoStore.mockReturnValue({
      toggleTodo: jest.fn(),
      removeTodo: mockRemoveTodo,
    });

    render(<TodoItem todo={mockTodo} />);

    const deleteButton = screen.getByRole("button", { name: "삭제" });
    fireEvent.click(deleteButton);

    expect(mockRemoveTodo).toHaveBeenCalledWith(mockTodo.id);
  });
});
