
import { DashboardNav } from "@/components/dashboard/DashboardNav";
import { Button } from "@/components/ui/button";
import { Plus, Filter } from "lucide-react";
import { useTasks } from "@/hooks/useTasks";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Tasks = () => {
  const { tasks, createTask, updateTask, toggleTask, isLoading } = useTasks();
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [isCreating, setIsCreating] = useState(false);

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
      });
      setNewTaskTitle("");
      setNewTaskDescription("");
      setIsCreating(false);
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Tasks</h1>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button 
                size="sm" 
                onClick={() => setIsCreating(!isCreating)}
              >
                <Plus className="w-4 h-4 mr-2" />
                New Task
              </Button>
            </div>
          </div>
          
          {isCreating && (
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
                <div className="flex justify-end space-x-4">
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => {
                      setIsCreating(false);
                      setNewTaskTitle("");
                      setNewTaskDescription("");
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
          )}
          
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6">
              <div className="space-y-6">
                {isLoading ? (
                  <p className="text-gray-500">Loading tasks...</p>
                ) : tasks.length === 0 ? (
                  <p className="text-gray-500">No tasks found. Create your first task!</p>
                ) : (
                  tasks.map((task) => (
                    <div 
                      key={task.id} 
                      className="border-b pb-4 last:border-b-0 last:pb-0 animate-fade-in"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className={`text-lg font-medium ${
                            task.completed ? "text-gray-500 line-through" : "text-gray-900"
                          }`}>
                            {task.title}
                          </h3>
                          {task.description && (
                            <p className={`mt-1 text-sm ${
                              task.completed ? "text-gray-400" : "text-gray-500"
                            }`}>
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
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tasks;
