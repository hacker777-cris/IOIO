import AppDownload from './AppDownload';

const CTASection = () => {
  return (
    <section className="section bg-primary text-white">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Ready to Transform Your Real Estate Experience?
        </h2>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10">
          Join thousands of satisfied users who have found their perfect property or successful buyers through IOIO.
        </p>
        
        <div className="flex justify-center">
          <AppDownload />
        </div>
      </div>
    </section>
  );
};

export default CTASection;