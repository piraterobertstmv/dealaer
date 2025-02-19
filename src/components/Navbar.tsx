
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/lib/auth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-dealer-primary">DealEr</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/auth" className="text-gray-600 hover:text-dealer-primary transition-colors">
              Features
            </Link>
            <Link to="/auth" className="text-gray-600 hover:text-dealer-primary transition-colors">
              How It Works
            </Link>
            {user ? (
              <Link to="/dashboard">
                <Button className="bg-dealer-primary hover:bg-dealer-primary/90 text-white">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <Link to="/auth">
                <Button className="bg-dealer-primary hover:bg-dealer-primary/90 text-white">
                  Get Started
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/auth"
                className="text-gray-600 hover:text-dealer-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="/auth"
                className="text-gray-600 hover:text-dealer-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              {user ? (
                <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-dealer-primary hover:bg-dealer-primary/90 text-white w-full">
                    Dashboard
                  </Button>
                </Link>
              ) : (
                <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-dealer-primary hover:bg-dealer-primary/90 text-white w-full">
                    Get Started
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
