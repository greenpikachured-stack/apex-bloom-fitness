import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { TrialPass } from "@/components/home/TrialPass";
import { Programs } from "@/components/home/Programs";
import { About } from "@/components/home/About";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TrialPass />
      <Programs />
      <About />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Index;
