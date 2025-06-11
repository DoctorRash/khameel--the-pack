
import React from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const VideosSection = () => {
  return (
    <section id="videos" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gradient mb-4">
            Videos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Visual stories and behind-the-scenes content
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Featured Video */}
          <div className="space-y-6">
            <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 bg-background">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-blue-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button 
                    size="lg"
                    className="bg-primary/90 hover:bg-primary text-primary-foreground rounded-full p-6 opacity-80 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 glow"
                    onClick={() => window.open('https://youtu.be/OgpAFW_jvKo?si=I0CwlEb-8hBI5NkQ', '_blank')}
                  >
                    <Play size={28} />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Latest Music Video</h3>
                <p className="text-muted-foreground mb-4">Experience the visual story</p>
                <Button 
                  className="btn-outline w-full"
                  onClick={() => window.open('https://youtu.be/OgpAFW_jvKo?si=I0CwlEb-8hBI5NkQ', '_blank')}
                >
                  Watch on YouTube
                  <ExternalLink className="ml-2" size={16} />
                </Button>
              </div>
            </Card>
          </div>

          {/* Content Categories */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Content</h3>
            
            <div className="space-y-4">
              <Card className="bg-background border-border p-6 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Play className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Music Videos</h4>
                    <p className="text-sm text-muted-foreground">Official releases</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Visual narratives that bring the music to life.
                </p>
              </Card>

              <Card className="bg-background border-border p-6 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Play className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Behind The Scenes</h4>
                    <p className="text-sm text-muted-foreground">Creative process</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Studio sessions and the making of the music.
                </p>
              </Card>

              <Card className="bg-background border-border p-6 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Play className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Live Performances</h4>
                    <p className="text-sm text-muted-foreground">Raw energy</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Live performances and the energy of the pack.
                </p>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/30 p-6 text-center mt-8">
              <h4 className="text-lg font-semibold mb-2">More Content Coming</h4>
              <p className="text-muted-foreground mb-4 text-sm">
                New videos and exclusive content dropping regularly.
              </p>
              <Button 
                className="btn-primary"
                onClick={() => document.getElementById('pack')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Stay Updated
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
