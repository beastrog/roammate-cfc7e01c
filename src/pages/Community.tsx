import { Heart, MessageCircle, Share, Camera, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const mockPosts = [
  {
    id: "1",
    user: {
      name: "Sneha Patel",
      avatar: "/src/assets/avatar-1.jpg",
      location: "Goa"
    },
    content: "Just had the most incredible sunrise yoga session on Arambol Beach! The energy here is magical ✨",
    image: "/src/assets/hero-1.jpg",
    likes: 42,
    comments: 8,
    time: "2h ago"
  },
  {
    id: "2",
    user: {
      name: "Rohit Kumar",
      avatar: "/src/assets/avatar-2.jpg",
      location: "Rishikesh"
    },
    content: "Found this hidden chai stall in the mountains. Sometimes the best experiences aren't in guidebooks 🍵",
    image: "/src/assets/hero-2.jpg",
    likes: 67,
    comments: 15,
    time: "4h ago"
  },
  {
    id: "3",
    user: {
      name: "Maya Singh",
      avatar: "/src/assets/avatar-3.jpg",
      location: "Varanasi"
    },
    content: "Evening aarti at Dashashwamedh Ghat. No words can describe this spiritual experience 🙏",
    image: "/src/assets/hero-3.jpg",
    likes: 89,
    comments: 23,
    time: "6h ago"
  }
];

export default function Community() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6 max-w-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Travel <span className="text-primary">Community</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Share your journey, connect with fellow travelers, and discover hidden gems
            </p>
          </div>

          {/* Post Creator */}
          <div className="bg-card rounded-xl shadow-warm border border-border/50 p-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                <Camera className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Share your travel story..."
                  className="w-full bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
                  readOnly
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                📍 Add location • 📷 Add photos
              </span>
              <Button variant="hero" size="sm" disabled>
                Post Story
              </Button>
            </div>
          </div>

          {/* Feed */}
          <div className="space-y-6">
            {mockPosts.map((post) => (
              <div 
                key={post.id}
                className="bg-card rounded-xl shadow-warm border border-border/50 overflow-hidden"
              >
                {/* Post Header */}
                <div className="p-4 flex items-center gap-3">
                  <img
                    src={post.user.avatar}
                    alt={post.user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium">{post.user.name}</h4>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1" />
                      {post.user.location} • {post.time}
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <div className="px-4 pb-3">
                  <p className="text-foreground">{post.content}</p>
                </div>

                {/* Post Image */}
                <img
                  src={post.image}
                  alt="Post"
                  className="w-full h-64 object-cover"
                />

                {/* Post Actions */}
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-2 text-muted-foreground hover:text-red-500 transition-colors">
                        <Heart className="w-5 h-5" />
                        <span className="text-sm">{post.likes}</span>
                      </button>
                      <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-sm">{post.comments}</span>
                      </button>
                    </div>
                    <button className="text-muted-foreground hover:text-primary transition-colors">
                      <Share className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Load More Stories
            </Button>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-warm rounded-2xl p-8 text-center mt-12">
            <h3 className="text-2xl font-bold mb-4 text-heritage-foreground">
              Join Our Growing Community
            </h3>
            <p className="text-heritage-foreground/80 mb-6">
              Share your travel experiences and connect with like-minded explorers
            </p>
            <Button variant="heritage" size="lg">
              Create Your Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}