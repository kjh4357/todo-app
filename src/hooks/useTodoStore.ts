import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoState {
  todos: TodoProps[];
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  addTodo: (title: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set, get) => ({
      todos: [],
      isLoading: true,

      setLoading: (loading: boolean) => set({ isLoading: loading }),

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

        const newId =
          todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;

        set((state) => ({
          todos: [
            ...(Array.isArray(state.todos) ? state.todos : []),
            { id: newId, title, completed: false },
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
