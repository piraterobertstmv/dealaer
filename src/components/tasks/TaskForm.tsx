
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { Task } from "@/hooks/useTasks";
import { UseMutationResult } from "@tanstack/react-query";

interface TaskFormProps {
  onClose: () => void;
  createTask: UseMutationResult<
    any,
    Error,
    Pick<Task, "title" | "description" | "type" | "is_daily">
  >;
}

export const TaskForm = ({ onClose, createTask }: TaskFormProps) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [taskType, setTaskType] = useState<string>("must-do");
  const [isDaily, setIsDaily] = useState(false);

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) {
      toast.error("Please enter a task title");
      return;
    }

    try {
      await createTask.mutateAsync({
        title: newTaskTitle.trim(),
        description: newTaskDescription.trim(),
        type: taskType,
        is_daily: isDaily,
      });
      resetForm();
      onClose();
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  const resetForm = () => {
    setNewTaskTitle("");
    setNewTaskDescription("");
    setTaskType("must-do");
    setIsDaily(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6 animate-fade-in">
      <form onSubmit={handleCreateTask} className="space-y-4">
        <div>
          <Input
            placeholder="Task title"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            className="w-full"
          />
        </div>
        <div>
          <Textarea
            placeholder="Task description (optional)"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="space-y-4">
          <Select value={taskType} onValueChange={setTaskType}>
            <SelectTrigger>
              <SelectValue placeholder="Select task type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="must-do">Must-Do Task</SelectItem>
              <SelectItem value="optional">Optional Task</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="daily"
              checked={isDaily}
              onCheckedChange={(checked) => setIsDaily(checked as boolean)}
            />
            <label
              htmlFor="daily"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Daily task (resets at midnight)
            </label>
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              resetForm();
              onClose();
            }}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={createTask.isPending}>
            {createTask.isPending ? "Creating..." : "Create Task"}
          </Button>
        </div>
      </form>
    </div>
  );
};
