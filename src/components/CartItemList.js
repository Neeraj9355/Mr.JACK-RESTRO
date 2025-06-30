import { useDispatch } from "react-redux";
import { removeItem, incrementItem, decrementItem } from "../utils/cartSlice"; // clearCart is usually handled in the parent Cart component
import { RESTAURANT_MENU_IMG_URL } from "../utils/constants";

const CartItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleIncrementItem = (itemId) => {
    dispatch(incrementItem(itemId));
  };

  const handleDecrementItem = (itemId) => {
    // If quantity is 1 and decrement is clicked, remove the item
    const itemToDecrement = items.find((item) => item.card.info.id === itemId);
    if (itemToDecrement && itemToDecrement.quantity === 1) {
      dispatch(removeItem(itemId));
    } else {
      dispatch(decrementItem(itemId));
    }
  };

  if (items.length === 0) {
    // This case is typically handled by the parent Cart component,
    // but keeping it here for robustness if CartItemList is used independently.
    return (
      <div className="text-center p-4">
        <h2 className="text-xl font-bold">Your cart is empty!</h2>
        <p className="mt-2">Add some delicious items from the menu.</p>
      </div>
    );
  }

  return (
    <div className="p-2 md:p-4"> {/* Adjusted padding */}
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex flex-col md:flex-row justify-between items-start md:items-center last:border-b-0"
        >
          {/* Item details: image, name, price, quantity text */}
          <div className="w-full md:w-7/12 flex items-center mb-2 md:mb-0"> {/* Added responsive width, mb for spacing on small screens */}
            {item.card.info.imageId && (
              <img
                src={RESTAURANT_MENU_IMG_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-16 h-16 object-cover rounded-md mr-4 flex-shrink-0" // flex-shrink-0 to prevent image from shrinking
              />
            )}
            <div>
              <span className="font-semibold text-base md:text-lg block">{item.card.info.name}</span> {/* block for better spacing */}
              <span className="text-gray-600 text-sm md:text-base">
                ₹
                {(item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100).toFixed(2)}
              </span>
              {item.quantity && (
                 <span className="ml-2 text-gray-500 text-xs md:text-sm">
                   (Qty: {item.quantity}) {/* Shorter "Qty" for mobile */}
                 </span>
              )}
            </div>
          </div>

          {/* Quantity controls and Remove button */}
          <div className="w-full md:w-5/12 flex flex-col sm:flex-row justify-end items-start sm:items-center gap-2 md:gap-4 mt-2 md:mt-0"> {/* Adjusted flex direction and gap */}
            {/* Quantity controls */}
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                className="p-1 px-3 text-lg font-bold text-gray-700 hover:bg-gray-100 transition-colors duration-200" // Increased px for better tap target
                onClick={() => handleDecrementItem(item.card.info.id)}
              >
                -
              </button>
              <span className="px-3 py-1 font-semibold text-base">
                {item.quantity || 1}
              </span>
              <button
                className="p-1 px-3 text-lg font-bold text-gray-700 hover:bg-gray-100 transition-colors duration-200" // Increased px for better tap target
                onClick={() => handleIncrementItem(item.card.info.id)}
              >
                +
              </button>
            </div>
            {/* Remove button */}
            <button
              className="p-2 px-4 rounded-lg bg-red-500 text-white shadow-md hover:bg-red-600 transition-colors duration-200 text-sm md:text-base" // Adjusted padding, shadow
              onClick={() => handleRemoveItem(item.card.info.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItemList;