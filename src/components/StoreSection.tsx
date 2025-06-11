
import React from 'react';
import { ShoppingBag, Download, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const StoreSection = () => {
  return (
    <section id="store" className="py-24 px-4 bg-gradient-to-b from-card to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center text-gradient mb-16">
          Store
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-card border-border p-8 hover:border-primary transition-all duration-300 hover:glow group text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Download className="w-8 h-8 text-primary" />
            </div>
            <div className="mb-2">
              <span className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">
                Digital
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Digital Bundles</h3>
            <p className="text-muted-foreground mb-6">High-quality audio files and exclusive content</p>
            <p className="font-bold text-primary text-xl mb-6">$15</p>
            <Button className="w-full btn-primary">
              Coming Soon
            </Button>
          </Card>

          <Card className="bg-card border-border p-8 hover:border-primary transition-all duration-300 hover:glow group text-center">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Package className="w-8 h-8 text-cyan-400" />
            </div>
            <div className="mb-2">
              <span className="text-xs px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full font-medium">
                Physical
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Pack Merchandise</h3>
            <p className="text-muted-foreground mb-6">Limited edition clothing and accessories for the pack</p>
            <p className="font-bold text-primary text-xl mb-6">$35</p>
            <Button className="w-full btn-primary">
              Pre-Order
            </Button>
          </Card>

          <Card className="bg-card border-border p-8 hover:border-primary transition-all duration-300 hover:glow group text-center">
            <div className="w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <ShoppingBag className="w-8 h-8 text-purple-400" />
            </div>
            <div className="mb-2">
              <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full font-medium">
                Limited
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Collectible Album</h3>
            <p className="text-muted-foreground mb-6">Signed artwork and special edition physical items</p>
            <p className="font-bold text-primary text-xl mb-6">$55</p>
            <Button className="w-full btn-primary">
              Notify Me
            </Button>
          </Card>
        </div>

        <div className="text-center">
          <Card className="p-12 bg-gradient-to-r from-primary/10 to-cyan-500/10 border-primary/30 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">New Drops Coming Soon</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Exclusive merch and limited drops for The Pack. Join to be notified first when new items are available.
            </p>
            <Button 
              size="lg"
              className="btn-primary text-lg px-8 py-4"
              onClick={() => document.getElementById('pack')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join For Early Access
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
