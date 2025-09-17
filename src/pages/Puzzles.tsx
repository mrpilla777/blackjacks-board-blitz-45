import { Brain, Target, Zap, Trophy } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Puzzles = () => {
  const puzzleCategories = [
    {
      title: "Daily Tactical Puzzles",
      description: "Sharpen your tactical vision with carefully curated puzzles updated daily",
      difficulty: "All Levels",
      icon: Target,
      featured: true
    },
    {
      title: "Endgame Mastery",
      description: "Master the art of endgame play with position-specific challenges",
      difficulty: "Intermediate+",
      icon: Trophy
    },
    {
      title: "Lightning Puzzles",
      description: "Quick tactical shots to improve your pattern recognition",
      difficulty: "Beginner+",
      icon: Zap
    },
    {
      title: "Positional Understanding",
      description: "Develop strategic thinking through complex positional puzzles",
      difficulty: "Advanced",
      icon: Brain
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6">
            Sharpen Your Mind With <span className="text-accent">Daily Puzzles</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Challenge yourself with tactical puzzles designed by chess masters
          </p>
        </div>
      </section>

      {/* Puzzle Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {puzzleCategories.map((category, index) => {
              const CategoryIcon = category.icon;
              return (
                <div 
                  key={index}
                  className={`championship-card ${category.featured ? 'border-accent bg-accent/5' : ''} group hover:scale-105 transition-transform`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      category.featured ? 'bg-accent text-accent-foreground' : 'bg-muted'
                    }`}>
                      <CategoryIcon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-playfair text-xl font-semibold mb-2">
                        {category.title}
                      </h3>
                      <div className={`text-sm font-semibold mb-2 uppercase tracking-wider ${
                        category.featured ? 'text-accent' : 'text-muted-foreground'
                      }`}>
                        {category.difficulty}
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {category.description}
                      </p>
                      <Button 
                        className={category.featured ? "btn-hero-gold" : "btn-hero"}
                        size="sm"
                      >
                        Start Solving
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Puzzle Section */}
          <div className="championship-card bg-chess-black text-chess-white">
            <div className="text-center mb-8">
              <h2 className="font-playfair text-3xl font-bold mb-4 text-accent">
                Puzzle of the Day
              </h2>
              <p className="text-gray-300">
                Today's featured tactical puzzle - Can you find the winning move?
              </p>
            </div>

            {/* Lichess TV Embed */}
            <div className="max-w-lg mx-auto mb-8">
              <div className="rounded-lg shadow-gold overflow-hidden">
                <iframe 
                  src="https://lichess.org/tv/frame?theme=brown&bg=dark" 
                  style={{width: "400px", aspectRatio: "10/11"}} 
                  allowTransparency={true} 
                  frameBorder="0"
                  className="mx-auto block"
                  title="Lichess TV - Live Chess Games"
                />
              </div>
              <p className="text-center text-sm text-gray-300 mt-4">
                Watch live games from top players around the world
              </p>
            </div>

            {/* Puzzle Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-accent font-bold text-xl mb-1">Difficulty</div>
                <div className="text-gray-300">★★★☆☆</div>
              </div>
              <div>
                <div className="text-accent font-bold text-xl mb-1">Theme</div>
                <div className="text-gray-300">Tactical Shot</div>
              </div>
              <div>
                <div className="text-accent font-bold text-xl mb-1">Rating</div>
                <div className="text-gray-300">1650</div>
              </div>
            </div>
          </div>

          {/* External Resources */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="championship-card text-center">
              <h3 className="font-playfair text-2xl font-semibold mb-4">
                Lichess Puzzles
              </h3>
              <p className="text-muted-foreground mb-6">
                Access thousands of tactical puzzles on Lichess, with ratings from beginner to master level.
              </p>
              <Button 
                className="btn-hero"
                onClick={() => window.open('https://lichess.org/training', '_blank')}
              >
                Visit Lichess
              </Button>
            </div>

            <div className="championship-card text-center">
              <h3 className="font-playfair text-2xl font-semibold mb-4">
                Chess.com Tactics
              </h3>
              <p className="text-muted-foreground mb-6">
                Solve daily puzzles and track your tactical rating improvement on Chess.com.
              </p>
              <Button 
                className="btn-hero"
                onClick={() => window.open('https://www.chess.com/puzzles', '_blank')}
              >
                Visit Chess.com
              </Button>
            </div>
          </div>

          {/* Weekly Challenge */}
          <div className="mt-16 championship-card bg-accent/5 border-accent text-center">
            <Trophy className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="font-playfair text-2xl font-semibold mb-4">
              Weekly Puzzle Challenge
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Compete with fellow Blackjacks members in our weekly puzzle competition. 
              Solve the most puzzles correctly to earn recognition and prizes!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-sm text-muted-foreground">
                This week's leader: <span className="gold-accent font-semibold">Alexandra Chen</span> - 47 puzzles
              </div>
              <Button className="btn-hero-gold">
                Join This Week's Challenge
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Puzzles;