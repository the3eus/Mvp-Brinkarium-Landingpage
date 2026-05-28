import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Essence } from "./components/Essence";
import { LessScreens } from "./components/LessScreens";
import { UniverseOfPossibilities } from "./components/UniverseOfPossibilities";
import { HarvestFruits } from "./components/HarvestFruits";
import { PillarsAndAges } from "./components/PillarsAndAges";
import { AgendeVisita } from "./components/AgendeVisita";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] text-gray-800 font-sans antialiased overflow-x-hidden selection:bg-primary-green-light/20 selection:text-primary-green-dark">
      {/* Brand Navigation Header */}
      <Header />

      {/* Hero Intro Presentation */}
      <main>
        <Hero />

        {/* Our Mindset & Beliefs */}
        <Essence />

        {/* Physical Play vs Screens Statement */}
        <LessScreens />

        {/* 8 Workshop Categories Grid */}
        <UniverseOfPossibilities />

        {/* Developmental Growth Dividends Checklists */}
        <HarvestFruits />

        {/* Safety Pillars & Trust Profiles */}
        <PillarsAndAges />

        {/* Final High-Converting Visitation Card */}
        <AgendeVisita />
      </main>

      {/* Brand Detailed Footer */}
      <Footer />

      {/* Floating Interactive WhatsApp trigger */}
      <FloatingWhatsApp />
    </div>
  );
}
