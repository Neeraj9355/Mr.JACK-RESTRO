import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-[calc(100vh-200px)] bg-gray-50 p-6 md:p-10 lg:p-12 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-10 max-w-lg w-full text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Get in <span className="text-blue-600">Touch</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          Have a question or feedback? We'd love to hear from you!
        </p>

        <form className="flex flex-col space-y-5">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-left text-gray-800 text-sm font-semibold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-800 placeholder-gray-400 transition-all duration-200"
              placeholder="Your full name"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-left text-gray-800 text-sm font-semibold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-800 placeholder-gray-400 transition-all duration-200"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label
              htmlFor="message"
              className="block text-left text-gray-800 text-sm font-semibold mb-2"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-800 placeholder-gray-400 resize-y transition-all duration-200"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
