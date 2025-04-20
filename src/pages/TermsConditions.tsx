import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const TermsConditions = () => {
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
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Terms and Conditions
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8 text-gray-500">
            Last Updated: August 1, 2025
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
                    Welcome to IOIO. These Terms and Conditions govern your use
                    of the IOIO mobile application and website (collectively,
                    the "Service") operated by IOIO Limited ("we", "us", or
                    "our").
                  </p>
                  <p className="text-gray-700">
                    By accessing or using our Service, you agree to be bound by
                    these Terms. If you disagree with any part of the terms, you
                    do not have permission to access the Service.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
                    Eligibility and Account Creation
                  </h2>
                  <p className="text-gray-700">
                    To use certain features of our Service, you must register
                    for an account. When you register, you agree to provide
                    accurate, current, and complete information about yourself
                    and to update such information as necessary.
                  </p>
                  <p className="text-gray-700">
                    You must be at least 18 years old and capable of forming a
                    binding contract to register for an account. By using our
                    Service, you represent and warrant that you meet these
                    requirements.
                  </p>
                  <p className="text-gray-700">
                    You are responsible for safeguarding the password and for
                    all activities that occur under your account. You agree to
                    immediately notify us of any unauthorized use of your
                    account or any other breach of security.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
                    Property Listings and Responsibilities
                  </h2>
                  <p className="text-gray-700">
                    When listing a property on our Service, you agree to provide
                    accurate, complete, and up-to-date information about the
                    property, including its location, features, condition,
                    availability, and price.
                  </p>
                  <p className="text-gray-700">
                    You represent and warrant that you have the legal right to
                    list the property and that the listing does not violate any
                    laws, regulations, or third-party rights. You are solely
                    responsible for the content of your listings.
                  </p>
                  <p className="text-gray-700">
                    We reserve the right to remove any listing that we
                    determine, in our sole discretion, violates these Terms or
                    may create liability for us.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
                    Booking and Cancellation Policies
                  </h2>
                  <p className="text-gray-700">
                    When booking a property viewing through our Service, you
                    agree to honor the appointment time and to provide notice if
                    you need to cancel or reschedule.
                  </p>
                  <p className="text-gray-700">
                    Property owners and agents agree to honor viewing
                    appointments made through our Service and to provide
                    reasonable notice if they need to cancel or reschedule.
                  </p>
                  <p className="text-gray-700">
                    Specific cancellation policies may vary by property and will
                    be displayed on the booking page. By confirming a booking,
                    you agree to the cancellation policy for that particular
                    property.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
                    Limitation of Liability
                  </h2>
                  <p className="text-gray-700">
                    To the maximum extent permitted by applicable law, IOIO, its
                    affiliates, directors, employees, agents, and licensors
                    shall not be liable for any indirect, incidental, special,
                    consequential, or punitive damages, including without
                    limitation, loss of profits, data, use, goodwill, or other
                    intangible losses, resulting from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      Your access to or use of or inability to access or use the
                      Service;
                    </li>
                    <li>
                      Any conduct or content of any third party on the Service;
                    </li>
                    <li>Any content obtained from the Service; and</li>
                    <li>
                      Unauthorized access, use, or alteration of your
                      transmissions or content.
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
                    Dispute Resolution
                  </h2>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <p className="text-gray-700">
                      Any dispute arising from or relating to these Terms or our
                      Service shall be governed by and construed in accordance
                      with the laws of the Republic of Kenya, without regard to
                      its conflict of law provisions.
                    </p>
                    <p className="text-gray-700 mt-4">
                      Any legal action or proceeding arising under these Terms
                      shall be brought exclusively in the courts located in
                      Nairobi, Kenya, and you hereby consent to the personal
                      jurisdiction and venue therein.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
                    Termination
                  </h2>
                  <p className="text-gray-700">
                    We may terminate or suspend your account and bar access to
                    the Service immediately, without prior notice or liability,
                    under our sole discretion, for any reason whatsoever,
                    including without limitation if you breach the Terms.
                  </p>
                  <p className="text-gray-700">
                    All provisions of the Terms which by their nature should
                    survive termination shall survive termination, including,
                    without limitation, ownership provisions, warranty
                    disclaimers, indemnity, and limitations of liability.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
                    Intellectual Property
                  </h2>
                  <p className="text-gray-700">
                    The Service and its original content, features, and
                    functionality are and will remain the exclusive property of
                    IOIO and its licensors. The Service is protected by
                    copyright, trademark, and other laws of both Kenya and
                    foreign countries.
                  </p>
                  <p className="text-gray-700">
                    Our trademarks and trade dress may not be used in connection
                    with any product or service without the prior written
                    consent of IOIO.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
                    User Content
                  </h2>
                  <p className="text-gray-700">
                    You retain ownership of any content you submit, post, or
                    display on or through the Service ("User Content"). By
                    submitting User Content, you grant us a worldwide,
                    non-exclusive, royalty-free license to use, reproduce,
                    modify, adapt, publish, translate, create derivative works
                    from, distribute, and display such content in any and all
                    media.
                  </p>
                  <p className="text-gray-700">
                    You represent and warrant that you own or have the necessary
                    rights to the User Content and that the User Content does
                    not violate the rights of any third party.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
                    Governing Law
                  </h2>
                  <p className="text-gray-700">
                    These Terms shall be governed and construed in accordance
                    with the laws of Kenya, without regard to its conflict of
                    law provisions.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
                    Changes to Terms
                  </h2>
                  <p className="text-gray-700">
                    We reserve the right, at our sole discretion, to modify or
                    replace these Terms at any time. We will provide notice of
                    any changes by posting the new Terms on this page and
                    updating the "Last Updated" date.
                  </p>
                  <p className="text-gray-700">
                    Your continued use of the Service after any such changes
                    constitutes your acceptance of the new Terms.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
                    Contact Us
                  </h2>
                  <p className="text-gray-700">
                    If you have any questions about these Terms, please contact
                    us at:
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
                        href="mailto:legal@ioio.co.ke"
                        className="text-primary hover:underline"
                      >
                        legal@ioio.co.ke
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

export default TermsConditions;

