
import React from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const MusicSection = () => {
  return (
    <section id="music" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gradient mb-4">
            Music
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Listen to the latest tracks and discover the sound
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Latest Release */}
          <div className="space-y-6">
            <Card className="bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="aspect-square relative group">
                <img 
                  src="/images/74886132-6b34-4c6d-8900-8c59fb492a1a.png" 
                  alt="Khameel Latest Release" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    size="lg"
                    className="bg-primary/90 hover:bg-primary text-primary-foreground rounded-full p-4 glow"
                    onClick={() => window.open('https://youtu.be/OgpAFW_jvKo?si=I0CwlEb-8hBI5NkQ', '_blank')}
                  >
                    <Play size={24} />
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Latest Single</h3>
                <p className="text-muted-foreground mb-4">Stream now on all platforms</p>
                <Button 
                  className="btn-primary w-full"
                  onClick={() => window.open('https://youtu.be/OgpAFW_jvKo?si=I0CwlEb-8hBI5NkQ', '_blank')}
                >
                  <Play className="mr-2" size={16} />
                  Listen Now
                </Button>
              </div>
            </Card>
          </div>

          {/* Streaming Platforms */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Available On</h3>
            
            <div className="space-y-4">
              <Card className="bg-green-500/10 border-green-500/30 p-4 hover:bg-green-500/20 transition-all duration-300 cursor-pointer"
                    onClick={() => window.open('https://open.spotify.com/artist/6xsQ3GWBjC5zVAyplIFTLR?si=2ZgELRd8S4GCS2V3V8GFMA', '_blank')}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-400">Spotify</h4>
                      <p className="text-sm text-muted-foreground">Stream on Spotify</p>
                    </div>
                  </div>
                  <ExternalLink className="text-green-400" size={16} />
                </div>
              </Card>

              <Card className="bg-red-500/10 border-red-500/30 p-4 hover:bg-red-500/20 transition-all duration-300 cursor-pointer"
                    onClick={() => window.open('https://youtu.be/OgpAFW_jvKo?si=I0CwlEb-8hBI5NkQ', '_blank')}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <Play className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-400">YouTube</h4>
                      <p className="text-sm text-muted-foreground">Watch music videos</p>
                    </div>
                  </div>
                  <ExternalLink className="text-red-400" size={16} />
                </div>
              </Card>

              <Card className="bg-gray-500/10 border-gray-500/30 p-4 hover:bg-gray-500/20 transition-all duration-300 cursor-pointer"
                    onClick={() => window.open('https://music.apple.com/ng/artist/khameel/1773573183', '_blank')}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-500/20 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-gray-400 rounded"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-400">Apple Music</h4>
                      <p className="text-sm text-muted-foreground">Listen on Apple Music</p>
                    </div>
                  </div>
                  <ExternalLink className="text-gray-400" size={16} />
                </div>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-primary/10 to-blue-500/10 border-primary/30 p-6 text-center mt-8">
              <h4 className="text-lg font-semibold mb-2">New Music Coming Soon</h4>
              <p className="text-muted-foreground mb-4 text-sm">
                Stay updated on the latest releases and exclusive content.
              </p>
              <Button 
                className="btn-outline"
                onClick={() => document.getElementById('pack')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join The Pack
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
