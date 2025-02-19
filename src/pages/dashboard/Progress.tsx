
import { DashboardNav } from "@/components/dashboard/DashboardNav";
import { CalendarDays, CheckCircle2, Star } from "lucide-react";

const Progress = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Progress</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle2 className="w-5 h-5 text-dealer-primary" />
                <h2 className="text-lg font-semibold text-gray-900">Tasks Completed</h2>
              </div>
              <p className="text-3xl font-bold text-gray-900">24</p>
              <p className="text-sm text-gray-500 mt-1">This week</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <CalendarDays className="w-5 h-5 text-dealer-primary" />
                <h2 className="text-lg font-semibold text-gray-900">Streak</h2>
              </div>
              <p className="text-3xl font-bold text-gray-900">7</p>
              <p className="text-sm text-gray-500 mt-1">Days</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Star className="w-5 h-5 text-dealer-primary" />
                <h2 className="text-lg font-semibold text-gray-900">Points</h2>
              </div>
              <p className="text-3xl font-bold text-gray-900">520</p>
              <p className="text-sm text-gray-500 mt-1">Total earned</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Weekly Overview</h2>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded">
              <p className="text-gray-500">Chart will be implemented here</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Progress;
