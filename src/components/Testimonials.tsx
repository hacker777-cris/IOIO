const testimonials = [
  {
    id: 1,
    name: "James Kamau",
    role: "Property Owner",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    quote: "IOIO made it incredibly easy to list my rental properties. Within days, I had qualified tenants and secured a 12-month lease. The app streamlined the entire process."
  },
  {
    id: 2,
    name: "Wanjiku Kariuki",
    role: "Home Buyer",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    quote: "After months of frustrating property searches, IOIO helped me find my dream home in Kilimani. The filtering options and neighborhood insights were game-changers!"
  },
  {
    id: 3,
    name: "David Omondi",
    role: "Real Estate Agent",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    quote: "As an agent, IOIO has transformed how I do business. The booking system for viewings saves me hours every week, and my clients love the professional interface."
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover">
      <div className="flex items-center mb-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-lg">{testimonial.name}</h4>
          <p className="text-gray-600">{testimonial.role}</p>
        </div>
      </div>
      <blockquote className="text-gray-700 italic">"{testimonial.quote}"</blockquote>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="section bg-gray-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the people who have transformed their real estate experience with IOIO.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;