
import { CheckCircle, Sparkles, Bell, Trophy } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Task Management",
    description: "Organize must-do and optional tasks effortlessly with our intuitive interface.",
  },
  {
    icon: Sparkles,
    title: "Smart Negotiation",
    description: "Let Dealer help you balance essential tasks with fun activities for optimal productivity.",
  },
  {
    icon: Trophy,
    title: "Gamification",
    description: "Earn rewards and badges as you meet your daily goals and maintain productivity streaks.",
  },
  {
    icon: Bell,
    title: "Personalized Reminders",
    description: "Stay motivated with smart notifications and real-time progress tracking.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Features that make productivity fun
          </h2>
          <p className="text-gray-600 text-lg">
            Discover how DealEr transforms your daily routine into an engaging journey of accomplishment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-dealer-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-dealer-primary/20 transition-colors">
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

export default Features;
