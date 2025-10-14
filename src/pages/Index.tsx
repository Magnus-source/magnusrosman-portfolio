import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VideoGallery from "@/components/VideoGallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <VideoGallery />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
