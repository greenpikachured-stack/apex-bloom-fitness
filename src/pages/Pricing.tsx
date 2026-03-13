import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const plans = [
  {
    name: "12 Months",
    actualPrice: "24,999",
    discountedPrice: "15,000",
    period: "12 months",
    description: "Best value plan for long-term consistency",
    features: [
      "Unlimited gym access",
      "Personalized workout plan",
      "Nutrition guidance",
      "Progress tracking",
      "Locker room access",
    ],
    featured: false,
  },
  {
    name: "6 Months",
    actualPrice: "17,999",
    discountedPrice: "11,999",
    period: "6 months",
    description: "Most popular plan with strong savings",
    features: [
      "Unlimited gym access",
      "Personalized workout plan",
      "Nutrition guidance",
      "Progress tracking",
      "Locker room access",
    ],
    featured: true,
  },
  {
    name: "3 Months",
    actualPrice: "14,999",
    discountedPrice: "8,999",
    period: "3 months",
    description: "Short-term plan to kickstart your transformation",
    features: [
      "Unlimited gym access",
      "Personalized workout plan",
      "Nutrition guidance",
      "Progress tracking",
      "Locker room access",
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
                className={`relative p-8 hover-lift flex flex-col h-full ${
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
                  <div className={plan.featured ? "text-primary-foreground/80 line-through mb-1" : "text-muted-foreground line-through mb-1"}>
                    Rs {plan.actualPrice}
                  </div>
                  <span className="text-5xl font-bold">Rs {plan.discountedPrice}</span>
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
