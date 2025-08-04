import { useState } from "react";
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  Star, 
  BadgeCheck,
  Camera, 
  Users, 
  Heart, 
  Plane, 
  Award, 
  Settings, 
  Edit, 
  Share2, 
  MessageCircle, 
  Phone, 
  Mail, 
  Instagram, 
  Twitter, 
  Facebook,
  MessageSquare,
  UserPlus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import images
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import trip1 from "@/assets/trip-1.jpg";
import trip2 from "@/assets/trip-2.jpg";
import trip3 from "@/assets/trip-3.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const demoUser = {
  name: "Aarav Nijhawan",
  avatar: avatar2,
  coverImage: hero1,
  bio: "Avid traveler and photography enthusiast exploring the world's hidden gems 🌍 • Documenting my journey one click at a time • Always up for an adventure and meeting fellow travelers! ✨",
  age: 25,
  location: "Mumbai, India",
  joinedDate: "Member since 2022",
  tripsCompleted: 15,
  rating: 4.9,
  verified: true,
  level: "Globetrotter",
  interests: ["Photography", "Hiking", "Scuba Diving", "Local Cuisine", "History", "Wildlife"],
  languages: ["English", "Hindi", "Spanish"],
  badges: [
    { name: "Adventure Seeker", icon: "🏔️", description: "Completed 10+ adventure trips" },
    { name: "Photography Pro", icon: "📸", description: "Shared 200+ travel photos" },
    { name: "Scuba Certified", icon: "🤿", description: "PADI Advanced Open Water Diver" },
    { name: "Mountain Lover", icon: "⛰️", description: "Summited 5+ peaks" },
    { name: "Food Explorer", icon: "🍜", description: "Tried 50+ local cuisines" },
    { name: "Early Bird", icon: "🌅", description: "100+ sunrises captured" }
  ],
  recentTrips: [
    { 
      name: "Ladakh Road Trip", 
      date: "Jun 2024", 
      rating: 5.0, 
      image: hero2,
      location: "Ladakh, India",
      participants: 4,
      highlights: ["Pangong Tso Lake", "Nubra Valley", "Khardung La Pass"]
    },
    { 
      name: "Andaman Islands", 
      date: "Mar 2024", 
      rating: 4.9, 
      image: hero3,
      location: "Andaman, India",
      participants: 2,
      highlights: ["Scuba Diving", "Radhanagar Beach", "Bioluminescent Plankton"]
    },
    { 
      name: "Bhutan Expedition", 
      date: "Nov 2023", 
      rating: 4.8, 
      image: hero1,
      location: "Bhutan",
      participants: 6,
      highlights: ["Tiger's Nest", "Punakha Dzong", "Himalayan Trekking"]
    }
  ],
  photos: [
    trip1,
    trip2,
    trip3,
    hero1,
    hero2,
    hero3
  ],
  reviews: [
    {
      reviewer: "Ananya Sharma",
      avatar: avatar2,
      rating: 5,
      comment: "Traveled with Aarav to Ladakh and it was the most memorable trip! His photography skills are incredible and he knows all the best spots.",
      trip: "Ladakh Road Trip",
      date: "3 weeks ago"
    },
    {
      reviewer: "Rohan Mehta",
      avatar: avatar3,
      rating: 5,
      comment: "Amazing travel companion! Great sense of adventure and always up for spontaneous detours that turn into the best memories.",
      trip: "Andaman Islands",
      date: "2 months ago"
    }
  ]
};

export default function Profile() {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate();

  const stats = [
    { label: "Trips", value: demoUser.tripsCompleted, icon: Plane, color: "text-primary" },
    { label: "Likes", value: 147, icon: Heart, color: "text-secondary" },
    { label: "Photos", value: 89, icon: Camera, color: "text-heritage" },
    { label: "Friends", value: 234, icon: Users, color: "text-accent" },
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "trips", label: "Trips" },
    { id: "photos", label: "Photos" },
    { id: "reviews", label: "Reviews" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-16">
        {/* Cover & Profile Section */}
        <div className="relative">
          {/* Enhanced Cover Image with Parallax Effect */}
          <div className="h-48 md:h-64 lg:h-80 relative overflow-hidden group">
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
              <img
                src={demoUser.coverImage}
                alt="Cover"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDEyMDAgNDAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDA3MGI5Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI0OCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiPkNvdmVyIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            {/* Back Button with Hover Effect */}
            <button
              onClick={() => navigate(-1)}
              className="absolute top-4 left-4 p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-all duration-300 transform hover:scale-110"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>

            {/* Demo Badge with Pulse Animation */}
            <div className="absolute top-4 right-4 animate-pulse">
              <div className="px-3 py-1 bg-gradient-to-r from-primary to-primary/80 backdrop-blur-sm text-primary-foreground text-sm rounded-full font-medium shadow-lg">
                ✨ Demo Profile
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative -mt-16 md:-mt-20">
              <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6">
                <div className="relative">
                  <img
                    src={demoUser.avatar}
                    alt={demoUser.name}
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-background object-cover shadow-lg group-hover:shadow-xl transition-all duration-300 z-10 relative"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDA3MGI5Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiPkF2YXRhcjwvdGV4dD48L3N2Zz4=';
                    }}
                  />
                  <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-primary/50 transition-all duration-300" />
                </div>

                {/* Profile Details */}
                <div className="flex-1 mt-4 md:mt-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                      {demoUser.name}
                    </h1>
                    {demoUser.verified && (
                      <div className="text-primary animate-bounce" title="Verified">
                        <BadgeCheck className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                  
                  <p className="text-muted-foreground mt-1 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{demoUser.location}</span>
                    <span className="text-muted-foreground">•</span>
                    <span>{demoUser.joinedDate}</span>
                  </p>
                  
                  <div className="flex items-center gap-3 mt-3 flex-wrap">
                    <div className="flex items-center gap-1.5 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium">{demoUser.rating}</span>
                      <span className="text-muted-foreground text-sm">
                        ({demoUser.tripsCompleted} trips)
                      </span>
                    </div>
                    <span className="text-sm bg-gradient-to-r from-primary/10 to-primary/5 text-foreground px-3 py-1.5 rounded-full border border-border">
                      🌟 {demoUser.level}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4">
                    <Button variant="outline" size="sm">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Message
                    </Button>
                    <Button variant="outline" size="sm">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Connect
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 md:px-6 mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-card rounded-xl shadow-warm border border-border/50">
                <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                <div className="text-xl md:text-2xl font-bold">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bio Section */}
        <div className="container mx-auto px-4 md:px-6 mt-8">
          <div className="bg-card rounded-xl shadow-warm border border-border/50 p-6">
            <h3 className="font-semibold mb-3">About</h3>
            <p className="text-muted-foreground leading-relaxed">{demoUser.bio}</p>
            
            <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Member since {demoUser.joinedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{demoUser.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="container mx-auto px-4 md:px-6 mt-8">
          <div className="border-b border-border/50">
            <div className="flex gap-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-3 px-1 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-primary text-primary font-medium"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="container mx-auto px-4 md:px-6 mt-8 pb-8">
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Badges */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-xl shadow-warm border border-border/50 p-6 mb-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Travel Badges
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {demoUser.badges.map((badge, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20 hover:shadow-warm transition-shadow"
                      >
                        <div className="text-2xl">{badge.icon}</div>
                        <div>
                          <h4 className="font-medium text-sm">{badge.name}</h4>
                          <p className="text-xs text-muted-foreground">{badge.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Trips */}
                <div className="bg-card rounded-xl shadow-warm border border-border/50 p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Plane className="w-5 h-5 text-primary" />
                    Recent Adventures
                  </h3>
                  <div className="space-y-4">
                    {demoUser.recentTrips.map((trip, index) => (
                      <div 
                        key={index} 
                        className="group relative overflow-hidden rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <div className="flex flex-col sm:flex-row">
                          <div className="relative h-32 sm:h-auto sm:w-1/3">
                            <img
                              src={trip.image}
                              alt={trip.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent sm:bg-gradient-to-r sm:from-black/60 sm:to-transparent" />
                            <div className="absolute bottom-2 left-2 right-2 text-white">
                              <h4 className="font-bold text-lg line-clamp-1">{trip.name}</h4>
                              <div className="flex items-center text-sm">
                                <MapPin className="w-3.5 h-3.5 mr-1" />
                                <span>{trip.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="p-4 flex-1">
                            <div className="flex items-center mb-2">
                              <div className="flex items-center bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-medium">
                                <Calendar className="w-3 h-3 mr-1" />
                                {trip.date}
                              </div>
                              <div className="ml-auto flex items-center bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full text-xs font-medium">
                                <Star className="w-3 h-3 fill-amber-400 text-amber-400 mr-1" />
                                {trip.rating}
                              </div>
                            </div>
                            <div className="mb-3">
                              <h5 className="font-medium text-sm text-muted-foreground mb-1">Highlights:</h5>
                              <div className="flex flex-wrap gap-1.5">
                                {trip.highlights.map((highlight, i) => (
                                  <span 
                                    key={i}
                                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                                  >
                                    {highlight}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center justify-between mt-auto">
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Users className="w-4 h-4 mr-1" />
                                {trip.participants} {trip.participants === 1 ? 'Traveler' : 'Travelers'}
                              </div>
                              <Button variant="outline" size="sm" className="text-xs">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Interests */}
                <div className="bg-card rounded-xl shadow-warm border border-border/50 p-6">
                  <h3 className="font-semibold mb-4">Travel Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {demoUser.interests.map((interest, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="bg-card rounded-xl shadow-warm border border-border/50 p-6">
                  <h3 className="font-semibold mb-4">Languages</h3>
                  <div className="space-y-2">
                    {demoUser.languages.map((language, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 bg-secondary/10 text-secondary rounded-lg text-sm"
                      >
                        {language}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-card rounded-xl shadow-warm border border-border/50 p-6">
                  <h3 className="font-semibold mb-4">Connect</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">aarav.demo@roammate.in</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center gap-3 pt-2">
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
                </div>
              </div>
            </div>
          )}

          {activeTab === "trips" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {demoUser.recentTrips.map((trip, index) => (
                <div key={index} className="bg-card rounded-xl shadow-warm border border-border/50 overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{trip.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{trip.location}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{trip.date}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{trip.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "photos" && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {demoUser.photos.map((photo, index) => (
                <div key={index} className="aspect-square relative group overflow-hidden rounded-lg">
                  <img
                    src={photo}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                  />
                </div>
              ))}
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-6">
              {demoUser.reviews.map((review, index) => (
                <div key={index} className="bg-card rounded-xl shadow-warm border border-border/50 p-6">
                  <div className="flex items-start gap-4">
                    <img
                      src={review.avatar}
                      alt={review.reviewer}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-medium">{review.reviewer}</h4>
                          <p className="text-sm text-muted-foreground">{review.trip}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-2">{review.comment}</p>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}