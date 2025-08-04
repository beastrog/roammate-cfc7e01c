import { Heart, Mail, Phone, MapPin, Instagram, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary fill-primary" />
              <span className="text-2xl font-bold text-primary">
                Roam<span className="text-heritage">mate</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Connecting travelers to India's incredible heritage through authentic experiences and meaningful connections.
            </p>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-accent rounded-full transition-colors">
                <Instagram className="w-4 h-4 text-muted-foreground hover:text-primary" />
              </button>
              <button className="p-2 hover:bg-accent rounded-full transition-colors">
                <Twitter className="w-4 h-4 text-muted-foreground hover:text-primary" />
              </button>
              <button className="p-2 hover:bg-accent rounded-full transition-colors">
                <Facebook className="w-4 h-4 text-muted-foreground hover:text-primary" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/discover" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Discover Trips
              </Link>
              <Link to="/guides" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Local Guides
              </Link>
              <Link to="/community" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Community
              </Link>
              <Link to="/stories" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Travel Stories
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Support</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Safety Guidelines
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">hello@roammate.in</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Roammate. Made with <Heart className="w-3 h-3 inline fill-primary text-primary" /> for travelers exploring India's heritage.
          </p>
        </div>
      </div>
    </footer>
  );
}