import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-muted overflow-hidden">
              <img
                src="/about-image.jpg"
                alt="Fitness trainer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-8">
              <p className="text-4xl font-serif font-bold text-primary-foreground">10+</p>
              <p className="text-primary-foreground/80 uppercase tracking-widest text-sm">Years Experience</p>
            </div>
          </div>

          <div>
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">About Apex</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Your Journey To <span className="text-gradient">Transformation</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              At Apex Fitness, we believe that fitness is more than just physical—it's a lifestyle, a mindset, and a journey of self-empowerment.
            </p>
            <p className="text-muted-foreground mb-6">
              Founded with a mission to create a space where women feel seen, supported, and celebrated. Every woman's body and story is unique, and our programs reflect that—blending expert knowledge with compassionate coaching and community support.
            </p>
            <ul className="space-y-4 mb-8">
              {["Expert Female Trainers", "Personalized Programs", "Supportive Community", "Premium Facilities"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="hero" size="lg" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
