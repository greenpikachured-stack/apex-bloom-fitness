import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

const plans = [
  {
    name: "One Day",
    discountedPrice: "499",
    featured: false,
  },
  {
    name: "1 Month",
    discountedPrice: "5,000",
    featured: false,
  },
  {
    name: "12 Months",
    actualPrice: "30,000",
    discountedPrice: "20,000",
    featured: true,
  },
  {
    name: "6 Months",
    actualPrice: "22,000",
    discountedPrice: "16,000",
    featured: false,
  },
  {
    name: "3 Months",
    actualPrice: "15,000",
    discountedPrice: "12,000",
    featured: false,
  },
];

const membershipBenefits = [
  "Access to gym equipment",
  "Yoga & Zumba fitness classes",
  "General trainer supervision",
  "Steam and shower",
];

const PricingPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-card-gradient">
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
      <section className="relative isolate overflow-hidden py-20 md:py-28">
        <div
          className="absolute inset-0 -z-20 scale-105 bg-cover bg-center blur-[2px]"
          style={{ backgroundImage: "url('/cta-bg.jpg')" }}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(5,8,18,0.96)_0%,rgba(8,13,27,0.86)_48%,rgba(5,8,18,0.94)_100%)]" />

        <div className="container mx-auto px-4">
          <div className="mb-14 md:mb-20">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-primary">
              Choose Your Plan
            </p>
            <h2 className="font-sans text-4xl font-bold uppercase tracking-tight text-white md:text-6xl">
              Membership Options
            </h2>
          </div>

          <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-end gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-5">
            {plans.map((plan) => (
              <Link
                key={plan.name}
                to="/free-trial"
                aria-label={`Choose the ${plan.name} membership`}
                className={`group relative flex min-h-[460px] flex-col overflow-hidden rounded-sm shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(0,0,0,0.48)] ${
                  plan.featured
                    ? "bg-[#ed0a68] xl:min-h-[525px]"
                    : "bg-[#1b2e59]/95"
                }`}
              >
                <div
                  className={`relative flex min-h-24 items-center justify-center px-4 py-6 text-center ${
                    plan.featured ? "bg-white text-[#172850]" : "bg-[#ed0a68] text-white"
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute right-4 top-0 flex h-9 w-7 items-center justify-center bg-primary text-white">
                      <Star size={14} fill="currentColor" />
                      <span className="absolute -bottom-2 h-0 w-0 border-l-[14px] border-r-[14px] border-t-[8px] border-l-transparent border-r-transparent border-t-primary" />
                    </div>
                  )}
                  <h3 className="font-sans text-2xl font-bold uppercase tracking-wide sm:text-3xl xl:text-[1.7rem]">
                    {plan.name}
                  </h3>
                </div>

                <div className="flex flex-1 flex-col px-6 py-10 text-center text-white">
                  <div className="flex min-h-28 flex-col items-center justify-center">
                    {plan.actualPrice && (
                      <span className="relative mb-2 inline-block text-2xl font-medium text-white/90">
                        ₹{plan.actualPrice}
                        <span className="absolute left-[-8%] top-1/2 h-[3px] w-[116%] -rotate-12 bg-red-500" />
                      </span>
                    )}
                    <p className="font-sans text-5xl font-medium leading-none tracking-tight sm:text-6xl xl:text-[3.25rem]">
                      ₹{plan.discountedPrice}
                    </p>
                  </div>

                  <div className="my-8 h-px w-full bg-white/65" />

                  <ul className="space-y-2 text-base leading-6 text-white/95">
                    {membershipBenefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>

                  <span
                    className={`mt-auto pt-8 text-xs font-semibold uppercase tracking-[0.2em] transition-transform duration-300 group-hover:translate-x-1 ${
                      plan.featured ? "text-white" : "text-primary"
                    }`}
                  >
                    Choose plan →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-20 bg-card-gradient">
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
