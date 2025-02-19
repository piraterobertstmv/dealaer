
import { DashboardNav } from "@/components/dashboard/DashboardNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, User, Zap } from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
          
          <div className="bg-white rounded-lg shadow-sm divide-y">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <User className="w-5 h-5 text-dealer-primary" />
                <h2 className="text-lg font-semibold text-gray-900">Profile</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Display Name
                  </label>
                  <Input type="text" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="Your email" disabled />
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Bell className="w-5 h-5 text-dealer-primary" />
                <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900">Task Reminders</p>
                    <p className="text-sm text-gray-500">Get notified about upcoming tasks</p>
                  </div>
                  <Button variant="outline">Configure</Button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900">Progress Updates</p>
                    <p className="text-sm text-gray-500">Weekly summary of your progress</p>
                  </div>
                  <Button variant="outline">Configure</Button>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Zap className="w-5 h-5 text-dealer-primary" />
                <h2 className="text-lg font-semibold text-gray-900">Preferences</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900">Theme</p>
                    <p className="text-sm text-gray-500">Customize your experience</p>
                  </div>
                  <Button variant="outline">Change</Button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900">Language</p>
                    <p className="text-sm text-gray-500">Select your preferred language</p>
                  </div>
                  <Button variant="outline">Change</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
