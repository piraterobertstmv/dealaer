
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import { Task } from "@/hooks/useTasks";
import { UseMutationResult } from "@tanstack/react-query";

interface TaskItemProps {
  task: Task;
  toggleTask: UseMutationResult<any, Error, string>;
  updateTask: UseMutationResult<
    any,
    Error,
    Partial<Task> & { id: string }
  >;
}

export const TaskItem = ({ task, toggleTask, updateTask }: TaskItemProps) => {
  return (
    <div className="border-b pb-4 last:border-b-0 last:pb-0 animate-fade-in">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3
              className={`text-lg font-medium ${
                task.completed ? "text-gray-500 line-through" : "text-gray-900"
              }`}
            >
              {task.title}
            </h3>
            <div className="flex gap-2">
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  task.type === "must-do"
                    ? "bg-red-100 text-red-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {task.type === "must-do" ? "Must-Do" : "Optional"}
              </span>
              {task.is_daily && (
                <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700 flex items-center gap-1">
                  <RotateCcw className="w-3 h-3" />
                  Daily
                </span>
              )}
            </div>
          </div>
          {task.description && (
            <p
              className={`mt-1 text-sm ${
                task.completed ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {task.description}
            </p>
          )}
        </div>
        <div className="flex items-center space-x-4 ml-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => toggleTask.mutate(task.id)}
            disabled={toggleTask.isPending}
          >
            {task.completed ? "Mark as Pending" : "Mark as Done"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              const newTitle = window.prompt("Enter new title:", task.title);
              if (newTitle !== null) {
                updateTask.mutate({
                  id: task.id,
                  title: newTitle.trim(),
                });
              }
            }}
            disabled={updateTask.isPending}
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};
