import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";
import AppDownload from "./AppDownload";

const Hero = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants for consistent animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with improved overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="h-full"
        >
          <img
            src="/api/placeholder/1920/1080"
            alt="Modern real estate in Kenya"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-black/70 backdrop-blur-sm" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20 pb-24 flex flex-col items-center">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-accent font-medium mb-6"
            variants={fadeInUp}
            custom={0}
          >
            Kenya's #1 Real Estate Platform
          </motion.span>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white"
            variants={fadeInUp}
            custom={1}
          >
            Your Dream Property Is Just A{" "}
            <span className="text-accent">Tap Away</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl mb-10 text-gray-100 max-w-2xl mx-auto leading-relaxed"
            variants={fadeInUp}
            custom={2}
          >
            IOIO connects you with the best real estate options in Kenya. Buy,
            sell, rent, or list properties with ease on our intuitive platform.
          </motion.p>

          <motion.div variants={fadeInUp} custom={3} className="mb-16">
            <AppDownload />
          </motion.div>

          <motion.button
            onClick={scrollToFeatures}
            className="flex items-center justify-center gap-2 text-white/90 hover:text-white group transition-all duration-300"
            variants={fadeInUp}
            custom={4}
            whileHover={{ y: 5 }}
          >
            <span className="font-medium">Explore Features</span>
            <ArrowDownCircle className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Stats Section - Redesigned with cards */}
        <motion.div
          className="w-full max-w-5xl mx-auto mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { number: "10K+", label: "Active Listings" },
              { number: "50K+", label: "Happy Users" },
              { number: "98%", label: "Success Rate" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 text-center hover:bg-white/15 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-200">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-accent/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;

