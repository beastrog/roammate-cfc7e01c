import { Heart, X } from "lucide-react";

interface LikesPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const likedTrips = [
  {
    id: "1",
    title: "Spiritual Journey to Varanasi",
    location: "Varanasi, UP",
    image: "/src/assets/trip-1.jpg",
    price: 15000
  },
  {
    id: "2",
    title: "Backwaters & Spice Gardens",
    location: "Kerala",
    image: "/src/assets/trip-2.jpg",
    price: 12000
  },
  {
    id: "3",
    title: "Desert Safari Adventure",
    location: "Rajasthan",
    image: "/src/assets/trip-3.jpg",
    price: 18000
  }
];

export default function LikesPopup({ isOpen, onClose }: LikesPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-12 right-0 w-80 bg-card rounded-xl shadow-cultural border border-border/50 z-50 animate-scale-in">
      <div className="p-4 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-primary fill-primary" />
          <h3 className="font-semibold text-foreground">Liked Trips</h3>
        </div>
        <button 
          onClick={onClose}
          className="p-1 hover:bg-accent rounded-full transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      <div className="max-h-80 overflow-y-auto">
        {likedTrips.length > 0 ? (
          <div className="p-2">
            {likedTrips.map((trip) => (
              <div key={trip.id} className="flex items-center gap-3 p-3 hover:bg-accent rounded-lg transition-colors cursor-pointer">
                <img 
                  src={trip.image} 
                  alt={trip.title}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm truncate">{trip.title}</h4>
                  <p className="text-xs text-muted-foreground">{trip.location}</p>
                  <p className="text-xs text-primary font-medium">₹{trip.price}</p>
                </div>
                <Heart className="w-4 h-4 text-primary fill-primary" />
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 text-center">
            <Heart className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
            <p className="text-muted-foreground text-sm">No liked trips yet</p>
            <p className="text-xs text-muted-foreground">Start exploring to save your favorites!</p>
          </div>
        )}
      </div>
    </div>
  );
}