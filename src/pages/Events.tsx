import { Calendar, Clock, MapPin, Trophy, Users, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import sectionBg from "@/assets/section-bg.jpg";

const Events = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const upcomingEvents = [
    {
      title: "Weekly Training Session",
      date: "Every Friday",
      time: "14:00 - 16:00",
      location: "Parow Library",
      type: "Training",
      description: "Structured training sessions for all skill levels. Tactical training, endgame studies, and opening theory.",
      recurring: true
    },
    {
      title: "Cape Town Chess Federation Club League 2025 - Rounds 9 & 10",
      date: "September 20, 2025",
      time: "09:00 - 17:00",
      location: "Various Venues",
      type: "Club League Games",
      description: "Classical format: 90 minutes per side + 30 second increment. Defending our championship title.",
      featured: true
    },
    {
      title: "Cape Town Chess Federation Club League 2025 - Round 11",
      date: "September 27, 2025",
      time: "09:00 - 17:00",
      location: "Various Venues",
      type: "Club League Games",
      description: "Classical format: 90 minutes per side + 30 second increment. Crucial round for championship.",
      featured: true
    },
    {
      title: "African Chess Junior Championship 2025",
      date: "September 17-23, 2025",
      time: "09:00 - 18:00",
      location: "TBA",
      type: "Tournaments",
      description: "Continental championship featuring our qualified junior players. Representing Western Cape with pride.",
      featured: true
    },
    {
      title: "The Parow Civic Chess Tournament",
      date: "October 9, 2025",
      time: "09:00 - 17:00",
      location: "Parow Civic Centre",
      type: "Tournaments",
      description: "An annual tournament where all the libraries clash together in a battle to come out on top. Blackjacks will be representing Parow Library.",
      featured: true
    },
    {
      title: "Parow Library Tournament",
      date: "July 11, 2026",
      time: "09:00 - 17:00",
      location: "Parow Library",
      type: "Tournaments",
      description: "A yearly tournament where the top 10 players qualify to represent Parow Library at the Parow Civic Tournament."
    }
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case "Tournaments":
        return Trophy;
      case "Training":
        return Users;
      case "Club League Games":
        return Calendar;
      default:
        return Calendar;
    }
  };

  const getEventColor = (type: string, featured?: boolean) => {
    if (featured) return "border-accent bg-accent/5";
    switch (type) {
      case "Tournaments":
        return "border-gold-muted bg-gold/5";
      case "Club League Games":
        return "border-gold bg-gold/10";
      case "Training":
        return "border-muted bg-muted/5";
      default:
        return "border-border";
    }
  };

  const filteredEvents = selectedFilter === "All" 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.type === selectedFilter);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-cover bg-center bg-no-repeat relative" 
               style={{ backgroundImage: `url(${sectionBg})` }}>
        <div className="absolute inset-0 bg-chess-black/70"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-chess-white">
            Upcoming <span className="text-accent">Events</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Join us for tournaments, practice sessions, and community gatherings
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["All", "Training", "Club League Games", "Tournaments"].map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter)}
                className={selectedFilter === filter ? "btn-hero-gold" : ""}
              >
                <Filter className="h-4 w-4 mr-2" />
                {filter}
              </Button>
            ))}
          </div>

          <div className="space-y-6">
            {filteredEvents.map((event, index) => {
              const EventIcon = getEventIcon(event.type);
              return (
                <div 
                  key={index} 
                  className={`championship-card ${getEventColor(event.type, event.featured)} p-6`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          event.featured ? 'bg-accent text-accent-foreground' : 
                          event.type === 'Tournament' || event.type === 'Championship' ? 'bg-gold text-gold-foreground' :
                          'bg-muted'
                        }`}>
                          <EventIcon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-playfair text-xl md:text-2xl font-semibold mb-2">
                            {event.title}
                          </h3>
                          {event.featured && (
                            <div className="gold-accent text-sm font-semibold mb-2 uppercase tracking-wider">
                              ⭐ Featured Event
                            </div>
                          )}
                          <p className="text-muted-foreground mb-4">
                            {event.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-accent" />
                          <span className="font-medium">{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-accent" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-accent" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <Button 
                        className={event.featured ? "btn-hero-gold" : "btn-hero"}
                        size="sm"
                      >
                        {event.type === 'Workshop' ? 'Register' : 'Learn More'}
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact for Events */}
          <div className="mt-16 text-center championship-card bg-muted/50">
            <h3 className="font-playfair text-2xl font-semibold mb-4">
              Want to Host an Event?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Interested in organizing a tournament, workshop, or special event? 
              We'd love to hear your ideas and help make it happen.
            </p>
            <Button className="btn-hero-gold">
              Contact Event Coordinator
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;