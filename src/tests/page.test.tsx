import { render, screen, fireEvent } from "@testing-library/react";
import Page from "@/app/page";
import { useTodoStore } from "@/hooks/useTodoStore";

// Mock 내부 컴포넌트
jest.mock("@/components/layout/Header", () => () => <div>MockHeader</div>);
jest.mock("@/components/common/SearchBar", () => ({ onSubmit }: any) => (
  <input
    type="text"
    placeholder="할 일을 입력해 주세요"
    onKeyDown={(e: any) => {
      if (e.key === "Enter") {
        onSubmit(e.target.value);
        e.target.value = "";
      }
    }}
  />
));
jest.mock(
  "@/components/common/Tabs",
  () =>
    ({ activeTab, tabData, onClickTab }: any) => (
      <div>
        {tabData.map((tab: any) => (
          <button
            key={tab.id}
            onClick={() => onClickTab(tab)}
            data-active={tab.name === activeTab.name}
          >
            {tab.name}
          </button>
        ))}
      </div>
    )
);
jest.mock("@/components/todos/TodoList", () => ({ listData }: any) => (
  <ul>
    {listData.map((todo: any) => (
      <li key={todo.id}>{todo.title}</li>
    ))}
  </ul>
));
jest.mock("@/components/todos/EmptyState", () => ({ activeTab }: any) => (
  <div>
    {activeTab.name === "Done"
      ? "아직 완료된 목록이 없어요!"
      : "아직 할 일이 없어요!"}
  </div>
));
jest.mock("@/components/common/Spinner", () => () => <div>Loading...</div>);

// Mock useTodoStore
jest.mock("@/hooks/useTodoStore");

const mockedUseTodoStore = useTodoStore as unknown as jest.Mock;

describe("Page Component", () => {
  const mockTodos = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
  ];

  beforeEach(() => {
    mockedUseTodoStore.mockReturnValue({
      todos: mockTodos,
      addTodo: jest.fn(),
      isLoading: false,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("로딩 상태일 때 Spinner가 렌더링되어야 한다", () => {
    mockedUseTodoStore.mockReturnValue({
      todos: [],
      addTodo: jest.fn(),
      isLoading: true,
    });

    render(<Page />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("빈 목록 상태일 때 EmptyState가 렌더링되어야 한다", () => {
    mockedUseTodoStore.mockReturnValue({
      todos: [],
      addTodo: jest.fn(),
      isLoading: false,
    });

    render(<Page />);

    expect(
      screen.getByText((content) => content.includes("아직 할 일이 없어요"))
    ).toBeInTheDocument();
  });

  it("탭 전환 시 필터링된 할 일이 올바르게 렌더링되어야 한다", () => {
    render(<Page />);

    // 기본 탭: "All"
    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();

    // "To Do" 탭 클릭
    fireEvent.click(screen.getByText("To Do"));
    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.queryByText("Task 2")).not.toBeInTheDocument();

    // "Done" 탭 클릭
    fireEvent.click(screen.getByText("Done"));
    expect(screen.getByText("Task 2")).toBeInTheDocument();
    expect(screen.queryByText("Task 1")).not.toBeInTheDocument();
  });

  it("SearchBar를 통해 새 할 일이 추가되어야 한다", () => {
    const mockAddTodo = jest.fn();
    mockedUseTodoStore.mockReturnValue({
      todos: mockTodos,
      addTodo: mockAddTodo,
      isLoading: false,
    });

    render(<Page />);

    const input = screen.getByPlaceholderText("할 일을 입력해 주세요");
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(mockAddTodo).toHaveBeenCalledWith("New Task");
  });
});
