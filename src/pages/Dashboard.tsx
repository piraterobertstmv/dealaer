
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { DashboardNav } from "@/components/dashboard/DashboardNav";
import { WelcomeSection } from "@/components/dashboard/WelcomeSection";
import { TaskOverview } from "@/components/dashboard/TaskOverview";
import { Leaderboard } from "@/components/dashboard/Leaderboard";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate("/auth");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">
          <div className="flex justify-end mb-6">
            <Button onClick={handleLogout} variant="outline">
              Log out
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <WelcomeSection />
              <TaskOverview />
            </div>
            <div className="lg:col-span-1">
              <Leaderboard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
