import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Trophy } from "lucide-react";

const EventsPreview = () => {
  const upcomingEvents = [
    {
      title: "African Chess Junior Championship 2025",
      date: "September 17-23, 2025",
      time: "All Day",
      location: "Cape Town Convention Centre",
      description: "International junior chess championship featuring the best young players from across Africa.",
      type: "International Tournament",
      featured: true
    },
    {
      title: "Cape Town Chess Federation Club League 2025 - Rounds 9 & 10",
      date: "September 20, 2025", 
      time: "9:00 AM - 6:00 PM",
      location: "Various Venues",
      description: "League matches determining championship standings.",
      type: "League Match"
    },
    {
      title: "Cape Town Chess Federation Club League 2025 - Round 11",
      date: "September 27, 2025",
      time: "9:00 AM - 6:00 PM", 
      location: "Parow Library",
      description: "Critical league round as we defend our championship title.",
      type: "League Match"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Upcoming <span className="text-accent">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us for tournaments, training sessions, and competitive matches
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {upcomingEvents.slice(0, 3).map((event, index) => (
            <div key={index} className={`championship-card h-full ${event.featured ? 'border-accent bg-accent/5' : ''}`}>
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  {event.featured && (
                    <div className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-3">
                      Featured Event
                    </div>
                  )}
                  
                  <h3 className="font-playfair text-lg font-bold mb-3 line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-accent" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-accent" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-accent" />
                      {event.location}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {event.description}
                </p>

                <div className="mt-auto">
                  <div className="inline-block px-2 py-1 bg-muted rounded text-xs font-medium mb-3">
                    {event.type}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/events">
            <Button className="btn-hero-gold text-lg px-8 py-3">
              <Trophy className="h-5 w-5 mr-2" />
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsPreview;