
function ShimmerBody() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Shimmer Search & Filter Section - Mimics Body's section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8 animate-pulse">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            {/* Shimmer Search Input */}
            <div className="relative flex items-center w-full md:w-1/2 lg:w-2/5">
              <div className="flex-grow h-10 bg-gray-200 rounded-lg pr-10"></div> {/* Mimics input field */}
              <div className="absolute right-0 top-0 h-10 w-10 bg-gray-300 rounded-r-lg"></div> {/* Mimics search button */}
            </div>

            {/* Shimmer Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 w-full md:w-auto">
              <div className="h-10 w-36 bg-gray-200 rounded-lg shadow-md"></div> {/* Mimics Top Rated button */}
              <div className="h-10 w-36 bg-gray-200 rounded-lg shadow-md"></div> {/* Mimics Reset Filters button */}
            </div>
          </div>
        </section>

        {/* Shimmer Restaurant Grid - Mimics Body's grid */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array(12).fill("").map((_, index) => (
              <div
                key={index}
                className="w-full h-72 bg-white rounded-xl shadow-lg animate-pulse overflow-hidden"
              >
                {/* Shimmer Image Area */}
                <div className="w-full h-44 bg-gray-200 rounded-t-xl"></div>
                {/* Shimmer Text Content Area */}
                <div className="p-4">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div> {/* Shimmer for Name */}
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div> {/* Shimmer for Cuisine */}
                  <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                    <div className="h-4 w-1/4 bg-gray-200 rounded"></div> {/* Shimmer for Rating */}
                    <div className="h-4 w-1/4 bg-gray-200 rounded"></div> {/* Shimmer for Time */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ShimmerBody;