import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import SearchBar from "@/components/SearchBar";
import FeaturedTrips from "@/components/FeaturedTrips";
import StoriesSection from "@/components/StoriesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
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
              <button className="px-8 py-4 bg-gradient-hero text-primary-foreground font-semibold rounded-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105">
                Start Your Journey
              </button>
              <button className="px-8 py-4 bg-background border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-heritage text-heritage-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                Roam<span className="text-primary-glow">mate</span>
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
    </div>
  );
};

export default Index;
