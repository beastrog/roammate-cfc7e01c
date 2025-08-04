import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import SearchBar from "@/components/SearchBar";
import FeaturedTrips from "@/components/FeaturedTrips";
import StoriesSection from "@/components/StoriesSection";

const Index = () => {
  const navigate = useNavigate();

  const scrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen"
      >
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative">
        <HeroCarousel />
        <SearchBar />
      </section>

      {/* Featured Trips */}
      <FeaturedTrips />

      {/* Stories Section */}
      <StoriesSection />

      {/* Community Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the <span className="text-primary">Roammate</span> Community
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Connect with like-minded travelers, share authentic experiences, and discover hidden gems 
              through the eyes of locals and fellow explorers.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center animate-slide-up">
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect</h3>
                <p className="text-muted-foreground">Meet fellow travelers who share your passion for authentic experiences</p>
              </div>
              
              <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-2xl">🗺️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Explore</h3>
                <p className="text-muted-foreground">Discover hidden gems and cultural treasures with local insights</p>
              </div>
              
              <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 animate-float" style={{ animationDelay: '2s' }}>
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Transform</h3>
                <p className="text-muted-foreground">Create memories that last a lifetime and stories worth sharing</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/discover">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <Button 
                    className="px-8 py-6 text-lg bg-gradient-hero text-primary-foreground font-semibold hover:shadow-glow hover:shadow-primary/30 transition-all duration-300"
                  >
                    Start Your Journey
                  </Button>
                </motion.div>
              </Link>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                <Button 
                  variant="outline"
                  onClick={scrollToFeatures}
                  className="px-8 py-6 text-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-primary">Roammate</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience travel like never before with our unique features
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌍',
                title: 'Authentic Experiences',
                description: 'Discover hidden gems and local secrets that typical tourists miss.'
              },
              {
                icon: '🤝',
                title: 'Trusted Community',
                description: 'Connect with verified travelers and local guides you can trust.'
              },
              {
                icon: '✨',
                title: 'Seamless Planning',
                description: 'Plan your perfect trip with our easy-to-use tools and resources.'
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-border/50"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-heritage text-heritage-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Roam<span className="text-primary">mate</span>
                </span>
              </div>
              <p className="text-heritage-foreground/80 leading-relaxed">
                Authentic travel experiences that connect you to India's living heritage and like-minded explorers.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-heritage-foreground/80">
                <li><a href="#" className="hover:text-primary-glow transition-colors">Discover Trips</a></li>
                <li><a href="#" className="hover:text-primary-glow transition-colors">Local Guides</a></li>
                <li><a href="#" className="hover:text-primary-glow transition-colors">Cultural Experiences</a></li>
                <li><a href="#" className="hover:text-primary-glow transition-colors">Adventure Tours</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-heritage-foreground/80">
                <li><a href="#" className="hover:text-primary-glow transition-colors">Travel Stories</a></li>
                <li><a href="#" className="hover:text-primary-glow transition-colors">Join Groups</a></li>
                <li><a href="#" className="hover:text-primary-glow transition-colors">Become a Guide</a></li>
                <li><a href="#" className="hover:text-primary-glow transition-colors">Safety Guidelines</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-heritage-foreground/80">
                <li><a href="#" className="hover:text-primary-glow transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary-glow transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary-glow transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary-glow transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-heritage-foreground/20 pt-8 text-center text-heritage-foreground/70">
            <p>&copy; 2024 Roammate. Crafted with ❤️ for authentic travelers.</p>
          </div>
        </div>
      </footer>
      </motion.div>
    </div>
  );
};

export default Index;
