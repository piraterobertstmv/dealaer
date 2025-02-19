
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-dealer-primary">DealEr</h3>
            <p className="text-gray-600">
              Your smart productivity companion that makes task management fun and effective.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-600 hover:text-dealer-primary transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-dealer-primary transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dealer-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dealer-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-dealer-primary transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dealer-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dealer-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dealer-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-dealer-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dealer-primary transition-colors">Terms</a></li>
              <li><a href="#" className="text-gray-600 hover:text-dealer-primary transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              © 2024 DealEr. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-dealer-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-dealer-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-dealer-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-dealer-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
