import { Trophy, Star, Users, BookOpen, Target, Crown, Award, GraduationCap } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import sectionBg from "@/assets/section-bg.jpg";

const Academy = () => {
  const leaders = [
    {
      name: "Llewelyn Louw",
      title: "Founder of the Academy",
      credentials: "President of Cape Town Chess Federation, FIDE-Certified Tournament Organiser, National Arbiter",
      specializations: ["Academy Leadership", "Tournament Organization", "Strategic Development"],
      achievements: ["Founded Blackjacks Chess Academy", "President of Cape Town Chess Federation", "FIDE-Certified Tournament Organiser", "National Arbiter"],
      image: "/blackjacks-logo.png",
      isFounder: true
    }
  ];

  const coaches = [
    {
      name: "Charlton Mnyasta",
      title: "Elite Performance Coach",
      credentials: "FIDE Rated Player (2172), National Representative",
      specializations: ["Elite Training", "International Competition Preparation", "Advanced Strategy"],
      achievements: ["Chess Olympiad Team Member (2024, Hungary)", "Represented SA at World Junior Championship (India)", "Represented SA at African Junior Championship (Egypt)", "Top 4 in South African Closed Championships"],
      image: "/blackjacks-logo.png",
      rating: 2172
    },
    {
      name: "Jiraan Braaf", 
      title: "Youth Development Coach",
      credentials: "Regional Champion, Youth Specialist",
      specializations: ["Youth Development", "School Chess Programs", "Regional Competitions"],
      achievements: ["Regional Champion", "Multiple top finishes in Western Cape events", "Experienced in coaching school teams", "Youth talent development specialist"],
      image: "/blackjacks-logo.png"
    },
    {
      name: "Tezihano Mnyasta",
      title: "Junior Champion Coach",
      credentials: "Junior Champion, Tactical Specialist",
      specializations: ["Junior Training", "Tactical Analysis", "Competition Psychology"],
      achievements: ["Junior Champion", "SAJCC Representative for his district", "Tactical training specialist", "Youth competition expert"],
      image: "/blackjacks-logo.png"
    },
    {
      name: "Wilmore Pietersen",
      title: "Youth Mentor & Coach",
      credentials: "Experienced Coach, Community Outreach Specialist",
      specializations: ["Youth Mentoring", "Grassroots Development", "Community Programs"],
      achievements: ["Experienced coaching background", "Strong grassroots chess outreach", "Youth mentor and guide", "Community development focus"],
      image: "/blackjacks-logo.png"
    },
    {
      name: "Cherwin Kleinsmidt",
      title: "Senior Strategic Coach",
      credentials: "Senior Player, Positional Expert",
      specializations: ["Positional Play", "Strategic Planning", "Advanced Technique"],
      achievements: ["Positional Play Expert", "Top performer in Western Cape Club events", "League tournament specialist", "Strategic development coach"],
      image: "/blackjacks-logo.png"
    }
  ];

  const programs = [
    {
      title: "Junior Champions Program",
      level: "Beginner to Intermediate",
      description: "Comprehensive chess education for young minds aged 6-16, focusing on fundamentals, tactics, and tournament play.",
      duration: "12 weeks per module",
      features: ["Individual skill assessment", "Age-appropriate curriculum", "Tournament preparation", "Progress tracking"],
      outcomes: "95% of students improve rating by 200+ points"
    },
    {
      title: "Competitive Excellence Track",
      level: "Intermediate to Advanced", 
      description: "Intensive training for serious players seeking to compete at regional and national levels.",
      duration: "Ongoing with quarterly assessments",
      features: ["Master-level instruction", "Opening repertoire development", "Endgame mastery", "Psychological preparation"],
      outcomes: "Students regularly achieve master-level ratings"
    },
    {
      title: "Adult Learning Program",
      level: "All Levels",
      description: "Flexible programs designed for working professionals and adult learners wanting to master chess.",
      duration: "8-week intensive modules",
      features: ["Evening and weekend sessions", "Personalized learning pace", "Business professional networking", "Strategic thinking skills"],
      outcomes: "Enhanced analytical and decision-making abilities"
    }
  ];

  const achievements = [
    { number: "150+", label: "Students Trained", icon: Users },
    { number: "25+", label: "Years Excellence", icon: Trophy },
    { number: "12", label: "National Representatives", icon: Star },
    { number: "95%", label: "Success Rate", icon: Target }
  ];

  const testimonials = [
    {
      text: "The academy transformed my child's analytical thinking. Within 6 months, they went from beginner to winning local tournaments.",
      author: "Sarah Johnson",
      role: "Parent of Junior Champion"
    },
    {
      text: "Professional coaching that produces real results. The systematic approach to chess education is unmatched in Cape Town.",
      author: "David Miller", 
      role: "Adult Student, now Club Level Player"
    },
    {
      text: "From our academy to national representation - the coaching here is world-class.",
      author: "Former Student",
      role: "Now representing Western Cape"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-cover bg-center bg-no-repeat relative" 
               style={{ backgroundImage: `url(${sectionBg})` }}>
        <div className="absolute inset-0 bg-chess-black/70"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 text-chess-white">
            Our Renowned <span className="text-accent">Chess Academy</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Excellence in chess education - Training champions for over two decades
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero-gold text-lg px-8 py-3">
              Enroll Today
            </Button>
            <Button className="btn-hero text-lg px-8 py-3">
              Schedule Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <div key={index} className="text-center championship-card">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center shadow-elegant">
                    <StatIcon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="font-playfair text-3xl font-bold text-accent mb-2">{stat.number}</h3>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academy Leadership */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Academy <span className="text-accent">Leadership</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Founding visionaries driving chess excellence in Cape Town
            </p>
          </div>

          <div className="grid grid-cols-1 max-w-md mx-auto mb-20">
            {leaders.map((leader, index) => (
              <div key={index} className="championship-card group bg-accent/5 border-accent">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-40 h-40 mx-auto rounded-full bg-muted border-4 border-accent overflow-hidden">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Crown className="h-10 w-10 text-accent" />
                    </div>
                  </div>

                  <h3 className="font-playfair text-2xl font-bold mb-2">{leader.name}</h3>
                  <p className="text-accent font-bold text-lg mb-3">{leader.title}</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{leader.credentials}</p>
                  
                  <div className="text-left space-y-2 mb-4">
                    <h4 className="font-semibold text-sm">Leadership Focus:</h4>
                    {leader.specializations.map((spec, idx) => (
                      <div key={idx} className="text-xs text-muted-foreground flex items-center">
                        <Star className="h-3 w-3 text-accent mr-2" />
                        {spec}
                      </div>
                    ))}
                  </div>

                  <div className="text-left space-y-1">
                    <h4 className="font-semibold text-sm">Key Achievements:</h4>
                    {leader.achievements.map((achievement, idx) => (
                      <div key={idx} className="text-xs text-muted-foreground">
                        • {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Expert <span className="text-accent">Coaching Staff</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn from accomplished players and certified instructors with proven track records
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <div key={index} className="championship-card group bg-accent/5 border-accent">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full bg-muted border-2 border-accent overflow-hidden">
                      <img
                        src={coach.image}
                        alt={coach.name}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    {coach.rating && (
                      <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full border-2 border-background">
                        {coach.rating}
                      </div>
                    )}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Crown className="h-8 w-8 text-accent" />
                    </div>
                  </div>

                  <h3 className="font-playfair text-xl font-bold mb-2">{coach.name}</h3>
                  <p className="text-accent font-semibold mb-2">{coach.title}</p>
                  <p className="text-sm text-muted-foreground mb-4">{coach.credentials}</p>
                  
                  <div className="text-left space-y-2 mb-4">
                    <h4 className="font-semibold text-sm">Specializations:</h4>
                    {coach.specializations.map((spec, idx) => (
                      <div key={idx} className="text-xs text-muted-foreground flex items-center">
                        <Star className="h-3 w-3 text-accent mr-2" />
                        {spec}
                      </div>
                    ))}
                  </div>

                  <div className="text-left space-y-1">
                    <h4 className="font-semibold text-sm">Key Achievements:</h4>
                    {coach.achievements.slice(0, 3).map((achievement, idx) => (
                      <div key={idx} className="text-xs text-muted-foreground">
                        • {achievement}
                      </div>
                    ))}
                    {coach.achievements.length > 3 && (
                      <div className="text-xs text-accent">
                        +{coach.achievements.length - 3} more achievements
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Proven Training <span className="text-accent">Programs</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Structured curricula designed to accelerate chess mastery at every level
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="championship-card h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-playfair text-xl font-bold">{program.title}</h3>
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-3">
                      {program.level}
                    </div>
                    <p className="text-muted-foreground mb-4">{program.description}</p>
                    <p className="text-sm font-medium text-accent mb-4">Duration: {program.duration}</p>
                  </div>
                  
                  <div className="flex-1 mb-4">
                    <h4 className="font-semibold text-sm mb-2">Program Features:</h4>
                    <div className="space-y-1">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="text-sm text-muted-foreground flex items-center">
                          <BookOpen className="h-3 w-3 text-accent mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="p-3 bg-accent/5 rounded-lg mb-4">
                      <p className="text-sm font-medium text-accent">Success Rate: {program.outcomes}</p>
                    </div>
                    <Button className="btn-hero w-full">Learn More</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Success <span className="text-accent">Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from our graduates and their families
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="championship-card">
                <div className="text-center">
                  <div className="mb-4">
                    <GraduationCap className="h-8 w-8 text-accent mx-auto mb-3" />
                    <p className="text-muted-foreground italic mb-4">
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-accent">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="championship-card bg-gradient-to-r from-accent/10 to-gold/10 border-accent">
            <h2 className="font-playfair text-3xl font-bold mb-4">
              Ready to Begin Your Chess Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our proven academy and take your chess to the next level. Individual assessments 
              available to create your personalized learning path.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero-gold text-lg px-8 py-3">
                Schedule Free Assessment
              </Button>
              <Button className="btn-hero text-lg px-8 py-3">
                View Program Details
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Academy;