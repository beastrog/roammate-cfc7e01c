import { X, MapPin, Calendar, Star, Shield, Camera, Users, Heart, Plane, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DemoUserProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

const demoUser = {
  name: "Aarav Nijhawan",
  avatar: "/src/assets/avatar-1.jpg",
  bio: "Passionate traveler exploring India's hidden gems 🇮🇳 • Love connecting with locals and discovering authentic experiences • Photography enthusiast capturing moments that matter ✨",
  age: 24,
  location: "Mumbai, Maharashtra",
  joinedDate: "January 2023",
  tripsCompleted: 12,
  rating: 4.9,
  verified: true,
  interests: ["Photography", "Culture", "Adventure", "Street Food", "Spirituality", "Heritage"],
  languages: ["Hindi", "English", "Marathi", "Basic Gujarati"],
  badges: ["Cultural Explorer", "Photography Pro", "Local Guide", "Adventure Seeker"],
  recentTrips: [
    { name: "Ladakh Expedition", date: "Oct 2024", rating: 5.0 },
    { name: "Kerala Backwaters", date: "Sep 2024", rating: 4.8 },
    { name: "Rajasthan Heritage", date: "Aug 2024", rating: 4.9 }
  ]
};

export default function DemoUserProfile({ isOpen, onClose }: DemoUserProfileProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-heritage/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card rounded-2xl shadow-cultural border border-border/50 w-full max-w-md mx-4 animate-scale-in max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <div className="h-32 bg-gradient-to-br from-primary/20 via-secondary/20 to-heritage/20 rounded-t-2xl" />
          <div className="absolute top-4 right-4">
            <button
              onClick={onClose}
              className="p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
          <div className="absolute -bottom-12 left-6">
            <img
              src={demoUser.avatar}
              alt={demoUser.name}
              className="w-24 h-24 rounded-full border-4 border-card object-cover shadow-warm"
            />
          </div>
          <div className="absolute -bottom-2 left-20">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-card">
              <Shield className="w-3 h-3 text-primary-foreground" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-16 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-foreground">{demoUser.name}</h2>
                <div className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">Demo User</div>
              </div>
              <p className="text-muted-foreground text-sm">{demoUser.age} • {demoUser.location}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium text-sm">{demoUser.rating}</span>
              </div>
              <p className="text-xs text-muted-foreground">Verified Traveler</p>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-muted-foreground text-sm leading-relaxed">{demoUser.bio}</p>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-4 gap-3 mb-6">
            <div className="text-center p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
              <Plane className="w-5 h-5 mx-auto mb-1 text-primary" />
              <div className="text-lg font-bold">{demoUser.tripsCompleted}</div>
              <div className="text-xs text-muted-foreground">Trips</div>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-lg">
              <Heart className="w-5 h-5 mx-auto mb-1 text-secondary" />
              <div className="text-lg font-bold">147</div>
              <div className="text-xs text-muted-foreground">Likes</div>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-heritage/10 to-heritage/5 rounded-lg">
              <Camera className="w-5 h-5 mx-auto mb-1 text-heritage" />
              <div className="text-lg font-bold">89</div>
              <div className="text-xs text-muted-foreground">Photos</div>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg">
              <Users className="w-5 h-5 mx-auto mb-1 text-accent" />
              <div className="text-lg font-bold">234</div>
              <div className="text-xs text-muted-foreground">Friends</div>
            </div>
          </div>

          {/* Travel Badges */}
          <div className="mb-6">
            <h4 className="font-medium mb-3 text-sm flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              Travel Badges
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {demoUser.badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20"
                >
                  <Award className="w-3 h-3 text-primary" />
                  <span className="text-xs font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Trips */}
          <div className="mb-6">
            <h4 className="font-medium mb-3 text-sm">Recent Adventures</h4>
            <div className="space-y-2">
              {demoUser.recentTrips.map((trip, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{trip.name}</p>
                    <p className="text-xs text-muted-foreground">{trip.date}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{trip.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-sm">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">Member since {demoUser.joinedDate}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">{demoUser.location}</span>
            </div>
          </div>

          {/* Interests */}
          <div className="mb-6">
            <h4 className="font-medium mb-2 text-sm">Travel Interests</h4>
            <div className="flex flex-wrap gap-2">
              {demoUser.interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-xs rounded-full border border-primary/20"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="mb-6">
            <h4 className="font-medium mb-2 text-sm">Languages</h4>
            <div className="flex flex-wrap gap-2">
              {demoUser.languages.map((language, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button variant="hero" className="flex-1">
              Connect
            </Button>
            <Button variant="outline" className="flex-1">
              Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}