
import { useState } from "react";
import { Send, Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      // Here you would typically handle success/error states
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary rounded-full text-highlight mb-3 opacity-0 animate-fade-in" style={{animationDelay: "0.1s", animationFillMode: "forwards"}}>
            CONTACT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 opacity-0 animate-fade-in" style={{animationDelay: "0.2s", animationFillMode: "forwards"}}>
            Get In Touch
          </h2>
          <p className="text-muted-foreground opacity-0 animate-fade-in" style={{animationDelay: "0.3s", animationFillMode: "forwards"}}>
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8 opacity-0 animate-fade-in" style={{animationDelay: "0.3s", animationFillMode: "forwards"}}>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-highlight mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Tamil Nadu, Madurai, 625535</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-highlight mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:Prasanth4584@gmail.com" className="text-muted-foreground hover:text-highlight transition-colors">
                    Prasanth4584@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-highlight mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+918754869375" className="text-muted-foreground hover:text-highlight transition-colors">
                    +91 8754869375
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="font-medium mb-3">Connect With Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/sharpe_stride_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-secondary rounded-full hover:bg-highlight hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/prasanth-o-a71a1b322/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-secondary rounded-full hover:bg-highlight hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2 opacity-0 animate-fade-in" style={{animationDelay: "0.4s", animationFillMode: "forwards"}}>
            <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 shadow-lg border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-highlight"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-highlight"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-highlight"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-highlight resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-hover-effect inline-flex items-center justify-center rounded-md bg-highlight text-primary-foreground px-6 py-3 text-sm font-medium shadow transition-colors hover:bg-highlight/90 focus-visible:outline-none focus-visible:ring-1 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
