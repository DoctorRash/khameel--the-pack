
import React from 'react';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-card">
      {/* Panther logo as background element */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <img 
          src="/images/a052d708-7bbc-49c5-99b1-8effbfeb7c8d.png" 
          alt="Panther Logo" 
          className="w-[800px] h-[800px] object-contain"
        />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <h1 className="text-7xl md:text-9xl font-black mb-8 text-gradient animate-float tracking-wider">
          KHAMEEL
        </h1>
        
        <p className="text-2xl md:text-3xl mb-6 text-foreground font-medium">
          Built in the dark. Back for blood.
        </p>
        
        <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Back from the shadows, leading a pack. He started in the dark learning, losing, rebuilding. Now, he's back.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="btn-primary text-lg px-8 py-4"
            onClick={() => window.open('https://youtu.be/OgpAFW_jvKo?si=I0CwlEb-8hBI5NkQ', '_blank')}
          >
            <Play className="mr-3" size={24} />
            Play Latest Song
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="btn-outline text-lg px-8 py-4"
            onClick={() => document.getElementById('pack')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join The Pack
          </Button>
        </div>

        {/* Latest Release Badge */}
        <div className="mt-12 inline-flex items-center gap-3 px-6 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-full">
          <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
          <span className="text-sm text-muted-foreground">Latest Release</span>
          <span className="text-sm font-medium text-foreground">Available Everywhere</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
