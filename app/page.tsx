"use client";

import { Box } from "@mui/material";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { About } from "@/components/sections/about";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Metrics } from "@/components/sections/metrics";
import { Experience } from "@/components/sections/experience";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#07080A",
        color: "#FFFFFF",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <Box component="main">
        <Hero />
        <Projects />
        <About />
        <Process />
        <Services />
        <Metrics />
        <Experience />
        <FAQ />
        <Contact />
      </Box>
      <Footer />
    </Box>
  );
}
