
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-dealer-primary">DealEr</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-dealer-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-dealer-primary transition-colors">
              How It Works
            </a>
            <a href="#lovable" className="text-gray-600 hover:text-dealer-primary transition-colors">
              Built with Lovable
            </a>
            <Button className="bg-dealer-primary hover:bg-dealer-primary/90 text-white">
              Get Started
            </Button>
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
              <a
                href="#features"
                className="text-gray-600 hover:text-dealer-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-dealer-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#lovable"
                className="text-gray-600 hover:text-dealer-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Built with Lovable
              </a>
              <Button className="bg-dealer-primary hover:bg-dealer-primary/90 text-white w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
