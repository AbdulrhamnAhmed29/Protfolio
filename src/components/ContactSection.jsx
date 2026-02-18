import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Github,
  MessageCircle,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-primary mb-3 sm:mb-4">
            Available for Opportunities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Let's Talk Business
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to connect!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* WhatsApp Card */}
          <a 
            href="https://wa.me/201116045357" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-6 sm:p-8 rounded-3xl bg-[#25D366]/5 border border-[#25D366]/20 hover:border-[#25D366] transition-all duration-300 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center mb-6 shadow-lg shadow-[#25D366]/20">
                <MessageCircle size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">Chat on WhatsApp</h3>
              <p className="text-muted-foreground mb-6">Fastest way to get a response. Available 24/7 for urgent inquiries.</p>
              <div className="flex items-center gap-2 font-bold text-[#25D366]">
                Message Me <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
            {/* Background Glow */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#25D366]/10 blur-3xl rounded-full group-hover:bg-[#25D366]/20 transition-all"></div>
          </a>

          {/* Phone Call Card */}
          <a 
            href="tel:+201116045357" 
            className="group p-6 sm:p-8 rounded-3xl bg-primary/5 border border-primary/20 hover:border-primary transition-all duration-300 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                <Phone size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">Direct Call</h3>
              <p className="text-muted-foreground mb-6">Prefer a voice conversation? Feel free to call me directly anytime.</p>
              <div className="flex items-center gap-2 font-bold text-primary">
                Call Now <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
             {/* Background Glow */}
             <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full group-hover:bg-primary/20 transition-all"></div>
          </a>

        </div>

        {/* Other Socials - Small Icons Underneath */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href="mailto:abdulrhmanaagmed4@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-secondary/40 hover:bg-secondary transition-colors text-sm font-medium">
            <Mail size={18} className="text-primary" /> abdulrhmanaagmed4@gmail.com
          </a>
          <a href="https://github.com/AbdulrhamnAhmed29" target="_blank" className="p-3 rounded-2xl bg-secondary/40 hover:bg-secondary transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/abdulrhman-aahmed-828a94354/" target="_blank" className="p-3 rounded-2xl bg-secondary/40 hover:bg-secondary transition-colors">
            <Linkedin size={20} />
          </a>
          <div className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-secondary/40 text-sm font-medium">
            <MapPin size={18} className="text-primary" /> Giza, Egypt
          </div>
        </div>

      </div>
    </section>
  );
};