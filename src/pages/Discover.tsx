import { useState } from "react";
import { Search, Filter, MapPin, Calendar, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
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
      verified: true
    },
    members: [
      { avatar: "/src/assets/avatar-1.jpg", name: "Priya" },
      { avatar: "/src/assets/avatar-2.jpg", name: "Raj" },
      { avatar: "/src/assets/avatar-3.jpg", name: "Maya" }
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
      verified: true
    },
    members: [
      { avatar: "/src/assets/avatar-2.jpg", name: "Kiran" },
      { avatar: "/src/assets/avatar-3.jpg", name: "Suresh" }
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
      verified: true
    },
    members: [
      { avatar: "/src/assets/avatar-1.jpg", name: "Anita" },
      { avatar: "/src/assets/avatar-3.jpg", name: "Rohan" },
      { avatar: "/src/assets/avatar-2.jpg", name: "Deepa" }
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
    </div>
  );
}