import { act } from "react";
import { useTodoStore } from "../../hooks/useTodoStore";

describe("useTodoStore", () => {
  beforeAll(() => {
    window.alert = jest.fn();
  });

  beforeEach(() => {
    const store = useTodoStore.getState();
    store.todos = [];
    store.setLoading(false);
  });

  it("할 일을 추가할 수 있어야 한다", () => {
    const { addTodo } = useTodoStore.getState();

    act(() => {
      addTodo("Test To do");
    });

    const { todos } = useTodoStore.getState();

    expect(todos).toHaveLength(1);
    expect(todos[0].title).toBe("Test To do");
    expect(todos[0].completed).toBe(false);
  });

  it("할 일의 완료 상태를 토글할 수 있어야 한다", () => {
    const { addTodo, toggleTodo } = useTodoStore.getState();

    act(() => {
      addTodo("Test To do");
    });

    const { todos } = useTodoStore.getState();

    act(() => {
      toggleTodo(todos[0].id);
    });

    const { todos: updatedTodos } = useTodoStore.getState();

    expect(updatedTodos[0].completed).toBe(true);
  });

  it("할 일을 삭제할 수 있어야 한다", () => {
    const { addTodo, removeTodo } = useTodoStore.getState();

    act(() => {
      addTodo("Test To do");
    });

    const { todos } = useTodoStore.getState();

    act(() => {
      removeTodo(todos[0].id);
    });

    const { todos: updatedTodos } = useTodoStore.getState();

    expect(updatedTodos).toHaveLength(0);
  });

  it("20자 이상의 할 일을 추가할 수 없어야 한다", () => {
    const { addTodo, todos } = useTodoStore.getState();

    act(() => {
      addTodo("This is a very long todo that exceeds the limit");
    });

    expect(window.alert).toHaveBeenCalledWith(
      "할 일은 20자 이내로 작성해주세요."
    );
    expect(todos).toHaveLength(0);
  });

  it("완료되지 않은 할 일이 10개 이상이면 추가할 수 없어야 한다", () => {
    const { addTodo } = useTodoStore.getState();

    act(() => {
      for (let i = 0; i < 11; i++) {
        addTodo(`Todo ${i + 1}`);
      }
    });

    const { todos } = useTodoStore.getState();

    expect(window.alert).toHaveBeenCalledWith(
      "할 일이 너무 많습니다! 완료된 작업을 정리하세요."
    );
    expect(todos.filter((todo) => !todo.completed)).toHaveLength(10);
  });
});
