import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import GallerySection from "./components/GallerySection";
import ProcessSection from "./components/ProcessSection";
import ContactSection from "./components/ContactSection";
import { Box } from "@mui/material";

export default function MainHome() {
  return (
    <Box component="main" id="main">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <ProcessSection />
      <ContactSection />
    </Box>
  );
}
