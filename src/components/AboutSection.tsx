
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-card to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-black text-gradient mb-8">
              The Story
            </h2>
            
            <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
              <p className="text-xl">
                He started in the dark learning, losing, rebuilding. Now, he's back. 
                No noise, no gimmicks, just pure self-made energy.
              </p>
              
              <p>
                Khameel is a producer-singer from Lagos, Nigeria fusing Afrobeat with 
                goth aesthetics and futuristic sound. His music is raw but refined, 
                melodic stories layered with pain, power, and swagger.
              </p>
              
              <p>
                It's not just about making hits. It's about owning your story, 
                even the parts the industry tried to bury.
              </p>
              
              <p>
                His sound carries the rhythm of Africa, but the energy of rebellion. 
                No rules, just presence. Every beat, every bar, every move is a step 
                away from the old system and into something self-built.
              </p>
              
              <p>
                With a raging pack, a community of fans who ride with him not because 
                it's trending… but because it's real.
              </p>
              
              <div className="p-6 bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 rounded-lg">
                <p className="font-semibold text-primary text-lg">
                  If you've ever felt overlooked, boxed in, or underestimated, this is for you.
                  You're not alone. You're one of us.
                </p>
              </div>
            </div>

            <Button 
              size="lg" 
              className="btn-primary text-lg px-8 py-4 mt-8"
              onClick={() => document.getElementById('pack')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join The Pack
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-2xl p-2 glow">
              <img 
                src="/images/7235c770-b0f7-4735-8b72-cc5abae09506.png" 
                alt="Khameel Artist Photo" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
