import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryFilter from "@/components/CategoryFilter";
import VideoGallery from "@/components/VideoGallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("");

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div id="work">
        <CategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        <VideoGallery activeCategory={activeCategory} />
      </div>
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
