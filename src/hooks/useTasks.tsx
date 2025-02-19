
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useAuth } from "@/lib/auth";

export type Task = {
  id: string;
  title: string;
  description?: string;
  type: "must-do" | "optional";
  completed: boolean;
  created_at: string;
  updated_at: string;
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
    mutationFn: async (newTask: Omit<Task, "id" | "created_at" | "updated_at">) => {
      const { data, error } = await supabase
        .from("tasks")
        .insert([{ ...newTask, user_id: user?.id }])
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
    },
    onError: () => {
      toast.error("Failed to update task");
    },
  });

  const stats = {
    totalTasks: tasks.length,
    completedTasks: tasks.filter(task => task.completed).length,
    mustDoTasks: tasks.filter(task => task.type === "must-do").length,
    completedMustDoTasks: tasks.filter(task => task.type === "must-do" && task.completed).length,
    weeklyStats: Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dayTasks = tasks.filter(task => {
        const taskDate = new Date(task.created_at);
        return taskDate.toDateString() === date.toDateString();
      });
      return {
        date: date.toISOString(),
        completed: dayTasks.filter(task => task.completed).length,
        total: dayTasks.length,
      };
    }).reverse(),
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
