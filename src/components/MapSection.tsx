import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const MapSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden h-full"
    >
      <div className="aspect-video">
        <iframe
          title="IOIO Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8175469131715!2d36.81156551475628!3d-1.2647306990715662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d23820d645%3A0xea1a19f0919bf57c!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1653046488913!5m2!1sen!2ske"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-5 text-primary">
          Visit Our Office
        </h3>
        <div className="space-y-5">
          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-lg mr-4">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
              <p className="text-gray-600">
                Westlands Business Park
                <br />
                Waiyaki Way, Westlands
                <br />
                Nairobi, Kenya
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-primary/10 p-2 rounded-lg mr-4">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">Office Hours</h4>
              <p className="text-gray-600">
                Monday - Friday
                <br />
                9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MapSection;

