
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactRequest = await req.json();

    // Send confirmation email to sender
    const confirmationEmailResponse = await resend.emails.send({
      from: "Khameel <noreply@yourdomain.com>",
      to: [email],
      subject: "Message Received - We'll Be In Touch",
      html: `
        <div style="background: #1a1a1a; color: #fff; padding: 40px; font-family: Arial, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto;">
            <h1 style="background: linear-gradient(to right, #8b5cf6, #a855f7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 2.5rem; text-align: center; margin-bottom: 30px;">
              KHAMEEL
            </h1>
            
            <h2 style="color: #8b5cf6; margin-bottom: 20px;">Thanks for reaching out, ${name}!</h2>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Your message has been received and we'll get back to you as soon as possible.
            </p>
            
            <div style="background: #2a2a2a; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #8b5cf6; margin-bottom: 10px;">Your Message:</h3>
              <p style="font-style: italic;">"${message}"</p>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              For urgent matters, feel free to reach out directly at bookkhameel@gmail.com
            </p>
            
            <p style="font-size: 14px; color: #666; text-align: center; margin-top: 40px;">
              Built in the dark. Back for blood.
            </p>
          </div>
        </div>
      `,
    });

    // Send message to Khameel
    const businessEmailResponse = await resend.emails.send({
      from: "Website Contact <noreply@yourdomain.com>",
      to: ["bookkhameel@gmail.com"],
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="background: #f4f4f4; padding: 20px; font-family: Arial, sans-serif;">
          <div style="background: white; padding: 30px; border-radius: 8px; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #8b5cf6; margin-bottom: 20px;">New Contact Message</h2>
            
            <div style="margin-bottom: 20px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <div style="background: #f8f8f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-bottom: 10px;">Message:</h3>
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
            
            <p style="margin-top: 20px; color: #666;">
              Reply directly to this email to respond to ${name}.
            </p>
          </div>
        </div>
      `,
      replyTo: email,
    });

    console.log("Contact emails sent successfully:", { confirmationEmailResponse, businessEmailResponse });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
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
