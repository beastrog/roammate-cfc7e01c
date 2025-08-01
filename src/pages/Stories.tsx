import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, MapPin, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const featuredStories = [
  {
    id: "1",
    title: "From Reels to Real Rituals: My Varanasi Immersion",
    author: "Ananya Mehta",
    avatar: "/src/assets/avatar-1.jpg",
    location: "Varanasi, UP",
    image: "/src/assets/hero-3.jpg",
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
    avatar: "/src/assets/avatar-2.jpg",
    location: "Alleppey, Kerala",
    image: "/src/assets/hero-2.jpg",
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
    avatar: "/src/assets/avatar-3.jpg",
    location: "Jaisalmer, Rajasthan",
    image: "/src/assets/hero-1.jpg",
    excerpt: "Under the star-studded Thar sky, strangers became friends, and stories became memories. This is what real travel feels like...",
    readTime: "6 min read",
    date: "2 weeks ago",
    rating: 5,
    category: "Adventure"
  }
];

export default function Stories() {
  const [currentStory, setCurrentStory] = useState(0);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % featuredStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + featuredStories.length) % featuredStories.length);
  };

  const story = featuredStories[currentStory];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Travel <span className="text-primary">Stories</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real experiences from real travelers. Get inspired by authentic stories from fellow explorers.
            </p>
          </div>

          {/* Featured Story Carousel */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative bg-card rounded-2xl shadow-cultural overflow-hidden">
              {/* Story Image */}
              <div className="relative h-96">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-heritage/80 via-heritage/20 to-transparent" />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevStory}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextStory}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Story Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                      {story.category}
                    </span>
                    <div className="flex items-center gap-1">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-3">{story.title}</h2>
                  <p className="text-white/90 text-lg mb-4 line-clamp-2">{story.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={story.avatar}
                        alt={story.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium">{story.author}</p>
                        <div className="flex items-center text-sm text-white/80">
                          <MapPin className="w-3 h-3 mr-1" />
                          {story.location}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-white/80">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {story.date}
                      </div>
                      <span>{story.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {featuredStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStory(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentStory ? "bg-white" : "bg-white/50"
                    }`}
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