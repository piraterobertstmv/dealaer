
import { Code, Globe, Zap } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Built with Modern Tech",
    description: "Leveraging React, Vite, and Next.js for optimal performance.",
  },
  {
    icon: Globe,
    title: "Browser-Based Development",
    description: "No local installations needed - develop directly in your browser.",
  },
  {
    icon: Zap,
    title: "AI-Powered Development",
    description: "Automated code generation with intelligent suggestions.",
  },
];

const LovableSection = () => {
  return (
    <section id="lovable" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built with Lovable.dev
          </h2>
          <p className="text-gray-600 text-lg">
            Experience the future of web development with AI-powered tools that streamline the creation process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 bg-white border border-gray-100 rounded-2xl text-center group hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-dealer-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-dealer-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-dealer-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LovableSection;
