import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-conditions" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <div
              className={`flex items-center justify-center h-10 w-10 rounded-lg ${
                scrolled
                  ? "bg-primary text-white"
                  : "bg-white/20 backdrop-blur-sm text-white"
              } transition-all duration-500`}
            >
              <Home className="h-6 w-6" />
            </div>
            <span
              className={`ml-2 text-2xl font-bold ${
                scrolled ? "text-primary" : "text-white"
              } transition-colors duration-500`}
            >
              IOIO
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? scrolled
                    ? "text-white bg-primary"
                    : "text-primary bg-white/90"
                  : scrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <motion.a
            href="#download"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`ml-2 px-5 py-2 rounded-full font-medium flex items-center ${
              scrolled ? "bg-primary text-white" : "bg-white text-primary"
            } transition-all duration-300`}
          >
            Download App
            <ChevronRight className="h-4 w-4 ml-1" />
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="md:hidden flex items-center justify-center h-10 w-10 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          style={{
            backgroundColor: scrolled
              ? isMenuOpen
                ? "transparent"
                : "rgba(255, 255, 255, 0.2)"
              : "rgba(255, 255, 255, 0.2)",
          }}
        >
          {isMenuOpen ? (
            <X
              className={`h-6 w-6 ${scrolled ? "text-white" : "text-white"}`}
            />
          ) : (
            <Menu
              className={`h-6 w-6 ${scrolled ? "text-primary" : "text-white"}`}
            />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 bg-primary z-40 md:hidden pt-20"
          >
            <div className="container mx-auto px-6">
              <nav className="flex flex-col items-start justify-start space-y-6 pt-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full"
                  >
                    <Link
                      to={link.path}
                      className={`text-xl font-medium block py-3 border-b border-white/10 w-full ${
                        location.pathname === link.path
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="w-full pt-4"
                >
                  <a
                    href="#download"
                    className="inline-flex items-center px-6 py-3 bg-white text-primary rounded-lg font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Download App
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

