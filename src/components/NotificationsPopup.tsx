import { Bell, X, Users, MapPin, Calendar, Heart } from "lucide-react";

interface NotificationsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const notifications = [
  {
    id: "1",
    type: "trip_join",
    title: "New member joined your trip!",
    message: "Ravi Kumar joined 'Spiritual Journey to Varanasi'",
    time: "2 hours ago",
    icon: Users,
    read: false
  },
  {
    id: "2",
    type: "trip_like",
    title: "Someone liked your trip",
    message: "Your 'Desert Safari Adventure' received a new like",
    time: "5 hours ago",
    icon: Heart,
    read: false
  },
  {
    id: "3",
    type: "trip_reminder",
    title: "Trip starting soon!",
    message: "Your 'Backwaters & Spice Gardens' trip starts in 3 days",
    time: "1 day ago",
    icon: Calendar,
    read: true
  },
  {
    id: "4",
    type: "new_trip",
    title: "New trip in your area",
    message: "Check out 'Goa Beach Hopping' near you",
    time: "2 days ago",
    icon: MapPin,
    read: true
  }
];

export default function NotificationsPopup({ isOpen, onClose }: NotificationsPopupProps) {
  if (!isOpen) return null;

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="absolute top-12 right-0 w-80 bg-card rounded-xl shadow-cultural border border-border/50 z-50 animate-scale-in">
      <div className="p-4 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Notifications</h3>
          {unreadCount > 0 && (
            <span className="bg-primary text-primary-foreground text-xs rounded-full px-2 py-0.5">
              {unreadCount}
            </span>
          )}
        </div>
        <button 
          onClick={onClose}
          className="p-1 hover:bg-accent rounded-full transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      <div className="max-h-80 overflow-y-auto">
        {notifications.length > 0 ? (
          <div className="p-2">
            {notifications.map((notification) => {
              const IconComponent = notification.icon;
              return (
                <div 
                  key={notification.id} 
                  className={`flex items-start gap-3 p-3 hover:bg-accent rounded-lg transition-colors cursor-pointer ${
                    !notification.read ? 'bg-primary/5' : ''
                  }`}
                >
                  <div className={`p-2 rounded-full ${
                    !notification.read ? 'bg-primary/10' : 'bg-muted'
                  }`}>
                    <IconComponent className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm">{notification.title}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">{notification.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                  </div>
                  {!notification.read && (
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-6 text-center">
            <Bell className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
            <p className="text-muted-foreground text-sm">No notifications yet</p>
            <p className="text-xs text-muted-foreground">We'll notify you when something happens!</p>
          </div>
        )}
      </div>
      
      {notifications.length > 0 && (
        <div className="p-3 border-t border-border/50">
          <button className="text-center w-full text-xs text-primary hover:underline">
            Mark all as read
          </button>
        </div>
      )}
    </div>
  );
}