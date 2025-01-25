import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TODO_TYPE_ALL } from "../common/constants";

interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoState {
  activeTab: TodoType;
  todos: TodoProps[];
  isLoading: boolean;
  setTab: (newTab: TodoType) => void;
  setLoading: (loading: boolean) => void;
  addTodo: (title: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

let todoId = 1;

export const useTodoStore = create<TodoState>()(
  persist(
    (set, get) => ({
      setTab: (newTab) => set({ activeTab: newTab }),
      todos: [],
      isLoading: true,
      setLoading: (loading: boolean) => set({ isLoading: loading }),
      activeTab: "ALL",
      addTodo: (title: string) => {
        if (title.length > 20) {
          alert("할 일은 20자 이내로 작성해주세요.");
          return;
        }

        const todos = Array.isArray(get().todos) ? get().todos : [];
        if (todos.filter((todo) => !todo.completed).length >= 10) {
          alert("할 일이 너무 많습니다! 완료된 작업을 정리하세요.");
          return;
        }

        set((state) => ({
          todos: [
            ...(Array.isArray(state.todos) ? state.todos : []),
            { id: todoId++, title, completed: false },
          ],
        }));
      },

      toggleTodo: (id: number) => {
        set((state) => ({
          todos: Array.isArray(state.todos)
            ? state.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
              )
            : [],
        }));
      },

      removeTodo: (id: number) => {
        set((state) => ({
          todos: Array.isArray(state.todos)
            ? state.todos.filter((todo) => todo.id !== id)
            : [],
        }));
      },
    }),
    { name: "todo-storage" }
  )
);
