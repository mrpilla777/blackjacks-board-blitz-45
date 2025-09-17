import { Trophy, Medal, Star, Users } from "lucide-react";
import trophyImage from "@/assets/trophy.jpg";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "City Champions",
      description: "Winners of the City of Cape Town Chess League 2024",
      highlight: "Defending Champions",
      image: trophyImage
    },
    {
      icon: Star,
      title: "Regional Excellence",
      description: "Recognized as the best chess club in the Western Cape",
      highlight: "Regional Leaders"
    },
    {
      icon: Users,
      title: "National Representation",
      description: "Several members representing South Africa's national team",
      highlight: "International Players"
    },
    {
      icon: Medal,
      title: "International Competition",
      description: "2 players competing at the Cape Verde event",
      highlight: "Global Presence"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Championship <span className="text-accent">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our legacy of strategic mastery and competitive success speaks for itself
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="championship-card group">
              <div className="flex flex-col items-center text-center">
                {achievement.image ? (
                  <div className="w-20 h-20 mb-4 rounded-full overflow-hidden border-2 border-accent shadow-gold">
                    <img 
                      src={achievement.image} 
                      alt={achievement.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 mb-4 bg-accent rounded-full flex items-center justify-center shadow-gold">
                    <achievement.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                )}
                
                <h3 className="font-playfair text-xl font-semibold mb-2">
                  {achievement.title}
                </h3>
                
                <div className="gold-accent text-sm font-semibold mb-2 uppercase tracking-wider">
                  {achievement.highlight}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;