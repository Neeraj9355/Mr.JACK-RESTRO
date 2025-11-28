import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { RESTAURANT_CARD_API } from "../utils/constants";
import ShimmerBody from "./ShimmerBody";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchedData();
  }, []);

  const fetchedData = async () => {
    setLoading(true);
    setError(null);
    try {
      const corsUrl = 'https://cors-anywhere.herokuapp.com/${RESTAURANT_CARD_API}';
      const data = await fetch(corsUrl);
      const json = await data.json();

      
      let restaurants = [];
      const cards = json?.data?.cards;

      if (cards) {
        for (let i = 0; i < cards.length; i++) {
          const card = cards[i]?.card?.card;
          if (card?.gridElements?.infoWithStyle?.restaurants) {
            restaurants = card.gridElements.infoWithStyle.restaurants;
            break;
          }
        }
      }
      if (restaurants.length > 0) {
        setListOfRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
      } else {
        console.warn(
          "No restaurant data found in the API response with the expected structure."
        );
        setError(
          "Could not load restaurants. The data structure from the API might have changed."
        );
      }
    } catch (err) {
      console.error("Error fetching data:", err);
      setError(
        "Failed to fetch restaurants. Please check your internet connection."
      );
    } finally {
      setLoading(false);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-red-50 to-red-100 text-red-700 p-6 rounded-lg shadow-xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 animate-pulse">Oops! You're Offline!</h1>
        <p className="text-xl md:text-2xl font-medium">Please check your internet connection and try again. 📡</p>
      </div>
    );
  }
  if (loading) {
    return <ShimmerBody />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-red-50 to-red-100 text-red-700 p-6 rounded-lg shadow-xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Error Loading Restaurants!</h1>
        <p className="text-lg md:text-xl">{error}</p>
        <p className="mt-4 text-gray-600">Please try refreshing the page.</p>
      </div>
    );
  }

  if (listOfRestaurants.length === 0 && !loading && !error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 text-yellow-800 p-6 rounded-lg shadow-xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">No Restaurants Found!</h1>
        <p className="text-lg md:text-xl">It looks like there are no restaurants available right now. Please check back later.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Search & Filter Section */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            {/* Search Input */}
            <div className="relative flex items-center w-full md:w-1/2 lg:w-2/5">
              <input
                type="text"
                className="flex-grow border border-gray-300 rounded-lg py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 placeholder-gray-400"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Craving something specific? Search here..."
              />
              <button
                className="absolute right-0 top-0 h-full px-4 rounded-r-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center cursor-pointer"
                onClick={() => {
                  const searchFiltered = listOfRestaurants.filter((res) =>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                  setFilteredRestaurants(searchFiltered);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 w-full md:w-auto">
              <button
                className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-md font-semibold text-sm cursor-pointer"
                onClick={() => {
                  const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                  );
                  setFilteredRestaurants(filteredList);
                }}
              >
                ⭐ Top Rated
              </button>
              <button
                className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-200 shadow-md font-semibold text-sm cursor-pointer"
                onClick={() => {
                  setFilteredRestaurants(listOfRestaurants);
                  setSearchText("");
                }}
              >
                🔄 Clear Filters
              </button>
            </div>
          </div>
        </section>

        {/* Restaurant Grid */}
        <section>
          {filteredRestaurants.length === 0 && searchText !== "" ? (
            <div className="text-center p-8 bg-white rounded-lg shadow-md mt-8">
              <h1 className="text-2xl font-bold text-gray-700">
                🔍 No munchies found for "{searchText}". Try a different name!
              </h1>
            </div>
          ) : filteredRestaurants.length === 0 ? (
            <div className="text-center p-8 bg-white rounded-lg shadow-md mt-8">
              <h1 className="text-2xl font-bold text-gray-700">
                😟 No restaurants match your current filters. Clear filters to see more!
              </h1>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRestaurants.map((restaurant) => (
                <Link
                  to={`/restaurants/${restaurant.info.id}`}
                  key={restaurant.info.id}
                  className="block"
                >
                  {restaurant.info.promoted ? (
                    <RestaurantCardPromoted
                      resName={restaurant.info.name}
                      cuisine={restaurant.info.cuisines.join(", ")}
                      time={`${restaurant.info.sla.deliveryTime} mins`}
                      rating={restaurant.info.avgRating}
                      cloudinaryImageId={restaurant.info.cloudinaryImageId}
                    />
                  ) : (
                    <RestaurantCard
                      resName={restaurant.info.name}
                      cuisine={restaurant.info.cuisines.join(", ")}
                      time={`${restaurant.info.sla.deliveryTime} mins`}
                      rating={restaurant.info.avgRating}
                      cloudinaryImageId={restaurant.info.cloudinaryImageId}
                    />
                  )}
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Body;
