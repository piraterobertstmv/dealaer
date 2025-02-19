
import { useAuth } from "@/lib/auth";
import { Clock } from "lucide-react";

export const WelcomeSection = () => {
  const { user } = useAuth();
  const email = user?.email || "";
  const name = email.split("@")[0];
  
  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Morning";
    if (hour < 17) return "Afternoon";
    return "Evening";
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Good {getTimeOfDay()}, {name}!
        </h1>
        <p className="text-gray-600 mt-1">Let's get your day started.</p>
      </div>
      <div className="flex items-center space-x-2 text-dealer-primary">
        <Clock className="h-5 w-5" />
        <span className="text-sm font-medium">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric' 
          })}
        </span>
      </div>
    </div>
  );
};
