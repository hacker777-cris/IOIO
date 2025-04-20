import { motion } from "framer-motion";

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M3 20.5V3.5c0-.83.67-1.5 1.5-1.5.31 0 .6.1.84.26L13.5 7.67c.76.46 1.13 1.35 1.13 2.19 0 .84-.37 1.73-1.13 2.19l-8.17 5.41c-.24.16-.53.26-.84.26a1.5 1.5 0 01-1.5-1.5z" />
  </svg>
);

const AppDownload = () => {
  const buttonVariants = {
    hover: {
      y: -5,
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <motion.a
        href="#download-ios"
        className="flex items-center px-6 py-3 bg-white text-primary rounded-xl"
        variants={buttonVariants}
        whileHover="hover"
        transition={{ duration: 0.3 }}
      >
        <AppleIcon />
        <div className="flex flex-col items-start ml-3">
          <span className="text-xs font-light text-primary/80">
            Download on the
          </span>
          <span className="text-lg font-semibold leading-tight">App Store</span>
        </div>
      </motion.a>

      <motion.a
        href="#download-android"
        className="flex items-center px-6 py-3 bg-white text-primary rounded-xl"
        variants={buttonVariants}
        whileHover="hover"
        transition={{ duration: 0.3 }}
      >
        <PlayIcon />
        <div className="flex flex-col items-start ml-3">
          <span className="text-xs font-light text-primary/80">GET IT ON</span>
          <span className="text-lg font-semibold leading-tight">
            Google Play
          </span>
        </div>
      </motion.a>
    </div>
  );
};

export default AppDownload;

