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
      <section className="py-14 sm:py-20">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="mb-12 text-center sm:mb-16">
            <p className="stagger-item text-primary uppercase tracking-[0.3em] text-sm mb-4">Program Modules</p>
            <h2 className="stagger-item font-serif text-4xl font-bold sm:text-5xl">
              Tailored Programs For <span className="text-gradient">Every Woman</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {programs.map((program) => (
              <div key={program.title} className="stagger-item h-full border border-border bg-card p-6 hover-lift sm:p-7 lg:p-8">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mb-6">
                  <program.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4">{program.title}</h3>
                <p className="text-muted-foreground">{program.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center sm:mt-12">
            <Button
              variant="heroOutline"
              size="lg"
              className="h-12 w-full px-5 text-sm tracking-[0.14em] sm:w-auto sm:px-8 sm:text-base sm:tracking-widest"
              asChild
            >
              <Link to="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>
    </Reveal>
  );
};
