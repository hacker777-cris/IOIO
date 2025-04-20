import { motion } from "framer-motion";
import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center mb-8 text-primary hover:text-primary-dark transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          <span>Back to Home</span>
        </Link>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center mb-6"
          >
            <div className="p-3 bg-primary/10 rounded-lg mr-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8 text-gray-500">
            Last Updated: April 1, 2025
          </motion.div>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-8 md:p-10">
              <motion.div
                className="prose prose-lg max-w-none"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Introduction
                  </h2>
                  <p className="text-gray-700">
                    At IOIO ("we", "our", or "us"), we are committed to
                    protecting your privacy and ensuring the security of your
                    personal information. This Privacy Policy explains how we
                    collect, use, disclose, and safeguard your information when
                    you use our mobile application and website (collectively,
                    the "Service").
                  </p>
                  <p className="text-gray-700">
                    Please read this Privacy Policy carefully. By accessing or
                    using our Service, you acknowledge that you have read,
                    understood, and agree to be bound by all the terms of this
                    Privacy Policy.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
                    Information We Collect
                  </h2>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Personal Data
                  </h3>
                  <p className="text-gray-700">
                    We collect information that you voluntarily provide to us
                    when you register for the Service, express interest in
                    obtaining information about us or our products, or otherwise
                    contact us. The personal information we collect may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      Name, email address, phone number, and other contact
                      information
                    </li>
                    <li>User credentials (username and password)</li>
                    <li>Profile information (profile picture, preferences)</li>
                    <li>Location data (when using location-based features)</li>
                    <li>Property information (for listings)</li>
                    <li>Transaction information (for bookings and payments)</li>
                    <li>
                      Identification documents (for verification purposes)
                    </li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                    Usage Data
                  </h3>
                  <p className="text-gray-700">
                    We automatically collect certain information when you access
                    or use our Service. This may include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      Device information (device type, operating system, browser
                      type)
                    </li>
                    <li>IP address and location information</li>
                    <li>Service usage patterns (features used, time spent)</li>
                    <li>
                      Search queries and browsing history within the Service
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
                    How We Use Your Information
                  </h2>
                  <p className="text-gray-700">
                    We use the information we collect for various purposes,
                    including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Providing, operating, and maintaining our Service</li>
                    <li>
                      Facilitating property listings, searches, and bookings
                    </li>
                    <li>Processing payments and transactions</li>
                    <li>Verifying user identity and preventing fraud</li>
                    <li>
                      Communicating with you about service-related matters
                    </li>
                    <li>Sending marketing communications (with consent)</li>
                    <li>Personalizing and improving user experience</li>
                    <li>Analyzing usage patterns and trends</li>
                    <li>Complying with legal obligations</li>
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
                    Data Protection and Storage
                  </h2>
                  <p className="text-gray-700">
                    We implement appropriate technical and organizational
                    measures to protect your personal information against
                    unauthorized access, alteration, disclosure, or destruction.
                    However, no method of transmission over the Internet or
                    electronic storage is 100% secure.
                  </p>
                  <p className="text-gray-700">
                    Your data is stored on secure servers located within the
                    Republic of Kenya and may also be stored or processed in
                    other countries where our service providers maintain
                    facilities. By using our Service, you consent to the
                    transfer of information to countries that may have different
                    data protection rules than your country.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
                    Cookie Usage
                  </h2>
                  <p className="text-gray-700">
                    We use cookies and similar tracking technologies to track
                    activity on our Service and hold certain information.
                    Cookies are files with a small amount of data that may
                    include an anonymous unique identifier.
                  </p>
                  <p className="text-gray-700">
                    You can instruct your browser to refuse all cookies or to
                    indicate when a cookie is being sent. However, if you do not
                    accept cookies, you may not be able to use some portions of
                    our Service.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
                    Your Rights Under Kenyan Law
                  </h2>
                  <p className="text-gray-700">
                    In accordance with the Data Protection Act of Kenya (2019),
                    you have the following rights regarding your personal
                    information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Right to access your personal data</li>
                    <li>Right to correct inaccurate personal data</li>
                    <li>Right to delete your personal data</li>
                    <li>
                      Right to object to the processing of your personal data
                    </li>
                    <li>Right to request restriction of processing</li>
                    <li>Right to data portability</li>
                    <li>Right to withdraw consent</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    To exercise any of these rights, please contact us using the
                    information provided in the "Contact Us" section.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
                    Disclosure of Data
                  </h2>
                  <p className="text-gray-700">
                    We may disclose your personal information in the following
                    situations:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      To service providers that assist us in operating our
                      Service
                    </li>
                    <li>
                      To other users as part of the normal operation of the
                      Service (e.g., property information to potential buyers)
                    </li>
                    <li>To comply with legal obligations</li>
                    <li>To protect and defend our rights or property</li>
                    <li>To prevent or investigate possible wrongdoing</li>
                    <li>With your consent or at your direction</li>
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
                    Children's Privacy
                  </h2>
                  <p className="text-gray-700">
                    Our Service is not intended for use by children under the
                    age of 18. We do not knowingly collect personally
                    identifiable information from children under 18. If you are
                    a parent or guardian and you are aware that your child has
                    provided us with personal information, please contact us.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
                    Changes to This Privacy Policy
                  </h2>
                  <p className="text-gray-700">
                    We may update our Privacy Policy from time to time. We will
                    notify you of any changes by posting the new Privacy Policy
                    on this page and updating the "Last Updated" date.
                  </p>
                  <p className="text-gray-700">
                    You are advised to review this Privacy Policy periodically
                    for any changes. Changes to this Privacy Policy are
                    effective when they are posted on this page.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
                    Contact Us
                  </h2>
                  <p className="text-gray-700">
                    If you have any questions about this Privacy Policy or our
                    data practices, please contact us at:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-xl mt-4">
                    <p className="text-gray-700">
                      <strong>IOIO Real Estate Platform</strong>
                      <br />
                      Westlands Business Park
                      <br />
                      Nairobi, Kenya
                      <br />
                      Email:{" "}
                      <a
                        href="mailto:privacy@ioio.co.ke"
                        className="text-primary hover:underline"
                      >
                        privacy@ioio.co.ke
                      </a>
                      <br />
                      Phone: +254 700 000 000
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
