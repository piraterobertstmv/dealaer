
import { CheckCircle2, Circle, Lock, Unlock } from "lucide-react";
import { Button } from "../ui/button";

type Task = {
  id: string;
  title: string;
  completed: boolean;
  type: "must-do" | "optional";
};

// Temporary mock data
const mockTasks: Task[] = [
  { id: "1", title: "Complete project proposal", completed: false, type: "must-do" },
  { id: "2", title: "Team meeting at 2 PM", completed: true, type: "must-do" },
  { id: "3", title: "Review code changes", completed: false, type: "must-do" },
  { id: "4", title: "Coffee break", completed: false, type: "optional" },
  { id: "5", title: "Read article on productivity", completed: false, type: "optional" },
];

export const TaskOverview = () => {
  const mustDoTasks = mockTasks.filter(task => task.type === "must-do");
  const optionalTasks = mockTasks.filter(task => task.type === "optional");
  const completedMustDo = mustDoTasks.filter(task => task.completed).length;
  const progress = (completedMustDo / mustDoTasks.length) * 100;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Must-Do Tasks</h2>
        <div className="space-y-4">
          {mustDoTasks.map(task => (
            <div key={task.id} className="flex items-center space-x-3">
              {task.completed ? (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              ) : (
                <Circle className="h-5 w-5 text-gray-300" />
              )}
              <span className={`${task.completed ? "line-through text-gray-500" : "text-gray-900"}`}>
                {task.title}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block text-dealer-primary">
                  Progress
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-dealer-primary">
                  {progress.toFixed(0)}%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
              <div
                style={{ width: `${progress}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-dealer-primary transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Optional Tasks</h2>
        <div className="space-y-4">
          {optionalTasks.map(task => (
            <div key={task.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Circle className="h-5 w-5 text-gray-300" />
                <span className="text-gray-900">{task.title}</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                className={progress >= 60 ? "text-green-600" : "text-gray-500"}
                disabled={progress < 60}
              >
                {progress >= 60 ? (
                  <Unlock className="h-4 w-4 mr-1" />
                ) : (
                  <Lock className="h-4 w-4 mr-1" />
                )}
                {progress >= 60 ? "Available" : "Locked"}
              </Button>
            </div>
          ))}
        </div>
        
        {progress < 60 && (
          <div className="mt-6 p-4 bg-dealer-secondary rounded-lg">
            <p className="text-sm text-gray-600 italic">
              "Complete 60% of your must-do tasks to unlock optional activities!"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
