import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Sparkles } from "lucide-react";

const benefits = [
  "Full access to all group classes",
  "Personal fitness assessment",
  "Customized workout plan",
  "Nutrition consultation",
  "Tour of our facilities",
  "No commitment required",
];

const FreeTrialPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goals: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Received!",
      description: "We'll contact you within 24 hours to schedule your trial.",
    });
    setFormData({ name: "", email: "", phone: "", goals: "" });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-card-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 mb-6">
              <Sparkles className="text-primary" size={18} />
              <span className="text-primary uppercase tracking-widest text-sm">Limited Offer</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Start Your <span className="text-gradient">Free Trial</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Experience everything Apex Fitness has to offer with absolutely no commitment. Your transformation starts here.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-serif font-bold mb-8">
                What's <span className="text-gradient">Included</span>
              </h2>
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-4">
                    <CheckCircle className="text-primary flex-shrink-0" size={24} />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-card border border-border p-6">
                <p className="text-muted-foreground italic">
                  "My free trial at Apex changed my life. I knew from day one that this was the place for me. The trainers, the community, everything was exactly what I needed."
                </p>
                <p className="mt-4 font-semibold">- Ananya T, Member</p>
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-card border border-border p-8">
              <h2 className="text-2xl font-serif font-bold mb-2">Apply Now</h2>
              <p className="text-muted-foreground mb-6">Fill out the form below and we'll be in touch within 24 hours.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tell us about your fitness goals..."
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    rows={4}
                    className="bg-background"
                  />
                </div>
                <Button variant="hero" size="xl" type="submit" className="w-full">
                  Claim Your Free Trial
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  By submitting, you agree to receive communications from Apex Fitness.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FreeTrialPage;
