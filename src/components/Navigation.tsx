import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

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

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors hover:text-accent ${
                    isActive ? "text-accent border-b-2 border-accent" : "text-chess-white"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-chess-black/95 border-t border-accent/20">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-base font-medium transition-colors hover:text-accent ${
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
        )}
      </div>
    </nav>
  );
};

export default Navigation;