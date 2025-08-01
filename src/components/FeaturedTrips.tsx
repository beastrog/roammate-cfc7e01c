import TripCard from "./TripCard";
import trip1 from "@/assets/trip-1.jpg";
import trip2 from "@/assets/trip-2.jpg";
import trip3 from "@/assets/trip-3.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

const featuredTrips = [
  {
    id: "1",
    title: "Desert Dreams: Rajasthan Cultural Immersion",
    location: "Jaisalmer, Rajasthan",
    image: trip1,
    duration: "5 days, 4 nights",
    groupSize: 6,
    maxGroupSize: 8,
    price: 12500,
    rating: 4.9,
    vibe: "Culture 🏛️",
    organizer: {
      name: "Priya Sharma",
      avatar: avatar1,
      verified: true,
    },
    members: [
      { avatar: avatar1, name: "Priya" },
      { avatar: avatar2, name: "Arjun" },
      { avatar: avatar3, name: "Maya" },
      { avatar: avatar1, name: "Rohit" },
      { avatar: avatar2, name: "Anjali" },
      { avatar: avatar3, name: "Karan" },
    ],
  },
  {
    id: "2",
    title: "Backwater Bliss: Kerala Soul Journey",
    location: "Alleppey, Kerala",
    image: trip2,
    duration: "4 days, 3 nights",
    groupSize: 4,
    maxGroupSize: 6,
    price: 8500,
    rating: 4.8,
    vibe: "Adventure 🌊",
    organizer: {
      name: "Arjun Nair",
      avatar: avatar2,
      verified: true,
    },
    members: [
      { avatar: avatar2, name: "Arjun" },
      { avatar: avatar1, name: "Lakshmi" },
      { avatar: avatar3, name: "Dev" },
      { avatar: avatar1, name: "Meera" },
    ],
  },
  {
    id: "3",
    title: "Ruins & Revelations: Hampi Heritage Trek",
    location: "Hampi, Karnataka",
    image: trip3,
    duration: "3 days, 2 nights",
    groupSize: 5,
    maxGroupSize: 7,
    price: 6500,
    rating: 4.7,
    vibe: "Spiritual 🕉️",
    organizer: {
      name: "Maya Patel",
      avatar: avatar3,
      verified: true,
    },
    members: [
      { avatar: avatar3, name: "Maya" },
      { avatar: avatar1, name: "Sita" },
      { avatar: avatar2, name: "Vikram" },
      { avatar: avatar1, name: "Radha" },
      { avatar: avatar3, name: "Arun" },
    ],
  },
];

export default function FeaturedTrips() {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-primary">Adventures</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join curated journeys designed by passionate local explorers. 
            Each trip offers authentic cultural experiences and meaningful connections.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {featuredTrips.map((trip, index) => (
            <div
              key={trip.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TripCard trip={trip} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Discover more authentic experiences waiting for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-background border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-warm hover:shadow-cultural">
              View All Trips
            </button>
            <button className="px-8 py-3 bg-gradient-hero text-primary-foreground font-medium rounded-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105">
              Create Your Trip
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}