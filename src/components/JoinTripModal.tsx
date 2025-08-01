import { useState } from "react";
import { X, Calendar, Users, CreditCard, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface JoinTripModalProps {
  isOpen: boolean;
  onClose: () => void;
  tripTitle: string;
  tripPrice: number;
  tripLocation: string;
}

export default function JoinTripModal({ 
  isOpen, 
  onClose, 
  tripTitle, 
  tripPrice, 
  tripLocation 
}: JoinTripModalProps) {
  const [selectedDate, setSelectedDate] = useState("");
  const [groupSize, setGroupSize] = useState(1);

  if (!isOpen) return null;

  const handleConfirm = () => {
    // Demo confirmation logic
    console.log("Trip joined:", { tripTitle, selectedDate, groupSize });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-heritage/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-card rounded-2xl shadow-cultural border border-border/50 w-full max-w-lg mx-4 animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <h2 className="text-2xl font-bold text-foreground">Join Trip</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Trip Info */}
          <div className="bg-gradient-warm rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-heritage-foreground mb-1">{tripTitle}</h3>
            <p className="text-heritage-foreground/80 text-sm mb-2">{tripLocation}</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-heritage-foreground">₹{tripPrice}</span>
              <span className="text-heritage-foreground/80 text-sm">per person</span>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-4 mb-6">
            {/* Date Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Preferred Start Date
              </label>
              <Input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="h-12"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Group Size */}
            <div>
              <label className="block text-sm font-medium mb-2">
                <Users className="w-4 h-4 inline mr-2" />
                Number of Travelers
              </label>
              <select
                value={groupSize}
                onChange={(e) => setGroupSize(Number(e.target.value))}
                className="w-full h-12 px-3 border border-border rounded-md bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'person' : 'people'}
                  </option>
                ))}
              </select>
            </div>

            {/* Total Calculation */}
            <div className="bg-accent/50 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span>Trip cost ({groupSize} {groupSize === 1 ? 'person' : 'people'})</span>
                <span>₹{tripPrice * groupSize}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Platform fee</span>
                <span>₹0</span>
              </div>
              <hr className="my-2 border-border" />
              <div className="flex justify-between items-center font-bold text-lg">
                <span>Total</span>
                <span className="text-primary">₹{tripPrice * groupSize}</span>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-medium text-primary mb-1">What's included?</h4>
                <ul className="text-sm text-primary/80 space-y-1">
                  <li>• Accommodation for the entire duration</li>
                  <li>• Local transportation and activities</li>
                  <li>• Experienced guide and support</li>
                  <li>• Group meals and cultural experiences</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              <CreditCard className="w-4 h-4 inline mr-2" />
              Payment Method
            </label>
            <div className="border border-border rounded-lg p-3 bg-muted/50">
              <p className="text-sm text-muted-foreground">
                💳 Demo Mode - No actual payment required
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="flex-1 h-12"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button 
              variant="hero" 
              className="flex-1 h-12"
              onClick={handleConfirm}
              disabled={!selectedDate}
            >
              Confirm Booking
            </Button>
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-muted-foreground mt-4">
            By confirming, you agree to our terms and conditions
          </p>
        </div>
      </div>
    </div>
  );
}