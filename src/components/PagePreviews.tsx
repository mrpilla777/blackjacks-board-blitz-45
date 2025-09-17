import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  Users, 
  Calendar, 
  Brain, 
  Mail, 
  Star, 
  Clock,
  MapPin,
  Target
} from "lucide-react";
import sectionBg from "@/assets/section-bg.jpg";

const PagePreviews = () => {
  const pagesPreviews = [
    {
      id: "about",
      title: "About Blackjacks",
      description: "Discover our legacy of strategic excellence and competitive mastery in Cape Town",
      icon: Trophy,
      link: "/about",
      highlights: ["Championship Winners", "Regional Leaders", "International Players"],
      color: "accent"
    },
    {
      id: "members",
      title: "Our Champions",
      description: "Meet the strategic minds behind our championship success",
      icon: Users,
      link: "/members",
      highlights: ["3 International Players", "8 National Level", "30+ Active Members"],
      color: "gold"
    },
    {
      id: "events",
      title: "Upcoming Events",
      description: "Join us for tournaments, practice sessions, and community gatherings",
      icon: Calendar,
      link: "/events",
      highlights: ["Weekly Training", "League Matches", "Tournaments"],
      color: "gold-muted"
    },
    {
      id: "puzzles",
      title: "Daily Puzzles",
      description: "Challenge yourself with tactical puzzles designed by chess masters",
      icon: Brain,
      link: "/puzzles",
      highlights: ["Tactical Training", "Endgame Studies", "Pattern Recognition"],
      color: "accent"
    },
    {
      id: "contact",
      title: "Get In Touch",
      description: "Ready to join the champions? Have questions? We'd love to hear from you",
      icon: Mail,
      link: "/contact",
      highlights: ["Friday Training", "Saturday Leagues", "Join Today"],
      color: "muted"
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case "accent":
        return "border-accent bg-accent/5 hover:bg-accent/10";
      case "gold":
        return "border-gold bg-gold/5 hover:bg-gold/10";
      case "gold-muted":
        return "border-gold-muted bg-gold-muted/5 hover:bg-gold-muted/10";
      default:
        return "border-muted bg-muted/5 hover:bg-muted/10";
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case "accent":
        return "bg-accent text-accent-foreground";
      case "gold":
        return "bg-gold text-gold-foreground";
      case "gold-muted":
        return "bg-gold-muted text-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-cover bg-center bg-no-repeat relative" 
             style={{ backgroundImage: `url(${sectionBg})` }}>
      <div className="absolute inset-0 bg-chess-black/80"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-chess-white">
            Explore <span className="text-accent">Everything</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover all aspects of our championship chess community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pagesPreviews.map((page) => {
            const PageIcon = page.icon;
            return (
              <div 
                key={page.id}
                className={`championship-card ${getColorClass(page.color)} group hover:scale-105 transition-all duration-300`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getIconColor(page.color)} shadow-lg`}>
                      <PageIcon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-playfair text-xl font-semibold mb-2">
                        {page.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {page.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex-1 mb-4">
                    <div className="space-y-2">
                      {page.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <Star className="h-3 w-3 text-accent" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <Link to={page.link}>
                      <Button 
                        className={page.color === "accent" || page.color === "gold" ? "btn-hero-gold" : "btn-hero"}
                        size="sm"
                        variant="default"
                      >
                        Explore →
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center shadow-gold">
              <Trophy className="h-8 w-8 text-accent-foreground" />
            </div>
            <h3 className="font-playfair text-2xl font-bold text-accent mb-2">Champions</h3>
            <p className="text-gray-300">Cape Town Chess League 2024</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gold rounded-full flex items-center justify-center shadow-gold">
              <Clock className="h-8 w-8 text-gold-foreground" />
            </div>
            <h3 className="font-playfair text-2xl font-bold text-accent mb-2">Weekly</h3>
            <p className="text-gray-300">Training Every Friday</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <Target className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="font-playfair text-2xl font-bold text-accent mb-2">Excellence</h3>
            <p className="text-gray-300">Strategic Mastery</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PagePreviews;