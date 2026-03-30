"use client";

import React from "react";
import { Topbar } from "@/components/Topbar/Topbar";
import { InteractionHero } from "@/components/Hero/InteractionHero";
import { ArchiveSection } from "@/components/Archive/ArchiveSection";
import { GallerySection } from "@/components/Gallery/GallerySection";
import { LabSection } from "@/components/Lab/LabSection";
import { ContactSection } from "@/components/Contact/ContactSection";
import { Footer } from "@/components/Footer/Footer";

export default function Page() {
  return (
    <div>
      <Topbar />
      <main className="pt-24">
        <InteractionHero />
        <ArchiveSection />
        <GallerySection />
        <LabSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}

