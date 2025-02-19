import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useAuth } from "@/lib/auth";
import { startOfWeek, addDays, format } from "date-fns";

export type Task = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  type: string;
  created_at: string;
  updated_at: string;
  user_id: string;
};

export const useTasks = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: tasks = [], isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        toast.error("Failed to fetch tasks");
        throw error;
      }

      return data as Task[];
    },
  });

  const createTask = useMutation({
    mutationFn: async (newTask: Pick<Task, "title" | "description" | "type">) => {
      const { data, error } = await supabase
        .from("tasks")
        .insert([{ 
          ...newTask, 
          user_id: user?.id,
        }])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task created successfully");
    },
    onError: () => {
      toast.error("Failed to create task");
    },
  });

  const updateTask = useMutation({
    mutationFn: async ({ id, ...updates }: Partial<Task> & { id: string }) => {
      const { data, error } = await supabase
        .from("tasks")
        .update(updates)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task updated successfully");
    },
    onError: () => {
      toast.error("Failed to update task");
    },
  });

  const toggleTask = useMutation({
    mutationFn: async (taskId: string) => {
      const task = tasks.find(t => t.id === taskId);
      if (!task) throw new Error("Task not found");

      const { data, error } = await supabase
        .from("tasks")
        .update({ completed: !task.completed })
        .eq("id", taskId)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task status updated");
    },
    onError: () => {
      toast.error("Failed to update task status");
    },
  });

  // Calculate stats
  const mustDoTasks = tasks.filter(task => task.type === "must-do");
  const completedMustDoTasks = mustDoTasks.filter(task => task.completed);
  
  // Calculate weekly stats
  const startDate = startOfWeek(new Date());
  const weeklyStats = Array.from({ length: 7 }).map((_, index) => {
    const date = addDays(startDate, index);
    const dateStr = format(date, 'yyyy-MM-dd');
    const dayTasks = tasks.filter(task => 
      task.created_at.startsWith(dateStr)
    );
    return {
      date: dateStr,
      total: dayTasks.length,
      completed: dayTasks.filter(task => task.completed).length
    };
  });

  const stats = {
    totalTasks: tasks.length,
    completedTasks: tasks.filter(task => task.completed).length,
    mustDoTasks: mustDoTasks.length,
    completedMustDoTasks: completedMustDoTasks.length,
    weeklyStats
  };

  return {
    tasks,
    isLoading,
    createTask,
    updateTask,
    toggleTask,
    stats,
  };
};
