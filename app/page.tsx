"use client";

import { Box } from "@mui/material";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <AnimatedBackground />
      <Navbar />
      <Box component="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        {/* <Testimonials /> */}
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}
