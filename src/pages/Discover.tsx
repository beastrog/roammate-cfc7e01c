import { useState } from "react";
import { Search, Filter, MapPin, Calendar, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TripCard from "@/components/TripCard";

// Import images
import trip1 from "@/assets/trip-1.jpg";
import trip2 from "@/assets/trip-2.jpg";
import trip3 from "@/assets/trip-3.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

// Mock data for trips
const mockTrips = [
  {
    id: "1",
    title: "Spiritual Journey to Varanasi",
    location: "Varanasi, Uttar Pradesh",
    image: trip1,
    duration: "7 days",
    groupSize: 6,
    maxGroupSize: 10,
    price: 15000,
    rating: 4.8,
    vibe: "Spiritual",
    organizer: {
      name: "Arjun Kumar",
      avatar: avatar1,
      verified: true,
      bio: "Spiritual guide with 8+ years experience in Varanasi's ancient rituals",
      age: 32,
      location: "Varanasi, UP",
      joinedDate: "March 2020",
      tripsCompleted: 45,
      rating: 4.9,
      interests: ["Spirituality", "Philosophy", "Photography", "History"],
      languages: ["Hindi", "English", "Sanskrit"]
    },
    members: [
      { 
        avatar: avatar1, 
        name: "Priya Sharma",
        bio: "Travel blogger passionate about spiritual journeys",
        age: 28,
        location: "Delhi",
        joinedDate: "January 2023",
        tripsCompleted: 8,
        rating: 4.7,
        interests: ["Writing", "Spirituality", "Photography"],
        languages: ["Hindi", "English"]
      },
      { 
        avatar: avatar2, 
        name: "Raj Patel",
        bio: "Software engineer seeking mindfulness through travel",
        age: 26,
        location: "Bangalore",
        joinedDate: "June 2023",
        tripsCompleted: 5,
        rating: 4.6,
        interests: ["Technology", "Meditation", "Culture"],
        languages: ["Hindi", "English", "Gujarati"]
      },
      { 
        avatar: avatar3, 
        name: "Maya Khanna",
        bio: "Yoga instructor exploring India's spiritual heritage",
        age: 30,
        location: "Mumbai",
        joinedDate: "August 2022",
        tripsCompleted: 12,
        rating: 4.8,
        interests: ["Yoga", "Spirituality", "Wellness"],
        languages: ["Hindi", "English", "Marathi"]
      }
    ]
  },
  {
    id: "2",
    title: "Backwaters & Spice Gardens",
    location: "Kerala",
    image: trip2,
    duration: "5 days",
    groupSize: 4,
    maxGroupSize: 8,
    price: 12000,
    rating: 4.9,
    vibe: "Nature",
    organizer: {
      name: "Meera Singh",
      avatar: avatar2,
      verified: true,
      bio: "Nature enthusiast and Kerala native sharing authentic experiences",
      age: 29,
      location: "Kochi, Kerala",
      joinedDate: "February 2021",
      tripsCompleted: 38,
      rating: 4.9,
      interests: ["Nature", "Cooking", "Botany", "Local Culture"],
      languages: ["Malayalam", "Hindi", "English", "Tamil"]
    },
    members: [
      { 
        avatar: avatar2, 
        name: "Suresh Menon",
        bio: "Photography enthusiast capturing Kerala's natural beauty",
        age: 35,
        location: "Thiruvananthapuram",
        joinedDate: "April 2022",
        tripsCompleted: 15,
        rating: 4.9,
        interests: ["Photography", "Nature", "Travel"],
        languages: ["Malayalam", "English", "Tamil"]
      },
      { 
        avatar: avatar3, 
        name: "Anjali Iyer",
        bio: "Food blogger exploring Kerala's culinary traditions",
        age: 27,
        location: "Chennai",
        joinedDate: "September 2023",
        tripsCompleted: 6,
        rating: 4.7,
        interests: ["Cooking", "Food", "Culture"],
        languages: ["Tamil", "English", "Hindi"]
      },
      { 
        avatar: avatar1, 
        name: "Vikram Reddy",
        bio: "Adventure seeker and nature lover",
        age: 31,
        location: "Hyderabad",
        joinedDate: "November 2022",
        tripsCompleted: 9,
        rating: 4.8,
        interests: ["Adventure", "Nature", "Photography"],
        languages: ["Telugu", "Hindi", "English"]
      }
    ]
  },
  {
    id: "3",
    title: "Rajasthan Heritage Trail",
    location: "Rajasthan",
    image: trip3,
    duration: "8 days",
    groupSize: 5,
    maxGroupSize: 12,
    price: 18000,
    rating: 4.7,
    vibe: "Cultural",
    organizer: {
      name: "Priya Rathore",
      avatar: avatar3,
      verified: true,
      bio: "Heritage expert and Rajasthan native sharing royal stories",
      age: 34,
      location: "Jaipur, Rajasthan",
      joinedDate: "January 2021",
      tripsCompleted: 52,
      rating: 4.8,
      interests: ["History", "Architecture", "Culture", "Photography"],
      languages: ["Hindi", "English", "Rajasthani"]
    },
    members: [
      { 
        avatar: avatar3, 
        name: "Amit Singh",
        bio: "History buff exploring India's royal heritage",
        age: 29,
        location: "Delhi",
        joinedDate: "March 2023",
        tripsCompleted: 7,
        rating: 4.6,
        interests: ["History", "Architecture", "Photography"],
        languages: ["Hindi", "English"]
      },
      { 
        avatar: avatar1, 
        name: "Kavya Sharma",
        bio: "Fashion designer inspired by traditional textiles",
        age: 26,
        location: "Mumbai",
        joinedDate: "July 2023",
        tripsCompleted: 4,
        rating: 4.5,
        interests: ["Fashion", "Textiles", "Culture"],
        languages: ["Hindi", "English", "Marathi"]
      },
      { 
        avatar: avatar2, 
        name: "Rahul Verma",
        bio: "Photographer capturing Rajasthan's vibrant culture",
        age: 33,
        location: "Pune",
        joinedDate: "October 2022",
        tripsCompleted: 11,
        rating: 4.8,
        interests: ["Photography", "Culture", "Travel"],
        languages: ["Hindi", "English", "Marathi"]
      }
    ]
  },
  {
    id: "4",
    title: "Himalayan Adventure",
    location: "Himachal Pradesh",
    image: hero2,
    duration: "6 days",
    groupSize: 3,
    maxGroupSize: 6,
    price: 22000,
    rating: 4.9,
    vibe: "Adventure",
    organizer: {
      name: "Ravi Thakur",
      avatar: avatar1,
      verified: true,
      bio: "Mountain guide with 10+ years of Himalayan experience",
      age: 36,
      location: "Manali, HP",
      joinedDate: "June 2020",
      tripsCompleted: 68,
      rating: 4.9,
      interests: ["Mountaineering", "Adventure", "Nature", "Photography"],
      languages: ["Hindi", "English", "Pahari"]
    },
    members: [
      { 
        avatar: avatar2, 
        name: "Neha Kapoor",
        bio: "Adventure sports enthusiast and nature lover",
        age: 25,
        location: "Chandigarh",
        joinedDate: "May 2023",
        tripsCompleted: 3,
        rating: 4.7,
        interests: ["Adventure", "Nature", "Photography"],
        languages: ["Hindi", "English", "Punjabi"]
      },
      { 
        avatar: avatar3, 
        name: "Arun Kumar",
        bio: "Trekking enthusiast exploring the Himalayas",
        age: 28,
        location: "Dehradun",
        joinedDate: "August 2023",
        tripsCompleted: 8,
        rating: 4.8,
        interests: ["Trekking", "Nature", "Adventure"],
        languages: ["Hindi", "English", "Garhwali"]
      }
    ]
  },
  {
    id: "5",
    title: "Goa Beach & Culture",
    location: "Goa",
    image: hero3,
    duration: "4 days",
    groupSize: 6,
    maxGroupSize: 10,
    price: 14000,
    rating: 4.6,
    vibe: "Relaxation",
    organizer: {
      name: "Maria Fernandes",
      avatar: avatar2,
      verified: true,
      bio: "Goa native sharing authentic beach and cultural experiences",
      age: 31,
      location: "Panaji, Goa",
      joinedDate: "December 2021",
      tripsCompleted: 41,
      rating: 4.7,
      interests: ["Beach", "Culture", "Food", "Music"],
      languages: ["Konkani", "Hindi", "English", "Portuguese"]
    },
    members: [
      { 
        avatar: avatar3, 
        name: "Sunil Desai",
        bio: "Music producer exploring Goa's vibrant culture",
        age: 27,
        location: "Mumbai",
        joinedDate: "January 2023",
        tripsCompleted: 5,
        rating: 4.5,
        interests: ["Music", "Culture", "Beach"],
        languages: ["Hindi", "English", "Marathi"]
      },
      { 
        avatar: avatar1, 
        name: "Priya Patel",
        bio: "Food blogger discovering Goan cuisine",
        age: 24,
        location: "Pune",
        joinedDate: "March 2023",
        tripsCompleted: 2,
        rating: 4.4,
        interests: ["Food", "Culture", "Photography"],
        languages: ["Hindi", "English", "Marathi"]
      }
    ]
  },
  {
    id: "6",
    title: "Taj Mahal & Agra Fort",
    location: "Agra, Uttar Pradesh",
    image: hero1,
    duration: "3 days",
    groupSize: 4,
    maxGroupSize: 8,
    price: 9000,
    rating: 4.8,
    vibe: "Historical",
    organizer: {
      name: "Aisha Khan",
      avatar: avatar2,
      verified: true,
      bio: "History expert and Agra native sharing Mughal heritage",
      age: 33,
      location: "Agra, UP",
      joinedDate: "September 2020",
      tripsCompleted: 55,
      rating: 4.8,
      interests: ["History", "Architecture", "Photography", "Culture"],
      languages: ["Hindi", "English", "Urdu"]
    },
    members: [
      { 
        avatar: avatar3, 
        name: "Rajesh Kumar",
        bio: "Architecture student studying Mughal monuments",
        age: 22,
        location: "Delhi",
        joinedDate: "June 2023",
        tripsCompleted: 1,
        rating: 4.6,
        interests: ["Architecture", "History", "Photography"],
        languages: ["Hindi", "English"]
      },
      { 
        avatar: avatar1, 
        name: "Meera Singh",
        bio: "Travel photographer capturing India's heritage",
        age: 29,
        location: "Lucknow",
        joinedDate: "April 2023",
        tripsCompleted: 6,
        rating: 4.7,
        interests: ["Photography", "History", "Travel"],
        languages: ["Hindi", "English", "Awadhi"]
      }
    ]
  }
];

export default function Discover() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTrips, setFilteredTrips] = useState(mockTrips);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredTrips(mockTrips);
    } else {
      const filtered = mockTrips.filter(
        trip =>
          trip.title.toLowerCase().includes(query.toLowerCase()) ||
          trip.location.toLowerCase().includes(query.toLowerCase()) ||
          trip.vibe.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredTrips(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Discover <span className="text-primary">Amazing Trips</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find your perfect travel companions and explore India's incredible heritage together
            </p>
          </div>

          {/* Search & Filters */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-card rounded-2xl shadow-warm border border-border/50 p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    placeholder="Search destinations, vibes, or experiences..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="pl-12 h-12 text-base border-border/50 focus:border-primary"
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Filters
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Location
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Dates
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              {filteredTrips.length} trip{filteredTrips.length !== 1 ? 's' : ''} found
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>

          {/* Trip Grid */}
          {filteredTrips.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTrips.map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No trips found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or browse all available trips
              </p>
              <Button 
                variant="outline" 
                onClick={() => handleSearch("")}
                className="mt-4"
              >
                Show All Trips
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}