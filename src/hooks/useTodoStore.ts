import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TodoState {
  todos: TodoProps[];
  addTodo: (title: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

let todoId = 1;

export const useTodoStore = create<TodoState>()(
  persist(
    (set, get) => ({
      todos: [],
      addTodo: (title: string) => {
        if (title.length > 20) {
          alert("할 일은 20자 이내로 작성해주세요.");
          return;
        }
        if (
          (get() as TodoState).todos.filter((todo) => !todo.completed).length >=
          10
        ) {
          alert("할 일이 너무 많습니다! 완료된 작업을 정리하세요.");
          return;
        }
        set((state) => ({
          todos: [...state.todos, { id: todoId++, title, completed: false }],
        }));
      },
      toggleTodo: (id: number) => {
        set((state) => ({
          todos: state.todos.map((todo: TodoProps) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        }));
      },
      removeTodo: (id: number) => {
        set((state) => ({
          todos: state.todos.filter((todo: TodoProps) => todo.id !== id),
        }));
      },
    }),
    { name: "todo-storage" }
  )
);
