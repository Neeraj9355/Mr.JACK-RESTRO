import { CON_URL } from "../utils/constants";

const RestaurantCard = ({ resName, cuisine, time, rating, cloudinaryImageId }) => {
  return (
    <div className="w-full sm:w-64 md:w-72 lg:w-80 xl:w-80 
                    bg-white rounded-xl 
                    shadow-lg border border-gray-200 
                    transform transition-all duration-300 ease-out 
                    hover:shadow-2xl hover:scale-103 hover:-translate-y-3 hover:border-blue-500 
                    overflow-hidden cursor-pointer">
      <img
        src={CON_URL + cloudinaryImageId}
        alt={resName}
        className="w-full h-44 object-cover object-center rounded-t-xl"
      />
      <div className="p-4">
        <h3 className="font-extrabold text-xl md:text-2xl text-gray-900 mb-1 truncate" title={resName}>
          {resName}
        </h3>
        <p className="text-gray-600 text-sm md:text-base mb-2 font-medium truncate" title={cuisine}>
          {cuisine}
        </p>
        <div className="flex items-center justify-between text-sm md:text-base pt-2 border-t border-gray-100 mt-2">
          <div className={`flex items-center font-bold ${rating >= 4 ? 'text-green-600' : rating >= 3 ? 'text-orange-500' : 'text-red-500'}`}>
            <span className="mr-1 text-base md:text-lg">⭐</span> {rating}
          </div>
          <p className="text-gray-700 font-semibold">{time}</p>
        </div>
      </div>
    </div>
  );
};

// Higher Order Component
//input -RestaurantCard ==>> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      // Added a relative container for positioning the label
      <div className="relative">
        <label className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-md z-10 font-semibold">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;