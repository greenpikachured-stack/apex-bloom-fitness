import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const testimonials = [
  {
    name: "Ananya S",
    content:
      "Before joining ApexFit, I used to just do random workouts. Here, the trainers properly guided me on form, sets, and diet. I’ve reduced body fat and gained strength without any injuries.",
    rating: 5,
  },
  {
    name: "Priya R",
    content:
      "The gym atmosphere at ApexFit is very motivating. Trainers keep checking your form and push you to complete your sets. It doesn’t feel like a timepass gym - people here are serious about fitness.",
    rating: 5,
  },
  {
    name: "Kavya N",
    content:
      "I joined ApexFit to get back in shape after a long break. The trainers kept it simple and helped me stay consistent. Now working out has become part of my routine.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <Reveal variant="home">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="stagger-item text-primary uppercase tracking-[0.3em] text-sm mb-4">Testimonials</p>
            <h2 className="stagger-item text-4xl md:text-5xl font-serif font-bold">
              What Our <span className="text-gradient">Members Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="stagger-item bg-card border border-border p-8 hover-lift h-full">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="text-primary fill-primary" size={18} />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
};
