import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "News", path: "/news" },
    { name: "Events", path: "/events" },
    { name: "Members", path: "/members" },
    { name: "Puzzles", path: "/puzzles" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-chess-black/95 backdrop-blur-sm text-chess-white fixed w-full z-50 shadow-elegant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex items-center space-x-2 group">
            <Trophy className="h-8 w-8 text-accent transition-transform group-hover:scale-110" />
            <span className="font-playfair font-bold text-xl">Blackjacks Chess Club</span>
          </NavLink>

          {/* Hamburger menu button - now for all devices */}
          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-chess-white hover:text-accent"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Navigation Menu - now available for all devices */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-cover bg-center bg-no-repeat" 
               style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="bg-chess-black/95 backdrop-blur-sm min-h-screen">
              <div className="px-6 pt-8 pb-6 space-y-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-6 py-4 text-2xl font-medium transition-colors hover:text-accent border-b border-accent/20 ${
                        isActive ? "text-accent bg-accent/10" : "text-chess-white"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;