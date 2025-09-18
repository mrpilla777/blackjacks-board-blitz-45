import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Crown, Star, Globe } from "lucide-react";

const CoachesPreview = () => {
  const leadership = [
    {
      name: "Lewellyn Louw",
      role: "President & Head Coach",
      level: "Expert",
      image: "/placeholder.svg",
      international: true
    },
    {
      name: "Lezerick Cunningham",
      role: "Chairperson",
      level: "Expert", 
      image: "/placeholder.svg",
      national: true
    },
    {
      name: "Willmore Pieterson",
      role: "Vice President",
      level: "Expert",
      image: "/placeholder.svg",
      national: true
    }
  ];

  const getMemberBadge = (member: any) => {
    if (member.international) {
      return {
        icon: Globe,
        color: "bg-accent text-accent-foreground border-accent"
      };
    }
    if (member.national) {
      return {
        icon: Star,
        color: "bg-gold text-gold-foreground border-gold"
      };
    }
    return {
      icon: Crown,
      color: "bg-muted text-muted-foreground border-muted"
    };
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-accent">Leaders & Coaches</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert guidance from accomplished players and certified instructors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {leadership.map((member, index) => {
            const badge = getMemberBadge(member);
            const BadgeIcon = badge.icon;
            
            return (
              <div key={index} className="championship-card group bg-accent/5 border-accent">
                <div className="text-center">
                  <div className="relative mb-4">
                    <div className="w-32 h-32 mx-auto rounded-full bg-muted border-2 border-accent overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className={`absolute -top-2 -right-2 w-10 h-10 rounded-full border-2 ${badge.color} flex items-center justify-center shadow-lg`}>
                      <BadgeIcon className="h-5 w-5" />
                    </div>
                    
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <Crown className="h-8 w-8 text-accent" />
                    </div>
                  </div>

                  <h3 className="font-playfair text-xl font-semibold mb-2">
                    {member.name}
                  </h3>
                  
                  <p className="text-lg gold-accent font-medium mb-2">
                    {member.role}
                  </p>
                  
                  <div className="text-sm text-muted-foreground mb-3 font-medium uppercase tracking-wider">
                    {member.level}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/members">
            <Button className="btn-hero text-lg px-8 py-3">
              <Users className="h-5 w-5 mr-2" />
              Meet All Our Members
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoachesPreview;