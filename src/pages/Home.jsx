import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Preview from '../components/Preview';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <Preview />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;

