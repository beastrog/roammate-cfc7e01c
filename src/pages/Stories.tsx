import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, MapPin, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

// Import images
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const featuredStories = [
  {
    id: "1",
    title: "From Reels to Real Rituals: My Varanasi Immersion",
    author: "Ananya Mehta",
    avatar: avatar1,
    location: "Varanasi, UP",
    image: hero3,
    excerpt: "What started as a quest for Instagram-worthy shots became a profound spiritual journey that changed my perspective on travel...",
    readTime: "5 min read",
    date: "2 days ago",
    rating: 5,
    category: "Spiritual"
  },
  {
    id: "2",
    title: "Chasing Monsoons in Kerala's Backwaters",
    author: "Rohan Sharma",
    avatar: avatar2,
    location: "Alleppey, Kerala",
    image: hero2,
    excerpt: "They said visiting Kerala during monsoon was crazy. Turns out, it was the best decision I ever made. Here's why...",
    readTime: "7 min read",
    date: "1 week ago",
    rating: 5,
    category: "Nature"
  },
  {
    id: "3",
    title: "Desert Dreams and Midnight Conversations",
    author: "Priya Singh",
    avatar: avatar3,
    location: "Jaisalmer, Rajasthan",
    image: hero1,
    excerpt: "Under the star-studded Thar sky, strangers became friends, and stories became memories. This is what real travel feels like...",
    readTime: "6 min read",
    date: "2 weeks ago",
    rating: 5,
    category: "Adventure"
  }
];

export default function Stories() {
  const [currentStory, setCurrentStory] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance stories every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextStory();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentStory]);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % featuredStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + featuredStories.length) % featuredStories.length);
  };

  const goToStory = (index: number) => {
    if (index !== currentStory) {
      setCurrentStory(index);
    }
  };

  const story = featuredStories[currentStory];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Travel <span className="text-primary">Stories</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real experiences from real travelers. Get inspired by authentic stories from fellow explorers.
            </p>
          </div>

          {/* Featured Story Carousel */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="relative bg-card rounded-2xl shadow-cultural overflow-hidden">
              {/* Story Slides */}
              <div className="relative h-[500px] overflow-hidden">
                {featuredStories.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentStory ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="absolute inset-0">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-heritage/80 via-heritage/20 to-transparent" />
                    </div>
                    
                    {/* Story Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                          {slide.category}
                        </span>
                        <div className="flex items-center gap-1">
                          {[...Array(slide.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      
                      <h2 className="text-3xl font-bold mb-3">{slide.title}</h2>
                      <p className="text-white/90 text-lg mb-4 line-clamp-2">{slide.excerpt}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={slide.avatar}
                            alt={slide.author}
                            className="w-10 h-10 rounded-full object-cover border-2 border-white/20"
                          />
                          <div>
                            <p className="font-medium">{slide.author}</p>
                            <div className="flex items-center text-sm text-white/80">
                              <MapPin className="w-3 h-3 mr-1" />
                              {slide.location}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-white/80">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {slide.date}
                          </div>
                          <span>{slide.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevStory}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all backdrop-blur-sm"
                aria-label="Previous story"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextStory}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all backdrop-blur-sm"
                aria-label="Next story"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Story Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {featuredStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToStory(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentStory 
                        ? "bg-white shadow-glow scale-125" 
                        : "bg-white/50 hover:bg-white/70"
                    }`}
                    aria-label={`Go to story ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="text-center mt-6">
              <Button variant="hero" size="lg">
                Read Full Story
              </Button>
            </div>
          </div>

          {/* Story Grid */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-6">More Travel Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredStories.map((storyItem, index) => (
                <div 
                  key={storyItem.id}
                  className="bg-card rounded-xl shadow-warm border border-border/50 overflow-hidden hover:shadow-cultural transition-all duration-300 cursor-pointer"
                  onClick={() => setCurrentStory(index)}
                >
                  <img
                    src={storyItem.image}
                    alt={storyItem.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {storyItem.category}
                      </span>
                      <div className="flex items-center gap-1">
                        {[...Array(storyItem.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    
                    <h4 className="font-semibold mb-2 line-clamp-2">{storyItem.title}</h4>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{storyItem.excerpt}</p>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <img
                        src={storyItem.avatar}
                        alt={storyItem.author}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span>{storyItem.author}</span>
                      <span>•</span>
                      <span>{storyItem.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-cultural rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-heritage-foreground">
              Share Your Story
            </h3>
            <p className="text-heritage-foreground/80 mb-6">
              Inspire fellow travelers with your unique experiences and hidden discoveries
            </p>
            <Button variant="heritage" size="lg">
              Write Your Story
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}