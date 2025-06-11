
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MusicSection from '@/components/MusicSection';
import VideosSection from '@/components/VideosSection';
import PackSection from '@/components/PackSection';
import StoreSection from '@/components/StoreSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MusicSection />
      <VideosSection />
      <PackSection />
      <StoreSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-3xl font-black text-gradient mb-6">KHAMEEL</div>
          <p className="text-muted-foreground mb-6 text-lg">
            Back from the shadows, leading a pack.
          </p>
          <p className="text-sm text-muted-foreground">
            © 2025 Khameel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
