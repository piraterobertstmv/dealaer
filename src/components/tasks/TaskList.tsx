
import { Task } from "@/hooks/useTasks";
import { TaskItem } from "./TaskItem";
import { UseMutationResult } from "@tanstack/react-query";

interface TaskListProps {
  tasks: Task[];
  isLoading: boolean;
  toggleTask: UseMutationResult<any, Error, string>;
  updateTask: UseMutationResult<
    any,
    Error,
    Partial<Task> & { id: string }
  >;
}

export const TaskList = ({ tasks, isLoading, toggleTask, updateTask }: TaskListProps) => {
  if (isLoading) {
    return <p className="text-gray-500">Loading tasks...</p>;
  }

  if (tasks.length === 0) {
    return <p className="text-gray-500">No tasks found. Create your first task!</p>;
  }

  return (
    <div className="space-y-6">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          updateTask={updateTask}
        />
      ))}
    </div>
  );
};
