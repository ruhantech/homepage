import React from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { Approach } from "../components/sections/Approach";
import { Practices } from "../components/sections/Practices";
import { Showcase } from "../components/sections/Showcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <Approach />
        <Practices />
        <Showcase />
      </main>
      <Footer />
    </div>
  );
}
