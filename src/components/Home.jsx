import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./Features";
import Pricing from "./Pricing";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mx-10">
        <Hero />
        <Features />
        <Pricing />
      </div>
      <Footer />
    </>
  );
}
