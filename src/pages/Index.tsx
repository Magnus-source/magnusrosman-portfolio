import { useState } from "react";
import Header from "@/components/Header";
import VideoGallery from "@/components/VideoGallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("commercial");

  return (
    <div className="min-h-screen">
      <Header activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <div className="pt-16">
        <VideoGallery activeCategory={activeCategory} />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
