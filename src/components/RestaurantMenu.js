import { useParams } from "react-router-dom";
import ShimmerRestaurantMenu from "./ShimmerRestaurantMenu";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { RESTAURANT_MENU_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantMenu = useRestaurantMenu(resId);
  const dispatch = useDispatch();

  if (restaurantMenu === null) {
    return <ShimmerRestaurantMenu type="menu" />;
  }

  // Destructure restaurant info with nullish coalescing for safety
  const { name, cuisines, avgRating, costForTwoMessage, cloudinaryImageId } =
    restaurantMenu?.cards[2]?.card?.card?.info || {};

  // Extract item cards, ensuring it's an array for safe mapping
  const itemCards =
    restaurantMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards || [];

  const handleAddToCart = (item) => {
    dispatch(addItem(item));
    // console.log(item);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-6 md:p-8 lg:p-10">
        {/* Restaurant Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between border-b pb-6 mb-6">
          {cloudinaryImageId && (
            <img
              src={RESTAURANT_MENU_IMG_URL + cloudinaryImageId}
              alt={name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-lg object-cover mb-4 md:mb-0 md:mr-6 shadow-md"
            />
          )}
          <div className="text-center md:text-left flex-grow">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
              {name}
            </h1>
            <p className="text-gray-600 text-lg md:text-xl font-medium mb-2">
              {Array.isArray(cuisines) ? cuisines.join(", ") : ""}
            </p>
            <div className="flex items-center justify-center md:justify-start text-gray-700 text-base md:text-lg font-semibold">
              <span
                className={`flex items-center mr-4 ${
                  avgRating >= 4
                    ? "text-green-600"
                    : avgRating >= 3
                    ? "text-orange-500"
                    : "text-red-500"
                }`}
              >
                <span className="mr-1 text-xl">⭐</span> {avgRating}
              </span>
              <span className="flex items-center">{costForTwoMessage}</span>
            </div>
          </div>
        </div>

        {/* Recommended Items Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b pb-4">
            Recommended Items
          </h2>

          {Array.isArray(itemCards) && itemCards.length > 0 ? (
            <ul className="divide-y divide-gray-100">
              {itemCards.map((item) => (
                <li
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-5"
                  key={item.card.info.id}
                >
                  <div className="flex-grow pr-4 mb-3 sm:mb-0">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1">
                      {item.card.info.name}
                    </h3>
                    <p className="text-md font-bold text-gray-700 mb-2 flex items-center">
                      <span className="mr-0.5 text-sm">₹</span>
                      {(
                        item.card.info.price / 100 ||
                        item.card.info.defaultPrice / 100
                      ).toFixed(2)}
                    </p>
                    {item.card.info.description && (
                      <p className="text-gray-500 text-sm">
                        {item.card.info.description}
                      </p>
                    )}
                  </div>
                  {item.card.info.imageId && (
                    <div className="flex-shrink-0 w-32 h-32 rounded-lg shadow-md overflow-hidden relative group">
                      {/* Added relative and group classes */}
                      <img
                        src={RESTAURANT_MENU_IMG_URL + item.card.info.imageId}
                        alt={item.card.info.name}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="absolute bottom-2 right-2 bg-white text-green-600 font-bold py-1 px-3 rounded-lg shadow-md hover:bg-green-600 hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        + Add
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center p-8 bg-gray-50 rounded-lg">
              <p className="text-xl text-gray-600 font-medium">
                No recommended items available at this time.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default RestaurantMenu;