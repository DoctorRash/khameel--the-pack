
import React, { useState } from 'react';
import { Mail, Users, Gift, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const PackSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-pack-signup', {
        body: { email }
      });

      if (error) throw error;

      toast({
        title: "Welcome to The Pack!",
        description: "You've successfully joined. Check your email for exclusive content.",
      });
      
      setEmail('');
    } catch (error) {
      console.error('Error signing up for pack:', error);
      toast({
        title: "Error",
        description: "Failed to join The Pack. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="pack" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center text-gradient mb-8">
          The Pack
        </h2>
        
        <p className="text-center text-muted-foreground mb-4 text-lg">
          A community of fans who ride with him not because it's trending... but because it's real.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Join The Pack */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-primary">Join The Pack</h3>
            
            <Card className="bg-card border-border p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-muted border-border text-lg py-3"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full btn-primary text-lg py-4"
                  disabled={isLoading}
                >
                  {isLoading ? 'Joining...' : 'Join Now'}
                </Button>
              </form>
            </Card>

            <div className="text-center">
              <Button 
                variant="outline"
                className="btn-outline"
                onClick={() => window.open('https://www.instagram.com/channel/Abb9CNLAPtdprdS9/', '_blank')}
              >
                Join Instagram Channel
                <ExternalLink className="ml-2" size={16} />
              </Button>
            </div>
          </div>

          {/* Pack Exclusives */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-primary">Pack Exclusives</h3>
            
            <div className="space-y-4">
              <Card className="bg-card border-border p-6 hover:border-primary transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Gift className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Early Releases</h4>
                    <p className="text-muted-foreground">
                      Be first to hear new drops, exclusive tracks, and early access to new music.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card border-border p-6 hover:border-primary transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Exclusive Content</h4>
                    <p className="text-muted-foreground">
                      Wallpapers, rare releases, and behind-the-scenes content not available anywhere else.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card border-border p-6 hover:border-primary transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Direct Access</h4>
                    <p className="text-muted-foreground">
                      Connect with other pack members and Khameel directly through exclusive channels.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-primary/10 to-cyan-500/10 border-primary/30 p-6 text-center">
              <h4 className="text-xl font-bold mb-3">We're Building Pack</h4>
              <p className="text-muted-foreground mb-4">
                Join a community that values authenticity over trends. Real recognizes real.
              </p>
              <div className="text-primary font-semibold">
                You're not alone. You're one of us.
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackSection;
