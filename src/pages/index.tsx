import React from 'react';
import { AboutMe } from '@/components/AboutMe';
import { Projects } from '@/components/Projects';
import { ContactMe } from '@/components/ContactMe';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Hero from '@/components/Hero';
import SEO from '@/components/SEO';

import Technologies from '@/components/Technologies';

export default function Home() {
  return (
    <>
      <SEO />
      <header>
        <Navbar />
      </header>
      <Hero />

      <main className="mx-auto max-w-screen-lg px-6 sm:px-8 xl:px-12">
        <AboutMe />
        <Projects />
      </main>
      <Technologies />
      <main className="mx-auto max-w-screen-lg px-6 sm:px-8 xl:px-12">
        <ContactMe />
      </main>

      <Footer />
    </>
  );
}