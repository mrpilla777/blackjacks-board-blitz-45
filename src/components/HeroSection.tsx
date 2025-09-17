import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import chessHero from "@/assets/chess-hero.jpg";

const HeroSection = () => {
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
          Blackjacks Chess Club
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Where strategy meets community
        </p>
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