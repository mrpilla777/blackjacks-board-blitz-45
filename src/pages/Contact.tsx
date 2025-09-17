import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import sectionBg from "@/assets/section-bg.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting Blackjacks Chess Club. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-cover bg-center bg-no-repeat relative" 
               style={{ backgroundImage: `url(${sectionBg})` }}>
        <div className="absolute inset-0 bg-chess-black/70"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-chess-white">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Ready to join the champions? Have questions? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="championship-card">
              <h2 className="font-playfair text-2xl font-semibold mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your chess experience, questions, or how you'd like to get involved..."
                  />
                </div>
                
                <Button type="submit" className="btn-hero-gold w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Contact Details */}
              <div className="championship-card">
                <h2 className="font-playfair text-2xl font-semibold mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@blackjackschess.club</p>
                      <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+27 21 123 4567</p>
                      <p className="text-sm text-muted-foreground">Tuesday & Thursday evenings</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Club Location</h3>
                      <p className="text-muted-foreground">
                        Blackjacks Clubhouse<br />
                        123 Strategy Street<br />
                        Cape Town, 8001<br />
                        South Africa
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Meeting Times */}
              <div className="championship-card bg-accent/5 border-accent">
                <h3 className="font-playfair text-xl font-semibold mb-4 text-accent">
                  Meeting Times
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Friday Training</span>
                    <span className="text-muted-foreground">14:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday League Games</span>
                    <span className="text-muted-foreground">09:00 - 18:00</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  * All skill levels welcome. Boards and pieces provided.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 championship-card">
            <h2 className="font-playfair text-2xl font-semibold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "Do I need to bring my own chess set?",
                  answer: "No! We provide all equipment including boards, pieces, and chess clocks for practice and tournaments."
                },
                {
                  question: "What skill level do I need to join?",
                  answer: "All skill levels are welcome! We have programs for complete beginners through to international-level players."
                },
                {
                  question: "How do I register for tournaments?",
                  answer: "Tournament registration opens 2 weeks before each event. Contact us or check our events page for details."
                },
                {
                  question: "Do you offer chess lessons?",
                  answer: "Yes! Our certified coaches offer both group classes and private lessons for all ages and skill levels."
                }
              ].map((faq, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-semibold gold-accent">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;