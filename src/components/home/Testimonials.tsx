import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Member since 2022",
    content: "Apex transformed my life. Not just my body, but my entire mindset. The trainers here truly care about your journey.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    role: "Member since 2021",
    content: "The supportive community at Apex is incredible. I've made lifelong friends while achieving my fitness goals.",
    rating: 5,
  },
  {
    name: "Michelle K.",
    role: "Member since 2023",
    content: "I've tried many gyms, but nothing compares to Apex. The personalized approach makes all the difference.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            What Our <span className="text-gradient">Members Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card border border-border p-8 hover-lift"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="text-primary fill-primary" size={18} />
                ))}
              </div>
              <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
