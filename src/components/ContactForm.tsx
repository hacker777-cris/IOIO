import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 h-full">
      {submitSuccess ? (
        <div className="flex flex-col items-center justify-center text-center py-12 h-full">
          <div className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-800">
            Message Sent!
          </h3>
          <p className="text-gray-600 text-lg max-w-md">
            Thank you for reaching out. We'll get back to you as soon as
            possible.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="h-full flex flex-col">
          <h3 className="text-2xl font-bold mb-6 text-primary">
            Send us a Message
          </h3>

          <div className="space-y-6 flex-grow">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 mb-2 font-medium"
              >
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name
                      ? "border-red-400 focus:border-red-500"
                      : "border-gray-300 focus:border-primary"
                  } focus:outline-none focus:ring-2 ${
                    errors.name ? "focus:ring-red-200" : "focus:ring-primary/20"
                  } transition duration-200`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="mt-1.5 text-red-500 text-sm">{errors.name}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 mb-2 font-medium"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email
                      ? "border-red-400 focus:border-red-500"
                      : "border-gray-300 focus:border-primary"
                  } focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "focus:ring-red-200"
                      : "focus:ring-primary/20"
                  } transition duration-200`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-1.5 text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 mb-2 font-medium"
              >
                Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message
                      ? "border-red-400 focus:border-red-500"
                      : "border-gray-300 focus:border-primary"
                  } focus:outline-none focus:ring-2 ${
                    errors.message
                      ? "focus:ring-red-200"
                      : "focus:ring-primary/20"
                  } resize-none transition duration-200`}
                  placeholder="How can we help you?"
                />
                {errors.message && (
                  <p className="mt-1.5 text-red-500 text-sm">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`mt-8 w-full py-3.5 px-6 rounded-lg font-medium text-white
              bg-primary hover:bg-primary/90 transition duration-200
              flex items-center justify-center ${isSubmitting ? "opacity-80 cursor-not-allowed" : ""}`}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending message...
              </span>
            ) : (
              <span className="flex items-center">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </span>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;

