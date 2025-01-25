type TodoProps = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoType = "ALL" | "To Do" | "Done";

interface Tab {
  id: number;
  name: string;
}
