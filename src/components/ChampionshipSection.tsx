import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trophy, Crown, Star } from "lucide-react";
import sectionBg from "@/assets/section-bg.jpg";

const ChampionshipSection = () => {
  return (
    <section className="py-20 bg-cover bg-center bg-no-repeat relative" 
             style={{ backgroundImage: `url(${sectionBg})` }}>
      <div className="absolute inset-0 bg-chess-black/80"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-6 shadow-elegant">
            <Crown className="h-10 w-10 text-accent-foreground" />
          </div>
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-chess-white">
            Championship <span className="text-accent">Excellence</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover the legacy of strategic mastery that has established Blackjacks as Cape Town's 
            premier chess academy. From local tournaments to international representation, our 
            commitment to excellence drives every aspect of our training.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="championship-card border-accent bg-accent/5">
              <div className="text-center">
                <Trophy className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-playfair text-2xl font-bold text-accent mb-2">Champions</h3>
                <p className="text-gray-300">Cape Town Chess League 2024 Winners</p>
              </div>
            </div>
            
            <div className="championship-card border-gold bg-gold/5">
              <div className="text-center">
                <Star className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="font-playfair text-2xl font-bold text-gold mb-2">Excellence</h3>
                <p className="text-gray-300">25+ Years of Chess Mastery</p>
              </div>
            </div>
            
            <div className="championship-card">
              <div className="text-center">
                <Crown className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-playfair text-2xl font-bold text-accent mb-2">Legacy</h3>
                <p className="text-gray-300">Training Future Masters</p>
              </div>
            </div>
          </div>
          
          <Link to="/about">
            <Button className="btn-hero-gold text-lg px-8 py-3">
              Discover Our Story
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChampionshipSection;