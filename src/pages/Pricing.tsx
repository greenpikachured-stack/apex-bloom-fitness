import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "99",
    period: "month",
    description: "Perfect for beginners starting their fitness journey",
    features: [
      "Access to group classes",
      "2 classes per week",
      "Locker room access",
      "Fitness assessment",
      "Community support",
    ],
    featured: false,
  },
  {
    name: "Premium",
    price: "179",
    period: "month",
    description: "Our most popular plan for dedicated fitness enthusiasts",
    features: [
      "Unlimited group classes",
      "2 personal training sessions",
      "Nutrition guidance",
      "Body composition analysis",
      "Priority booking",
      "Guest passes (2/month)",
    ],
    featured: true,
  },
  {
    name: "Elite",
    price: "299",
    period: "month",
    description: "The ultimate experience for serious transformation",
    features: [
      "Everything in Premium",
      "Weekly personal training",
      "Custom meal plans",
      "24/7 trainer support",
      "Recovery services",
      "Exclusive workshops",
      "VIP events access",
    ],
    featured: false,
  },
];

const PricingPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4">Pricing</p>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Invest In Your <span className="text-gradient">Health</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the membership that fits your lifestyle and goals. All plans include access to our premium facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 hover-lift flex flex-col ${
                  plan.featured
                    ? "bg-primary text-primary-foreground border-2 border-primary"
                    : "bg-card border border-border"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-background text-foreground px-4 py-1 text-sm uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-serif font-semibold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className={plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}>
                    /{plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check size={18} className={plan.featured ? "text-primary-foreground" : "text-primary"} />
                      <span className={`text-sm ${plan.featured ? "" : "text-muted-foreground"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.featured ? "secondary" : "hero"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <Link to="/free-trial">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">
            Still Have <span className="text-gradient">Questions?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact us to learn more about our membership options or to schedule a tour of our facilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/free-trial">Try For Free</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PricingPage;
