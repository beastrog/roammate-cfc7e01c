import { useState } from "react";
import { Search, MapPin, Calendar, Users, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVibe, setSelectedVibe] = useState("");
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const mockResults = [
    "Spiritual Journey to Varanasi",
    "Kerala Backwaters Adventure", 
    "Rajasthan Desert Safari",
    "Himachal Mountain Trek",
    "Goa Beach Retreat"
  ];

  const filteredResults = mockResults.filter(result =>
    result.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/discover?query=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate('/discover');
    }
  };

  const handleResultClick = (result: string) => {
    setSearchQuery(result);
    setShowResults(false);
    navigate(`/discover?query=${encodeURIComponent(result)}`);
  };

  const vibes = [
    { id: "adventure", label: "Adventure", emoji: "🏔️" },
    { id: "culture", label: "Culture", emoji: "🕉️" },
    { id: "spiritual", label: "Spiritual", emoji: "🙏" },
    { id: "foodie", label: "Foodie", emoji: "🍛" },
    { id: "backpacker", label: "Backpacker", emoji: "🎒" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto -mt-32 relative z-30 px-6">
      <div className="bg-card rounded-2xl shadow-cultural border border-border/50 backdrop-blur-sm">
        <div className="p-6">
          {/* Main search */}
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Where do you want to explore?"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowResults(e.target.value.length > 0);
                }}
                onFocus={() => setShowResults(searchQuery.length > 0)}
                onBlur={() => setTimeout(() => setShowResults(false), 200)}
                className="pl-12 h-14 text-lg border-border/50 focus:border-primary"
              />
              
              {/* Search Results Dropdown */}
              {showResults && filteredResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border/50 rounded-lg shadow-cultural z-10">
                  {filteredResults.map((result, index) => (
                    <button
                      key={index}
                      onClick={() => handleResultClick(result)}
                      className="w-full px-4 py-3 text-left hover:bg-accent transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Search className="w-4 h-4 text-muted-foreground" />
                        <span>{result}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
              
              {showResults && searchQuery && filteredResults.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border/50 rounded-lg shadow-cultural z-10 p-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Search className="w-4 h-4" />
                    <span>No results found</span>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex gap-2">
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Dates"
                  className="pl-12 h-14 w-40 border-border/50 focus:border-primary"
                />
              </div>
              
              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Group size"
                  className="pl-12 h-14 w-40 border-border/50 focus:border-primary"
                />
              </div>
              
              <Button 
                variant="hero" 
                size="lg" 
                className="h-14 px-8"
                onClick={handleSearch}
              >
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>
          </div>

          {/* Vibe filters */}
          <div className="flex flex-wrap gap-3">
            <span className="text-muted-foreground font-medium flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Choose your vibe:
            </span>
            {vibes.map((vibe) => (
              <button
                key={vibe.id}
                onClick={() => setSelectedVibe(vibe.id)}
                className={`px-4 py-2 rounded-lg border transition-all ${
                  selectedVibe === vibe.id
                    ? "bg-primary text-primary-foreground border-primary shadow-warm"
                    : "bg-background border-border hover:border-primary/50 hover:bg-accent"
                }`}
              >
                <span className="mr-2">{vibe.emoji}</span>
                {vibe.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}