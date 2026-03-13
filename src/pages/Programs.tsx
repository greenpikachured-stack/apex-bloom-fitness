import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Flame, Dumbbell, Heart, Users, Zap, Timer } from "lucide-react";

const programs = [
  {
    icon: Flame,
    title: "Fat Loss Program",
    description: "Burn fat effectively with customized workouts and nutrition guidance. Our metabolic training sessions combine strength and cardio for maximum calorie burn.",
    features: ["Personalized meal plans", "Metabolic conditioning", "Progress tracking", "Weekly check-ins"],
    duration: "Monthly packages",
  },
  {
    icon: Dumbbell,
    title: "Strength Training",
    description: "Build lean muscle and increase your overall strength. Progressive resistance training designed specifically for the female body.",
    features: ["Proper form coaching", "Progressive overload", "Muscle balance focus", "Strength assessments"],
    duration: "Monthly packages",
  },
  {
    icon: Zap,
    title: "HIIT Classes",
    description: "High-intensity interval training that maximizes results in minimal time. Perfect for busy women who want effective workouts.",
    features: ["30-45 min sessions", "Full body workouts", "Scalable intensity", "Community atmosphere"],
    duration: "Monthly packages",
  },
  {
    icon: Heart,
    title: "Yoga & Wellness",
    description: "Find balance and inner peace while improving flexibility. Our yoga sessions complement your training and aid recovery.",
    features: ["Stress reduction", "Flexibility improvement", "Mind-body connection", "Meditation guidance"],
    duration: "Monthly packages",
  },
  {
    icon: Users,
    title: "Group Training",
    description: "Train together, grow together. Small group sessions that provide community support with personalized attention.",
    features: ["Max 8 per class", "Varied workouts", "Social motivation", "Expert instruction"],
    duration: "Monthly packages",
  },
  {
    icon: Timer,
    title: "Personal Training",
    description: "One-on-one coaching tailored to your unique goals. The ultimate personalized fitness experience.",
    features: ["Custom programming", "Nutrition coaching", "Accountability", "Flexible scheduling"],
    duration: "Session packages",
  },
  {
    icon: Zap,
    title: "Zumba Classes",
    description: "Dance-focused cardio sessions that make fitness fun, energetic, and engaging while improving endurance.",
    features: ["High-energy routines", "Beginner-friendly moves", "Full-body cardio", "Fun group vibe"],
    duration: "Monthly packages",
  },
];

const ProgramsPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-card-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Our Programs</p>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Tailored Programs For <span className="text-gradient">Every Goal</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Every woman's journey is unique. That's why we offer a variety of programs designed to meet you where you are and take you where you want to be.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.title} className="bg-card border border-border p-8 hover-lift flex flex-col h-full">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6">
                  <program.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4">{program.title}</h3>
                <p className="text-muted-foreground mb-6">{program.description}</p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {program.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <span className="text-sm text-muted-foreground">Duration: {program.duration}</span>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Not Sure Which Program Is <span className="text-gradient">Right For You?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Book a free consultation with one of our expert trainers. We'll help you find the perfect program for your goals.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/free-trial">Book Free Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ProgramsPage;
