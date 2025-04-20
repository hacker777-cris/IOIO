import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import MapSection from "../components/MapSection";
import { Mail, Phone, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h3 className="text-2xl font-bold mb-6 text-primary">
        Contact Information
      </h3>

      <div className="space-y-6">
        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-lg">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div className="ml-4">
            <h4 className="font-semibold text-lg">Email</h4>
            <p className="text-gray-600">info@ioio.co.ke</p>
            <p className="text-gray-600">support@ioio.co.ke</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-lg">
            <Phone className="h-6 w-6 text-primary" />
          </div>
          <div className="ml-4">
            <h4 className="font-semibold text-lg">Phone</h4>
            <p className="text-gray-600">+254 700 000 000</p>
            <p className="text-gray-600">+254 733 000 000</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-primary/10 p-3 rounded-lg">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div className="ml-4">
            <h4 className="font-semibold text-lg">Office Hours</h4>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about IOIO or need assistance? We're here to help.
              Reach out to our team using any of the methods below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <MapSection />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <ContactInfo />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

