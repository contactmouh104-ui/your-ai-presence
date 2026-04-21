import emailjs from '@emailjs/browser';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c33yqnj', 'template_v48hhua', e.target, '8DmUl9-sUIVZAfAcD')
      .then((result) => {
          console.log('SUCCESS!', result.text);
          alert("Message Sent!");
      }, (error) => {
          console.log('FAILED...', error.text);
      });
  };
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Contact Us"
        description="Have a question or suggestion about AI tools? Get in touch with the ShoNow team. We'd love to hear from you."
        canonical="https://shonow.online/contact"
      />
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <MessageSquare className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h1 className="font-heading text-4xl font-bold">Contact Us</h1>
            <p className="mt-2 text-muted-foreground">Have a question or suggestion? We'd love to hear from you.</p>
          </div>
<form className="space-y-6 rounded-xl border border-border bg-card p-8" onSubmit={sendEmail}>

              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">Name</label>
                <Input id="contact-name" placeholder="Your name" className="bg-background" />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">Email</label>
                <Input id="contact-email" type="email" placeholder="your@email.com" className="bg-background" />
              </div>
            </div>
            <div>
              <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium">Subject</label>
              <Input id="contact-subject" placeholder="How can we help?" className="bg-background" />
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">Message</label>
              <Textarea id="contact-message" placeholder="Write your message here..." rows={6} className="bg-background" />
            </div>
            <Button variant="hero" className="w-full">
              <Mail className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
