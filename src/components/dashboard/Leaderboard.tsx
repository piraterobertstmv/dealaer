
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Medal, Trophy, Award } from "lucide-react";

type LeaderboardUser = {
  email: string;
  points: number;
};

export const Leaderboard = () => {
  const { data: leaderboardData = [], isLoading } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("email, points")
        .order("points", { ascending: false })
        .limit(10);

      if (error) throw error;
      return data as LeaderboardUser[];
    },
  });

  const getMedalIcon = (position: number) => {
    switch (position) {
      case 0:
        return <Trophy className="w-5 h-5 text-yellow-500" />;
      case 1:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 2:
        return <Award className="w-5 h-5 text-amber-700" />;
      default:
        return null;
    }
  };

  if (isLoading) {
    return <div className="animate-pulse bg-gray-100 h-48 rounded-lg"></div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Leaderboard</h2>
      <div className="space-y-4">
        {leaderboardData.map((user, index) => (
          <div 
            key={user.email} 
            className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
          >
            <div className="flex items-center gap-3">
              {getMedalIcon(index)}
              <span className="text-sm font-medium text-gray-900">
                {user.email}
              </span>
            </div>
            <span className="text-sm font-semibold text-dealer-primary">
              {user.points} points
            </span>
          </div>
        ))}
        {leaderboardData.length === 0 && (
          <p className="text-sm text-gray-500 text-center py-4">
            No users have earned points yet. Complete tasks to climb the leaderboard!
          </p>
        )}
      </div>
    </div>
  );
};
