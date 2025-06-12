
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface PackSignupRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: PackSignupRequest = await req.json();

    // Send welcome email to new pack member
    const memberEmailResponse = await resend.emails.send({
      from: "The Pack <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to The Pack! 🐺",
      html: `
        <div style="background: #1a1a1a; color: #fff; padding: 40px; font-family: Arial, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto;">
            <h1 style="background: linear-gradient(to right, #8b5cf6, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 2.5rem; text-align: center; margin-bottom: 30px;">
              KHAMEEL
            </h1>
            
            <h2 style="color: #8b5cf6; margin-bottom: 20px;">Welcome to The Pack!</h2>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              You're now part of something real. No trends, no gimmicks - just pure energy and exclusive access to everything first.
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Here's what you can expect:
            </p>
            
            <ul style="font-size: 16px; line-height: 1.8; margin-bottom: 30px;">
              <li>🎵 Early access to new releases</li>
              <li>🎨 Exclusive wallpapers and content</li>
              <li>📹 Behind-the-scenes footage</li>
              <li>🎫 First dibs on show tickets</li>
              <li>💬 Direct community access</li>
            </ul>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
              You're not alone. You're one of us.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://www.instagram.com/channel/Abb9CNLAPtdprdS9/" 
                 style="background: #8b5cf6; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold;">
                Join The Pack Channel
              </a>
            </div>
            
            <p style="font-size: 14px; color: #666; text-align: center; margin-top: 40px;">
              Built in the dark. Back for blood.
            </p>
          </div>
        </div>
      `,
    });

    // Send notification to Khameel
    const notificationEmailResponse = await resend.emails.send({
      from: "Pack Notifications <onboarding@resend.dev>",
      to: ["bookkhameel@gmail.com"],
      subject: "New Pack Member Joined! 🐺",
      html: `
        <div style="background: #f4f4f4; padding: 20px; font-family: Arial, sans-serif;">
          <div style="background: white; padding: 30px; border-radius: 8px; max-width: 500px; margin: 0 auto;">
            <h2 style="color: #8b5cf6; margin-bottom: 20px;">New Pack Member!</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Joined:</strong> ${new Date().toLocaleString()}</p>
            <p style="margin-top: 20px; color: #666;">
              Another member has joined The Pack. Keep building that community! 🔥
            </p>
          </div>
        </div>
      `,
    });

    console.log("Pack signup emails sent successfully:", { memberEmailResponse, notificationEmailResponse });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-pack-signup function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
