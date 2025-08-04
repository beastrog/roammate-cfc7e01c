import { useState } from "react";
import { Search, Filter, MapPin, Calendar, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TripCard from "@/components/TripCard";

// Mock data for trips
const mockTrips = [
  {
    id: "1",
    title: "Spiritual Journey to Varanasi",
    location: "Varanasi, Uttar Pradesh",
    image: "/src/assets/trip-1.jpg",
    duration: "7 days",
    groupSize: 6,
    maxGroupSize: 10,
    price: 15000,
    rating: 4.8,
    vibe: "Spiritual",
    organizer: {
      name: "Arjun Kumar",
      avatar: "/src/assets/avatar-1.jpg",
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
        avatar: "/src/assets/avatar-1.jpg", 
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
        avatar: "/src/assets/avatar-2.jpg", 
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
        avatar: "/src/assets/avatar-3.jpg", 
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
    image: "/src/assets/trip-2.jpg",
    duration: "5 days",
    groupSize: 4,
    maxGroupSize: 8,
    price: 12000,
    rating: 4.9,
    vibe: "Nature",
    organizer: {
      name: "Meera Singh",
      avatar: "/src/assets/avatar-2.jpg",
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
        avatar: "/src/assets/avatar-2.jpg", 
        name: "Kiran Das",
        bio: "Photographer capturing Kerala's natural beauty",
        age: 31,
        location: "Trivandrum",
        joinedDate: "April 2023",
        tripsCompleted: 7,
        rating: 4.5,
        interests: ["Photography", "Nature", "Backwaters"],
        languages: ["Malayalam", "English"]
      },
      { 
        avatar: "/src/assets/avatar-3.jpg", 
        name: "Suresh Kumar",
        bio: "Spice trader sharing authentic Kerala experiences",
        age: 35,
        location: "Munnar",
        joinedDate: "September 2022",
        tripsCompleted: 15,
        rating: 4.7,
        interests: ["Spices", "Trading", "Local Culture"],
        languages: ["Malayalam", "Hindi", "English"]
      }
    ]
  },
  {
    id: "3",
    title: "Desert Safari Adventure",
    location: "Rajasthan",
    image: "/src/assets/trip-3.jpg",
    duration: "4 days",
    groupSize: 8,
    maxGroupSize: 12,
    price: 18000,
    rating: 4.7,
    vibe: "Adventure",
    organizer: {
      name: "Vikram Patel",
      avatar: "/src/assets/avatar-3.jpg",
      verified: true,
      bio: "Adventure guide specializing in Rajasthan's desert expeditions",
      age: 34,
      location: "Jaisalmer, Rajasthan",
      joinedDate: "November 2019",
      tripsCompleted: 52,
      rating: 4.8,
      interests: ["Adventure", "Desert Culture", "Camel Safari", "History"],
      languages: ["Hindi", "English", "Rajasthani", "Gujarati"]
    },
    members: [
      { 
        avatar: "/src/assets/avatar-1.jpg", 
        name: "Anita Verma",
        bio: "Adventure seeker and desert photography enthusiast",
        age: 27,
        location: "Jaipur",
        joinedDate: "May 2023",
        tripsCompleted: 6,
        rating: 4.4,
        interests: ["Adventure", "Photography", "Desert Culture"],
        languages: ["Hindi", "English"]
      },
      { 
        avatar: "/src/assets/avatar-3.jpg", 
        name: "Rohan Gupta",
        bio: "Travel vlogger documenting India's diverse landscapes",
        age: 25,
        location: "Delhi",
        joinedDate: "March 2023",
        tripsCompleted: 9,
        rating: 4.6,
        interests: ["Vlogging", "Adventure", "Culture"],
        languages: ["Hindi", "English", "Punjabi"]
      },
      { 
        avatar: "/src/assets/avatar-2.jpg", 
        name: "Deepa Singh",
        bio: "Cultural researcher exploring Rajasthan's heritage",
        age: 33,
        location: "Udaipur",
        joinedDate: "July 2022",
        tripsCompleted: 14,
        rating: 4.8,
        interests: ["Culture", "Research", "Heritage", "Art"],
        languages: ["Hindi", "English", "Rajasthani"]
      }
    ]
  },
  {
    id: "4",
    title: "Himalayan Meditation Retreat",
    location: "Rishikesh, Uttarakhand",
    image: "/src/assets/hero-2.jpg",
    duration: "10 days",
    groupSize: 5,
    maxGroupSize: 8,
    price: 22000,
    rating: 4.9,
    vibe: "Spiritual",
    organizer: {
      name: "Guru Anand",
      avatar: "/src/assets/avatar-1.jpg",
      verified: true,
      bio: "Certified meditation teacher with 15+ years of Himalayan practice",
      age: 45,
      location: "Rishikesh",
      joinedDate: "January 2018",
      tripsCompleted: 67,
      rating: 5.0,
      interests: ["Meditation", "Yoga", "Philosophy", "Healing"],
      languages: ["Hindi", "English", "Sanskrit"]
    },
    members: [
      { 
        avatar: "/src/assets/avatar-2.jpg", 
        name: "Kavya Iyer",
        bio: "Corporate executive seeking inner peace through meditation",
        age: 29,
        location: "Chennai",
        joinedDate: "February 2023",
        tripsCompleted: 4,
        rating: 4.3,
        interests: ["Meditation", "Wellness", "Stress Relief"],
        languages: ["Tamil", "English", "Hindi"]
      }
    ]
  },
  {
    id: "5",
    title: "Goa Beach Hopping",
    location: "Goa",
    image: "/src/assets/hero-3.jpg",
    duration: "6 days",
    groupSize: 7,
    maxGroupSize: 10,
    price: 14000,
    rating: 4.6,
    vibe: "Adventure",
    organizer: {
      name: "Carlos D'Souza",
      avatar: "/src/assets/avatar-3.jpg",
      verified: true,
      bio: "Local Goan showing hidden beaches and authentic coastal culture",
      age: 28,
      location: "Panaji, Goa",
      joinedDate: "June 2021",
      tripsCompleted: 41,
      rating: 4.7,
      interests: ["Beach Culture", "Water Sports", "Local Cuisine", "Music"],
      languages: ["Konkani", "English", "Hindi", "Portuguese"]
    },
    members: [
      { 
        avatar: "/src/assets/avatar-1.jpg", 
        name: "Isha Kapoor",
        bio: "Beach lover and water sports enthusiast",
        age: 24,
        location: "Pune",
        joinedDate: "August 2023",
        tripsCompleted: 3,
        rating: 4.2,
        interests: ["Water Sports", "Beach Culture", "Music"],
        languages: ["Hindi", "English", "Marathi"]
      },
      { 
        avatar: "/src/assets/avatar-2.jpg", 
        name: "Arjun Nair",
        bio: "Musician exploring Goa's vibrant music scene",
        age: 26,
        location: "Kochi",
        joinedDate: "July 2023",
        tripsCompleted: 5,
        rating: 4.4,
        interests: ["Music", "Beach Culture", "Nightlife"],
        languages: ["Malayalam", "English", "Hindi"]
      }
    ]
  },
  {
    id: "6",
    title: "Hampi Heritage Walk",
    location: "Hampi, Karnataka",
    image: "/src/assets/hero-1.jpg",
    duration: "3 days",
    groupSize: 6,
    maxGroupSize: 9,
    price: 8500,
    rating: 4.8,
    vibe: "Culture",
    organizer: {
      name: "Dr. Lakshmi Rao",
      avatar: "/src/assets/avatar-2.jpg",
      verified: true,
      bio: "Archaeologist and historian specializing in Vijayanagara Empire",
      age: 42,
      location: "Hampi",
      joinedDate: "September 2019",
      tripsCompleted: 78,
      rating: 4.9,
      interests: ["Archaeology", "History", "Heritage", "Architecture"],
      languages: ["Kannada", "English", "Hindi", "Telugu"]
    },
    members: [
      { 
        avatar: "/src/assets/avatar-3.jpg", 
        name: "Ravi Krishnan",
        bio: "Architecture student fascinated by ancient Indian designs",
        age: 23,
        location: "Bangalore",
        joinedDate: "October 2023",
        tripsCompleted: 2,
        rating: 4.1,
        interests: ["Architecture", "History", "Design"],
        languages: ["Kannada", "English", "Hindi"]
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