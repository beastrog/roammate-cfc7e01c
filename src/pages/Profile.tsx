import { useState } from "react";
import { ArrowLeft, MapPin, Calendar, Star, Shield, Camera, Users, Heart, Plane, Award, Settings, Edit, Share2, MessageCircle, Phone, Mail, Instagram, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const demoUser = {
  name: "Aarav Nijhawan",
  avatar: "/images/avatar.jpg",
  coverImage: "/images/cover.jpg",
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
      image: "/images/ladakh-trip.jpg",
      location: "Ladakh, India",
      participants: 4,
      highlights: ["Pangong Tso Lake", "Nubra Valley", "Khardung La Pass"]
    },
    { 
      name: "Andaman Islands", 
      date: "Mar 2024", 
      rating: 4.9, 
      image: "/images/andaman-trip.jpg",
      location: "Andaman, India",
      participants: 2,
      highlights: ["Scuba Diving", "Radhanagar Beach", "Bioluminescent Plankton"]
    },
    { 
      name: "Bhutan Expedition", 
      date: "Nov 2023", 
      rating: 4.8, 
      image: "/images/bhutan-trip.jpg",
      location: "Bhutan",
      participants: 6,
      highlights: ["Tiger's Nest", "Punakha Dzong", "Himalayan Trekking"]
    }
  ],
  photos: [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/trip-1.jpg",
    "/images/trip-2.jpg",
    "/images/trip-3.jpg"
  ],
  reviews: [
    {
      reviewer: "Ananya Sharma",
      avatar: "/images/avatar-2.jpg",
      rating: 5,
      comment: "Traveled with Aarav to Ladakh and it was the most memorable trip! His photography skills are incredible and he knows all the best spots.",
      trip: "Ladakh Road Trip",
      date: "3 weeks ago"
    },
    {
      reviewer: "Rohan Mehta",
      avatar: "/images/avatar-3.jpg",
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
          {/* Cover Image */}
          <div className="h-48 md:h-64 lg:h-80 relative overflow-hidden">
            <img
              src={demoUser.coverImage}
              alt="Cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="absolute top-4 left-4 p-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>

            {/* Demo Badge */}
            <div className="absolute top-4 right-4">
              <div className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-sm rounded-full font-medium">
                Demo Profile
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative -mt-16 md:-mt-20">
              <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6">
                {/* Avatar */}
                <div className="relative">
                  <img
                    src={demoUser.avatar}
                    alt={demoUser.name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-background object-cover shadow-cultural"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 md:w-8 md:h-8 bg-primary rounded-full flex items-center justify-center border-2 border-background">
                    <Shield className="w-3 h-3 md:w-4 md:h-4 text-primary-foreground" />
                  </div>
                </div>

                {/* Info & Actions */}
                <div className="flex-1 md:mb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {demoUser.name}
                        </h1>
                        <div className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-medium">
                          {demoUser.level}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm md:text-base">
                        {demoUser.age} • {demoUser.location}
                      </p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium text-sm">{demoUser.rating}</span>
                        <span className="text-muted-foreground text-sm">• Verified Traveler</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        Message
                      </Button>
                      <Button variant="hero" size="sm" className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
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
                <div key={index} className="aspect-square">
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