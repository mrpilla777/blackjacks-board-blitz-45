import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import chessHero from "@/assets/chess-hero.jpg";

const HeroSection = () => {
  const quotes = [
    { text: "Chess is life.", author: "Bobby Fischer" },
    { text: "Chess is the gymnasium of the mind.", author: "Blaise Pascal" },
    { text: "It's always better to sacrifice your opponent's pieces.", author: "Igor Smirnov" },
    { text: "An isolated Pawn spreads gloom all over the chessboard.", author: "Savielly Tartakower" },
    { text: "Tactics is what you do when there is something to do; strategy is what you do when there is nothing to do.", author: "Savielly Tartakower" },
    { text: "The beauty of the move lies not in its appearance but in the thought behind it.", author: "Aaron Nimzowitsch" },
    { text: "The ability to play chess is the sign of a gentleman. The ability to play chess well is the sign of a wasted life.", author: "Paul Morphy" }
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${chessHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          Blackjacks Chess Academy
        </h1>
        <div className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto min-h-[3rem] flex flex-col justify-center">
          <p className="transition-opacity duration-500 italic">
            "{quotes[currentQuote].text}"
          </p>
          <p className="text-lg mt-2 text-accent font-medium">
            — {quotes[currentQuote].author}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/events">
            <Button className="btn-hero text-lg px-8 py-3">
              Upcoming Events
            </Button>
          </Link>
          <Link to="/members">
            <Button className="btn-hero-gold text-lg px-8 py-3">
              Meet Our Members
            </Button>
          </Link>
        </div>
        
        {/* Championship Badge */}
        <div className="mt-12 inline-flex items-center px-6 py-3 bg-accent/20 border border-accent rounded-lg backdrop-blur-sm">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            🏆 Defending Champions - Cape Town Chess League 2024
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;