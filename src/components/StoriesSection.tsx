import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

const stories = [
  {
    id: 1,
    quote: "From watching Varanasi morning aarti on Instagram to actually sitting by the Ganges at sunrise... nothing prepares you for the real thing.",
    author: "Arjun, 24",
    location: "Varanasi Experience",
    vibe: "Spiritual 🙏"
  },
  {
    id: 2,
    quote: "My travel feed was all aesthetic shots until I joined this Kerala houseboat trip. Now it's real stories, real people, real connections.",
    author: "Maya, 22",
    location: "Kerala Backwaters",
    vibe: "Adventure 🌊"
  },
  {
    id: 3,
    quote: "Thought I knew chai until a local guide in Darjeeling taught me the actual art. Some experiences you just can't Google.",
    author: "Priya, 26",
    location: "Darjeeling Tea Gardens",
    vibe: "Culture 🍃"
  },
  {
    id: 4,
    quote: "Started as strangers on a Rajasthan trip, ended up as chosen family. That's the real magic of traveling with your tribe.",
    author: "Rohit, 25",
    location: "Rajasthan Desert",
    vibe: "Culture 🏛️"
  }
];

export default function StoriesSection() {
  const [currentStory, setCurrentStory] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % stories.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-cultural relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-float" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Chai Chat <span className="text-primary-glow">Stories</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Real experiences from fellow travelers who chose authentic over aesthetic
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-48 flex items-center">
            {stories.map((story, index) => (
              <div
                key={story.id}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentStory 
                    ? "opacity-100 transform translate-y-0" 
                    : "opacity-0 transform translate-y-4"
                }`}
              >
                <div className="text-center">
                  <Quote className="w-12 h-12 text-primary-glow mx-auto mb-6" />
                  <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-6 font-medium italic">
                    "{story.quote}"
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <cite className="text-white/90 font-medium">— {story.author}</cite>
                    <span className="w-1 h-1 bg-white/50 rounded-full" />
                    <span className="text-white/70">{story.location}</span>
                    <span className="w-1 h-1 bg-white/50 rounded-full" />
                    <span className="text-primary-glow">{story.vibe}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Story indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStory(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentStory 
                    ? "bg-primary-glow scale-125" 
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-white/80 mb-6">Ready to create your own story?</p>
          <button className="px-8 py-3 bg-white text-heritage font-medium rounded-lg hover:bg-white/90 transition-all duration-300 shadow-warm hover:shadow-glow transform hover:scale-105">
            Share Your Experience
          </button>
        </div>
      </div>
    </section>
  );
}