import { useState, useRef, useEffect } from "react";
import { Menu, X, Heart, User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import LikesPopup from "./LikesPopup";
import NotificationsPopup from "./NotificationsPopup";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLikesOpen, setIsLikesOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const likesRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (likesRef.current && !likesRef.current.contains(event.target as Node)) {
        setIsLikesOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Discover", href: "/discover" },
    { label: "Local Guides", href: "/guides" },
    { label: "Community", href: "/community" },
    { label: "Stories", href: "/stories" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
              Roam<span className="text-heritage">mate</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div ref={likesRef} className="relative">
              <button 
                onClick={() => {
                  setIsLikesOpen(!isLikesOpen);
                  setIsNotificationsOpen(false);
                }}
                className="p-2 hover:bg-accent rounded-full transition-all hover:scale-105 relative"
              >
                <Heart className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </button>
              <LikesPopup isOpen={isLikesOpen} onClose={() => setIsLikesOpen(false)} />
            </div>
            <div ref={notificationsRef} className="relative">
              <button 
                onClick={() => {
                  setIsNotificationsOpen(!isNotificationsOpen);
                  setIsLikesOpen(false);
                }}
                className="p-2 hover:bg-accent rounded-full transition-all hover:scale-105 relative"
              >
                <Bell className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
              </button>
              <NotificationsPopup isOpen={isNotificationsOpen} onClose={() => setIsNotificationsOpen(false)} />
            </div>
            <button 
              onClick={() => setIsLoginOpen(true)}
              className="p-2 hover:bg-accent rounded-full transition-all hover:scale-105"
            >
              <User className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </button>
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => navigate('/discover')}
            >
              Join Trip
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-accent rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border/50 space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsLoginOpen(true);
                  }}
                >
                  Sign In
                </Button>
                <Button 
                  variant="hero" 
                  className="w-full"
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate('/discover');
                  }}
                >
                  Join Trip
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </nav>
  );
}