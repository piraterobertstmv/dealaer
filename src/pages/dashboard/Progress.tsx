
import { DashboardNav } from "@/components/dashboard/DashboardNav";
import { CalendarDays, CheckCircle2, Star } from "lucide-react";
import { useTasks } from "@/hooks/useTasks";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format, parseISO } from "date-fns";

const Progress = () => {
  const { stats } = useTasks();

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
              <p className="text-3xl font-bold text-gray-900">{stats.completedTasks}</p>
              <p className="text-sm text-gray-500 mt-1">Out of {stats.totalTasks} total tasks</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <CalendarDays className="w-5 h-5 text-dealer-primary" />
                <h2 className="text-lg font-semibold text-gray-900">Must-Do Progress</h2>
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {((stats.completedMustDoTasks / stats.mustDoTasks) * 100).toFixed(0)}%
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {stats.completedMustDoTasks} of {stats.mustDoTasks} must-do tasks
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Star className="w-5 h-5 text-dealer-primary" />
                <h2 className="text-lg font-semibold text-gray-900">Points</h2>
              </div>
              <p className="text-3xl font-bold text-gray-900">
                {stats.completedTasks * 10}
              </p>
              <p className="text-sm text-gray-500 mt-1">Total earned</p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Weekly Overview</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stats.weeklyStats}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="date" 
                    tickFormatter={(date) => format(parseISO(date), 'EEE')}
                  />
                  <YAxis />
                  <Tooltip 
                    labelFormatter={(date) => format(parseISO(date as string), 'PPP')}
                    formatter={(value: number) => [value, 'Tasks']}
                  />
                  <Bar dataKey="completed" fill="#0EA5E9" name="Completed Tasks" />
                  <Bar dataKey="total" fill="#E5E7EB" name="Total Tasks" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Progress;
