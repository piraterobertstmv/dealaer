
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Add Your Tasks",
    description: "Input your daily must-dos and want-to-dos into DealEr's intuitive interface.",
  },
  {
    number: "02",
    title: "Let Dealer Negotiate",
    description: "Dealer helps you prioritize tasks and suggests the perfect balance of work and fun.",
  },
  {
    number: "03",
    title: "Stay Productive & Happy",
    description: "Complete tasks, earn rewards, and enjoy your day with perfect work-life harmony.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-dealer-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How DealEr Works
          </h2>
          <p className="text-gray-600 text-lg">
            Experience a smarter way to manage your day with our intuitive three-step process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300">
                <div className="text-4xl font-bold text-dealer-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-dealer-primary/30 w-8 h-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
