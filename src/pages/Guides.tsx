import { MapPin, Star, Shield, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

// Import images
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

// Mock data for guides
const mockGuides = [
  {
    id: "1",
    name: "Arjun Kumar",
    avatar: avatar1,
    location: "Varanasi, UP",
    specialty: "Spiritual & Cultural",
    rating: 4.9,
    tripsCompleted: 45,
    reviews: 127,
    price: 2500,
    bio: "Spiritual guide with 8+ years experience in Varanasi's ancient rituals. Expert in Ganga aarti, temple visits, and cultural immersion.",
    languages: ["Hindi", "English", "Sanskrit"],
    specialties: ["Ganga Aarti", "Temple Tours", "Cultural Immersion", "Spiritual Guidance"],
    verified: true
  },
  {
    id: "2",
    name: "Meera Singh",
    avatar: avatar2,
    location: "Kochi, Kerala",
    specialty: "Nature & Backwaters",
    rating: 4.9,
    tripsCompleted: 38,
    reviews: 89,
    price: 3000,
    bio: "Nature enthusiast and Kerala native sharing authentic experiences. Specializes in backwater tours, spice gardens, and local cuisine.",
    languages: ["Malayalam", "Hindi", "English", "Tamil"],
    specialties: ["Backwater Tours", "Spice Gardens", "Local Cuisine", "Nature Walks"],
    verified: true
  },
  {
    id: "3",
    name: "Priya Rathore",
    avatar: avatar3,
    location: "Jaipur, Rajasthan",
    specialty: "Heritage & Architecture",
    rating: 4.8,
    tripsCompleted: 52,
    reviews: 156,
    price: 3500,
    bio: "Heritage expert and Rajasthan native sharing royal stories. Expert in palace tours, fort visits, and cultural experiences.",
    languages: ["Hindi", "English", "Rajasthani"],
    specialties: ["Palace Tours", "Fort Visits", "Cultural Shows", "Heritage Walks"],
    verified: true
  }
];

export default function Guides() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Meet Your <span className="text-primary">Local Guides</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Connect with verified local experts who know the hidden gems and authentic experiences
            </p>
          </div>

          {/* Coming Soon Banner */}
          <div className="bg-gradient-hero rounded-2xl p-8 text-center mb-8 text-primary-foreground">
            <h2 className="text-2xl font-bold mb-2">Feature Coming Soon!</h2>
            <p className="text-primary-foreground/80">
              We're carefully vetting amazing local guides to bring you the most authentic experiences.
            </p>
          </div>

          {/* Preview Guide Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockGuides.map((guide) => (
              <div 
                key={guide.id}
                className="bg-card rounded-xl shadow-warm border border-border/50 overflow-hidden hover:shadow-cultural transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={guide.avatar}
                      alt={guide.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg">{guide.name}</h3>
                        {guide.verified && (
                          <Shield className="w-4 h-4 text-primary" />
                        )}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {guide.location}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{guide.rating}</span>
                      <span className="text-muted-foreground text-sm">
                        ({guide.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {guide.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-primary">₹{guide.price}</span>
                      <div className="text-xs text-muted-foreground">per day</div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Chat
                      </Button>
                      <Button variant="hero" size="sm">
                        Book
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Want to become a guide?</h3>
            <p className="text-muted-foreground mb-6">
              Share your local knowledge and help travelers discover authentic experiences
            </p>
            <Button variant="cultural" size="lg">
              Apply to be a Guide
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}