
import { AuthForm } from "@/components/AuthForm";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/lib/auth";

const Auth = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-dealer-primary" />
      </div>
    );
  }

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-3xl font-bold text-dealer-primary mb-8">DealEr</h1>
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;
