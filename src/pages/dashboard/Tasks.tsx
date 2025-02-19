
import { DashboardNav } from "@/components/dashboard/DashboardNav";
import { Button } from "@/components/ui/button";
import { Plus, Filter } from "lucide-react";
import { useTasks } from "@/hooks/useTasks";
import { useState } from "react";
import { TaskForm } from "@/components/tasks/TaskForm";
import { TaskList } from "@/components/tasks/TaskList";

const Tasks = () => {
  const { tasks, createTask, updateTask, toggleTask, isLoading } = useTasks();
  const [isCreating, setIsCreating] = useState(false);

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
            <TaskForm
              onClose={() => setIsCreating(false)}
              createTask={createTask}
            />
          )}
          
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6">
              <TaskList
                tasks={tasks}
                isLoading={isLoading}
                toggleTask={toggleTask}
                updateTask={updateTask}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tasks;
