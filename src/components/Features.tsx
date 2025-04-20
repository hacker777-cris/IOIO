import { useState } from "react";
import {
  Home,
  Calendar,
  Shield,
  MapPin,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="p-8 h-full flex flex-col">
        <div className="relative z-10">
          <div className="p-3 bg-primary/10 rounded-2xl w-14 h-14 flex items-center justify-center mb-6">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-gray-600 flex-grow">{description}</p>

          <motion.div
            className="mt-6 flex items-center font-medium text-primary"
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </motion.div>
        </div>

        <motion.div
          className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-primary/5"
          animate={{ scale: isHovered ? 1.2 : 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Home className="h-8 w-8 text-primary" />,
      title: "Property Listings",
      description:
        "List your property for sale, rent, or per night stays. Reach thousands of potential buyers or tenants instantly.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Book Viewings",
      description:
        "Schedule and manage property viewings directly through the app. No more back-and-forth calls or messages.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Verified Listings",
      description:
        "All properties are verified by our team to ensure authenticity and prevent fraud, giving you peace of mind.",
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Kenya Localized",
      description:
        "Our platform is specifically designed for the Kenyan market, with local insights and neighborhood information.",
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "Secure Chat",
      description:
        "Communicate directly with property owners or potential buyers through our secure in-app messaging system.",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            POWERFUL FEATURES
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose IOIO?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our feature-rich platform makes real estate transactions simpler,
            safer, and more efficient for everyone in Kenya.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <a
            href="#download"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors"
          >
            Start Exploring Properties
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

