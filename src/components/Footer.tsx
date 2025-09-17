import { Mail, Facebook, Instagram, Twitter, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-chess-black text-chess-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Club Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Trophy className="h-8 w-8 text-accent" />
              <span className="font-playfair font-bold text-xl">Blackjacks Chess Club</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Where strategy meets community. Defending champions of the Cape Town Chess League 2024.
            </p>
            <div className="gold-accent text-sm font-semibold">
              🏆 Best Club in Western Cape
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold text-accent">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Events", path: "/events" },
                { name: "Members", path: "/members" },
                { name: "Puzzles", path: "/puzzles" },
                { name: "Contact", path: "/contact" }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg font-semibold text-accent">Connect With Us</h3>
            <div className="space-y-3">
              <a 
                href="mailto:info@blackjackschess.club"
                className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>info@blackjackschess.club</span>
              </a>
              
              <div className="flex space-x-4 pt-2">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Twitter, href: "#", label: "Twitter" }
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-gray-300 hover:text-accent transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Blackjacks Chess Club. All rights reserved. | Champions never rest.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;