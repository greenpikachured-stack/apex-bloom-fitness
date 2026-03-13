import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Flame, Dumbbell, Heart, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const programs = [
  {
    icon: Flame,
    title: "Fat Loss Program",
    description: "Burn fat effectively with customized workouts and guidance in intimate group settings that keep you motivated.",
  },
  {
    icon: Dumbbell,
    title: "Strength Training",
    description: "Build lean muscle and increase your overall strength with progressive resistance training programs.",
  },
  {
    icon: Heart,
    title: "Yoga & Wellness",
    description: "Find balance and inner peace while improving flexibility and mental clarity through guided sessions.",
  },
  {
    icon: Users,
    title: "Personal Training",
    description: "Get one-on-one attention with customized programs designed specifically for your unique goals.",
  },
];

export const Programs = () => {
  return (
    <Reveal variant="home">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="stagger-item text-primary uppercase tracking-[0.3em] text-sm mb-4">Program Modules</p>
            <h2 className="stagger-item text-4xl md:text-5xl font-serif font-bold">
              Tailored Programs For <span className="text-gradient">Every Woman</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program) => (
              <div key={program.title} className="stagger-item bg-card border border-border p-8 hover-lift h-full">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6">
                  <program.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4">{program.title}</h3>
                <p className="text-muted-foreground">{program.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </Reveal>
  );
};
