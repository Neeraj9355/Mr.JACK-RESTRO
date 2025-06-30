function ShimmerRestaurantMenu() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 md:p-8 lg:p-10 animate-pulse">

        {/* Shimmer for Restaurant Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between border-b pb-6 mb-6">
          {/* Shimmer Image */}
          <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-200 rounded-lg mb-4 md:mb-0 md:mr-6 shadow-md"></div>
          
          <div className="text-center md:text-left flex-grow">
            {/* Shimmer Name */}
            <div className="h-9 w-3/4 bg-gray-200 rounded-md mb-3 mx-auto md:mx-0"></div>
            {/* Shimmer Cuisines */}
            <div className="h-6 w-1/2 bg-gray-200 rounded-md mb-4 mx-auto md:mx-0"></div>
            {/* Shimmer Rating & Cost */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="h-5 w-20 bg-gray-200 rounded-md"></div>
              <div className="h-5 w-24 bg-gray-200 rounded-md"></div>
            </div>
          </div>
        </div>

        {/* Shimmer for Recommended Items Section Header */}
        <div className="h-8 w-2/3 bg-gray-200 rounded-md mb-6 border-b pb-4"></div>

        {/* Shimmer for Menu Item List (e.g., 5-7 items) */}
        <ul className="divide-y divide-gray-100">
          {Array(7).fill("").map((_, index) => ( // Generate 7 shimmer items
            <li className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-5" key={index}>
              <div className="flex-grow pr-4 mb-3 sm:mb-0">
                {/* Shimmer Item Name */}
                <div className="h-6 w-4/5 bg-gray-200 rounded-md mb-2"></div>
                {/* Shimmer Item Price */}
                <div className="h-4 w-1/4 bg-gray-200 rounded-md mb-2"></div>
                {/* Shimmer Item Description */}
                <div className="h-4 w-full bg-gray-100 rounded-md"></div>
                <div className="h-4 w-3/4 bg-gray-100 rounded-md mt-1"></div>
              </div>
              {/* Shimmer Item Image */}
              <div className="flex-shrink-0 w-28 h-28 sm:w-32 sm:h-32 bg-gray-200 rounded-lg shadow-md"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShimmerRestaurantMenu;