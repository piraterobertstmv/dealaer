
import { DashboardNav } from "@/components/dashboard/DashboardNav";
import { Button } from "@/components/ui/button";
import { Plus, Filter } from "lucide-react";

const Tasks = () => {
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
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                New Task
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6">
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Must-Do Tasks</h2>
                  <p className="text-gray-500">Your priority tasks will appear here.</p>
                </div>
                
                <div className="border-b pb-4">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Optional Tasks</h2>
                  <p className="text-gray-500">Complete must-do tasks to unlock these activities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tasks;
