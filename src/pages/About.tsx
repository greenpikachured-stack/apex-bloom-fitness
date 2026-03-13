import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Heart, Users, Target } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We're passionate about helping every woman achieve her fitness goals and live her healthiest life.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We foster a supportive, inclusive community where every woman feels welcomed and encouraged.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from our programs to our facilities.",
  },
  {
    icon: Award,
    title: "Results",
    description: "We're committed to delivering real, sustainable results through proven methods.",
  },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-card-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">About Us</p>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Empowering Women Through <span className="text-gradient">Fitness</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              At Apex Fitness, we believe every woman deserves to feel strong, confident, and empowered.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Our Story</p>
              <h2 className="text-4xl font-serif font-bold mb-6">
                A Space Where Women <span className="text-gradient">Thrive</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Apex Fitness was born from a simple belief: that every woman deserves access to premium fitness facilities and expert guidance in an environment designed specifically for her needs.
              </p>
              <p className="text-muted-foreground mb-6">
                Founded by fitness professionals with over a decade of experience in women's health and wellness, our studio was created to fill a gap in the fitness industry - a space where women feel seen, supported, and celebrated.
              </p>
              <p className="text-muted-foreground">
                Today, Apex Fitness stands as a beacon of empowerment, helping hundreds of women transform their bodies, minds, and lives through personalized training programs and unwavering support.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-muted overflow-hidden">
                <img
                  src="/about-image.jpg"
                  alt="Our story"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Our Values</p>
            <h2 className="text-4xl font-serif font-bold">
              What Drives <span className="text-gradient">Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Ready to Join Our <span className="text-gradient">Community?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Take the first step towards a stronger, healthier you. We can't wait to meet you.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/free-trial">Start Your Free Trial</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
