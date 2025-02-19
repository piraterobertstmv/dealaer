
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-4 min-h-screen flex items-center bg-gradient-to-b from-dealer-secondary/20 to-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-up">
          <div className="inline-block px-4 py-2 bg-dealer-accent/30 rounded-full mb-4">
            <span className="text-sm font-medium text-gray-800">
              Productivity meets fun
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Welcome to DealEr – Where Balance Begins
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet Dealer, your personal negotiator who helps you stay on track while keeping life enjoyable. Balance your must-dos with want-to-dos, effortlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button className="bg-dealer-primary hover:bg-dealer-primary/90 text-white px-8 py-6 text-lg group">
              Try Dealer Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg border-2">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
