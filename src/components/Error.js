const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
      <h1 className="text-6xl font-extrabold text-red-600 mb-4 animate-bounce">
        404
      </h1>
      <h2 className="text-3xl font-semibold mb-3">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        Oops! The page you're looking for doesn't exist. It might have been
        moved or deleted.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={() => (window.location.href = "/")}
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out cursor-pointer"
        >
          Go to Homepage
        </button>
        <button
          onClick={() => (window.location.href = "/contact")}
          className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition duration-300 ease-in-out cursor-pointer"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Error;