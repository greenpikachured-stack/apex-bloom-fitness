import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/Reveal";

export const About = () => {
  return (
    <Reveal variant="home">
      <section className="bg-card-gradient py-14 sm:py-20">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2">
            <div className="relative stagger-item">
              <div className="aspect-[4/5] bg-muted overflow-hidden">
                <img
                  src="/about-image.jpg"
                  alt="Fitness trainer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/*<div className="absolute -bottom-6 -right-6 bg-primary p-8">
                <p className="text-4xl font-serif font-bold text-primary-foreground">5+</p>
                <p className="text-primary-foreground/80 uppercase tracking-widest text-sm">Years Experience</p>
              </div>*/}
            </div>

            <div className="stagger-item space-y-6">
              <div>
                <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">About ApexFit</p>
                <h2 className="mb-5 font-serif text-4xl font-bold sm:mb-6 sm:text-5xl">
                  Your Journey To <span className="text-gradient">Transformation</span>
                </h2>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                At ApexFit, we believe that fitness is more than just physical - it's a lifestyle, a mindset, and a journey of self-empowerment.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Founded with a mission to create a space where women feel seen, supported, and celebrated. Every woman's body and story is unique, and our programs reflect that - blending expert knowledge with compassionate coaching and community support.
              </p>
              <ul className="space-y-4">
                {["Expert Female Trainers", "Personalized Programs", "Supportive Community", "Premium Facilities"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div>
                <Button
                  variant="hero"
                  size="lg"
                  className="h-12 w-full px-5 text-sm tracking-[0.14em] sm:w-auto sm:px-8 sm:text-base sm:tracking-widest"
                  asChild
                >
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
};
