
import React, { useState } from 'react';
import { Mail, Download, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const ContactSection = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;

    setIsLoading(true);
    
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: contactForm
      });

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "Your message has been sent successfully. We'll get back to you soon.",
      });
      
      setContactForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending contact message:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black text-center text-gradient mb-16">
          Contact
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Business Inquiries */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-primary">Business Inquiries</h3>
            
            <Card className="bg-card border-border p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Bookings & Collaborations</h4>
                  <p className="text-muted-foreground">For business opportunities</p>
                </div>
              </div>
              <Button 
                className="w-full btn-primary text-lg py-4"
                onClick={() => window.location.href = 'mailto:bookkhameel@gmail.com'}
              >
                bookkhameel@gmail.com
              </Button>
            </Card>

            <Card className="bg-card border-border p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Download className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Press Kit</h4>
                  <p className="text-muted-foreground">High-res photos, bio, and materials</p>
                </div>
              </div>
              <Button 
                variant="outline"
                className="w-full btn-outline text-lg py-4"
                onClick={() => {
                  toast({
                    title: "Press Kit",
                    description: "Please email bookkhameel@gmail.com to request the press kit.",
                  });
                }}
              >
                Request Press Kit
              </Button>
            </Card>
          </div>

          {/* Connect */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-primary">Connect</h3>
            
            <div className="space-y-4">
              <Card className="bg-card border-border p-6 hover:border-primary transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Instagram</h4>
                      <p className="text-muted-foreground">@iam_khameel</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/iam_khameel?igsh=cHp6ejJ4M2s2cWx2&utm_source=qr",
                        "_blank"
                      )
                    }
                  >
                    Follow
                  </Button>
                </div>
              </Card>
              
              <Card className="bg-card border-border p-6 hover:border-primary transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-pink-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">InstagramChannel</h4>
                      <p className="text-muted-foreground">@thepack_channel</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline"
                    className="border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white"
                    onClick={() => window.open('https://www.instagram.com/channel/Abb9CNLAPtdprdS9/', '_blank')}
                  >
                    Follow
                  </Button>
                </div>
              </Card>

              <Card className="bg-card border-border p-6 hover:border-primary transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <Youtube className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">YouTube</h4>
                      <p className="text-muted-foreground">Khameel Official</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline"
                    className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white"
                    onClick={() => window.open('https://youtu.be/OgpAFW_jvKo?si=I0CwlEb-8hBI5NkQ', '_blank')}
                  >
                    Subscribe
                  </Button>
                </div>
              </Card>
            </div>

            {/* Send a Message */}
            <Card className="bg-card border-border p-8">
              <h4 className="text-xl font-semibold mb-6">Send a Message</h4>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="bg-muted border-border"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="bg-muted border-border"
                    required
                  />
                </div>
                <Textarea
                  placeholder="Your Message"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  className="bg-muted border-border min-h-32"
                  required
                />
                <Button 
                  type="submit" 
                  className="w-full btn-primary text-lg py-4"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Ready to Work Together */}
        <div className="mt-16">
          <Card className="p-12 text-center bg-gradient-to-r from-primary/10 to-cyan-500/10 border-primary/30 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">Ready to Work?</h3>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Whether it's a collaboration, booking, or just to connect - reach out and let's create something powerful together.
            </p>
            <Button 
              size="lg"
              className="btn-primary text-lg px-8 py-4"
              onClick={() => window.location.href = 'mailto:bookkhameel@gmail.com'}
            >
              Get In Touch
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
