import { useState } from "react";
import { MapPin, Calendar, Users, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import JoinTripModal from "./JoinTripModal";
import UserProfileModal from "./UserProfileModal";

interface TripCardProps {
  trip: {
    id: string;
    title: string;
    location: string;
    image: string;
    duration: string;
    groupSize: number;
    maxGroupSize: number;
    price: number;
    rating: number;
    vibe: string;
    organizer: {
      name: string;
      avatar: string;
      verified: boolean;
      bio?: string;
      age?: number;
      location?: string;
      joinedDate?: string;
      tripsCompleted?: number;
      rating?: number;
      interests?: string[];
      languages?: string[];
    };
    members: Array<{
      avatar: string;
      name: string;
      bio?: string;
      age?: number;
      location?: string;
      joinedDate?: string;
      tripsCompleted?: number;
      rating?: number;
      interests?: string[];
      languages?: string[];
    }>;
  };
}

export default function TripCard({ trip }: TripCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState<any>(null);

  return (
    <div className="group bg-card rounded-xl shadow-warm hover:shadow-cultural transition-all duration-300 overflow-hidden border border-border/50 hover:border-primary/30">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={trip.image}
          alt={trip.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-heritage/60 via-transparent to-transparent" />
        
        {/* Vibe badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full shadow-warm">
            {trip.vibe}
          </span>
        </div>

        {/* Like button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
        >
          <Heart
            className={`w-4 h-4 ${
              isLiked ? "fill-red-500 text-red-500" : "text-white"
            }`}
          />
        </button>

        {/* Group avatars */}
        <div className="absolute bottom-3 left-3 flex -space-x-2">
          {trip.members.slice(0, 3).map((member, index) => (
            <button
              key={index}
              onClick={() => setSelectedMember(member)}
              className="w-8 h-8 rounded-full border-2 border-white object-cover hover:scale-110 transition-transform cursor-pointer"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-full rounded-full object-cover"
              />
            </button>
          ))}
          {trip.members.length > 3 && (
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground border-2 border-white flex items-center justify-center text-xs font-medium">
              +{trip.members.length - 3}
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
            {trip.title}
          </h3>
          <div className="flex items-center gap-1 text-sm">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{trip.rating}</span>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="w-4 h-4 mr-2" />
            {trip.location}
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            {trip.duration}
          </div>
          <div className="flex items-center text-muted-foreground text-sm">
            <Users className="w-4 h-4 mr-2" />
            {trip.groupSize}/{trip.maxGroupSize} travelers
          </div>
        </div>

        {/* Organizer */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedMember(trip.organizer)}
              className="w-6 h-6 rounded-full object-cover hover:scale-110 transition-transform cursor-pointer"
            >
              <img
                src={trip.organizer.avatar}
                alt={trip.organizer.name}
                className="w-full h-full rounded-full object-cover"
              />
            </button>
            <span className="text-sm text-muted-foreground">
              by {trip.organizer.name}
            </span>
            {trip.organizer.verified && (
              <div className="w-4 h-4 bg-primary rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-primary-foreground rounded-full" />
              </div>
            )}
          </div>
          <div className="text-right">
            <span className="text-lg font-bold text-primary">₹{trip.price}</span>
            <div className="text-xs text-muted-foreground">per person</div>
          </div>
        </div>

        {/* Expanded content */}
        {isExpanded && (
          <div className="animate-fade-in border-t border-border pt-4 mb-4">
            <h4 className="font-medium mb-2">Group Members:</h4>
            <div className="grid grid-cols-2 gap-2">
              {trip.members.map((member, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedMember(member)}
                  className="flex items-center gap-2 text-sm p-2 hover:bg-accent rounded-lg transition-colors cursor-pointer"
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="truncate">{member.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex-1"
          >
            {isExpanded ? "Show Less" : "View Group"}
          </Button>
          <Button 
            variant="hero" 
            size="sm" 
            className="flex-1"
            onClick={() => setShowJoinModal(true)}
          >
            Join Trip
          </Button>
        </div>
      </div>
      
      <JoinTripModal 
        isOpen={showJoinModal}
        onClose={() => setShowJoinModal(false)}
        tripTitle={trip.title}
        tripPrice={trip.price}
        tripLocation={trip.location}
      />
      
      {selectedMember && (
        <UserProfileModal
          isOpen={!!selectedMember}
          onClose={() => setSelectedMember(null)}
          user={selectedMember}
        />
      )}
    </div>
  );
}