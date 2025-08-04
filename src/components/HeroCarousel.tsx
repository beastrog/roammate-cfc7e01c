import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const heroSlides = [
  {
    id: 1,
    image: hero1,
    title: "Step into India's Living Heritage",
    subtitle: "Join authentic cultural journeys with local explorers",
    cta: "Discover Trips",
    ctaLink: "/discover"
  },
  {
    id: 2,
    image: hero2,
    title: "From Reels to Real Rituals",
    subtitle: "Experience spiritual moments beyond the screen",
    cta: "Find Your Vibe",
    ctaLink: "/discover?category=spiritual"
  },
  {
    id: 3,
    image: hero3,
    title: "Connect. Explore. Transform.",
    subtitle: "Meet fellow travelers and create unforgettable memories",
    cta: "Join Community",
    ctaLink: "/community"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const navigate = useNavigate();

  const handleBecomeGuide = () => {
    // For now, navigate to profile. In the future, this could be a dedicated guide signup page
    navigate('/profile');
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-heritage/60 via-heritage/30 to-transparent" />
          </div>
        </div>
      ))}

      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={heroSlides[currentSlide].ctaLink} className="block">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  {heroSlides[currentSlide].cta}
                </Button>
              </Link>
              <Button 
                variant="warm" 
                size="xl"
                onClick={handleBecomeGuide}
                className="w-full sm:w-auto"
              >
                Become a Guide
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? "bg-primary shadow-glow scale-125" 
                : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}