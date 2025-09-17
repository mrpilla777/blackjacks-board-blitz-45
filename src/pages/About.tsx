import { Trophy, Users, Target, Award } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import trophyImage from "@/assets/trophy.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-accent">Blackjacks</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A legacy of strategic excellence and competitive mastery in the heart of Cape Town
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to create the premier chess community in Cape Town, 
                  Blackjacks Chess Club has grown to become the most respected and successful 
                  chess organization in the Western Cape.
                </p>
                <p>
                  Our commitment to excellence extends beyond the board. We foster a community 
                  where strategic thinking, sportsmanship, and competitive spirit converge to 
                  create champions both in chess and in life.
                </p>
                <p>
                  From local tournaments to international competitions, our members consistently 
                  demonstrate the highest level of play, representing not just our club, but 
                  South Africa on the global stage.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={trophyImage}
                alt="Championship Trophy"
                className="rounded-lg shadow-gold max-w-md w-full"
              />
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center mb-12">
              Championship <span className="text-accent">Record</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Trophy,
                  title: "City of Cape Town Chess League 2024",
                  status: "Champions",
                  description: "Defending our title with strategic brilliance and unwavering determination.",
                  highlight: true
                },
                {
                  icon: Award,
                  title: "Best Club in Western Cape",
                  status: "Recognized",
                  description: "Officially acknowledged for our contribution to chess excellence in the region."
                },
                {
                  icon: Users,
                  title: "National Team Representatives",
                  status: "Active",
                  description: "Multiple members currently representing South Africa at international levels."
                },
                {
                  icon: Target,
                  title: "Cape Verde International Event",
                  status: "Competing",
                  description: "Two of our finest players showcasing their skills on the international stage."
                }
              ].map((achievement, index) => (
                <div key={index} className={`championship-card ${achievement.highlight ? 'border-accent bg-accent/5' : ''}`}>
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      achievement.highlight ? 'bg-accent text-accent-foreground' : 'bg-muted'
                    }`}>
                      <achievement.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-playfair text-xl font-semibold mb-2">
                        {achievement.title}
                      </h3>
                      <div className={`text-sm font-semibold mb-2 uppercase tracking-wider ${
                        achievement.highlight ? 'text-accent' : 'text-muted-foreground'
                      }`}>
                        {achievement.status}
                      </div>
                      <p className="text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8">
              Our <span className="text-accent">Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Strategic Excellence",
                  description: "We pursue mastery through continuous learning and strategic thinking."
                },
                {
                  title: "Community Spirit",
                  description: "We support each other's growth and celebrate collective achievements."
                },
                {
                  title: "Competitive Integrity",
                  description: "We compete with honor, respect, and unwavering sportsmanship."
                }
              ].map((value, index) => (
                <div key={index} className="championship-card">
                  <h3 className="font-playfair text-xl font-semibold mb-3 gold-accent">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;