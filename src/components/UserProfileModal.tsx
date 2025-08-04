import { X, MapPin, Calendar, Star, Shield, Camera, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: {
    name: string;
    avatar: string;
    bio?: string;
    age?: number;
    location?: string;
    joinedDate?: string;
    tripsCompleted?: number;
    rating?: number;
    interests?: string[];
    languages?: string[];
    verified?: boolean;
  };
}

export default function UserProfileModal({ isOpen, onClose, user }: UserProfileModalProps) {
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
          <div className="h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-2xl" />
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
              src={user.avatar}
              alt={user.name}
              className="w-24 h-24 rounded-full border-4 border-card object-cover shadow-warm"
            />
          </div>
        </div>

        {/* Content */}
        <div className="pt-16 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-foreground">{user.name}</h2>
                {user.verified && (
                  <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <Shield className="w-3 h-3 text-primary-foreground" />
                  </div>
                )}
              </div>
              {user.age && user.location && (
                <p className="text-muted-foreground text-sm">{user.age} • {user.location}</p>
              )}
            </div>
            <div className="text-right">
              {user.rating && (
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium text-sm">{user.rating}</span>
                </div>
              )}
            </div>
          </div>

          {user.bio && (
            <div className="mb-6">
              <p className="text-muted-foreground text-sm leading-relaxed">{user.bio}</p>
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-3 bg-accent/50 rounded-lg">
              <Users className="w-5 h-5 mx-auto mb-1 text-primary" />
              <div className="text-lg font-bold">{user.tripsCompleted || 0}</div>
              <div className="text-xs text-muted-foreground">Trips</div>
            </div>
            <div className="text-center p-3 bg-accent/50 rounded-lg">
              <Heart className="w-5 h-5 mx-auto mb-1 text-primary" />
              <div className="text-lg font-bold">{Math.floor(Math.random() * 50) + 10}</div>
              <div className="text-xs text-muted-foreground">Likes</div>
            </div>
            <div className="text-center p-3 bg-accent/50 rounded-lg">
              <Camera className="w-5 h-5 mx-auto mb-1 text-primary" />
              <div className="text-lg font-bold">{Math.floor(Math.random() * 100) + 20}</div>
              <div className="text-xs text-muted-foreground">Photos</div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-3 mb-6">
            {user.joinedDate && (
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Joined {user.joinedDate}</span>
              </div>
            )}
            {user.location && (
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">{user.location}</span>
              </div>
            )}
          </div>

          {/* Interests */}
          {user.interests && user.interests.length > 0 && (
            <div className="mb-6">
              <h4 className="font-medium mb-2 text-sm">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {user.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {user.languages && user.languages.length > 0 && (
            <div className="mb-6">
              <h4 className="font-medium mb-2 text-sm">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {user.languages.map((language, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded-full"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          )}

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