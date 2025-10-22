import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoGallery from "@/components/VideoGallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("");

  return (
    <div className="min-h-screen">
      <Header activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <Hero />
      <div id="work" className="pt-16">
        <VideoGallery activeCategory={activeCategory} />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
