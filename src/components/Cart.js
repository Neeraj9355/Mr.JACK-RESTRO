import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartItemList from "./CartItemList";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = item.card.info.price
        ? item.card.info.price / 100
        : item.card.info.defaultPrice / 100;
      const quantity = item.quantity || 1;
      return total + price * quantity;
    }, 0);
  };

  const totalPrice = calculateTotalPrice();

  return (
    // The key here is min-h-[calc(100vh-var(--header-height)-var(--footer-height))]
    // or simply `flex-grow` within a flex-col parent.
    // Let's use `flex-grow` here, and assume the parent handles the min-height.
    <div className="flex-grow py-20"> {/* Removed 'text-center m-21 p-4', added flex-grow and py-4 */}
      <h1 className="text-2xl font-bold mb-4 text-center">Cart</h1> {/* Added text-center here */}
      <div className="w-full md:w-10/12 lg:w-6/12 xl:w-5/12 mx-auto p-2 md:p-4 bg-white shadow-lg rounded-lg">
        {cartItems.length === 0 ? ( // Using ternary for cleaner conditional rendering
          <div className="p-8 text-center min-h-[200px] flex items-center justify-center"> {/* Added min-h, flex for centering */}
            <h1 className="text-lg font-semibold text-gray-700">
              Your cart is empty. Add items from the menu to fill it up!
            </h1>
          </div>
        ) : (
          <>
            <CartItemList items={cartItems} />

            {/* Cart Summary */}
            <div className="border-t-2 border-gray-200 mt-6 pt-4 flex justify-between items-center text-lg font-bold">
              <span>Total:</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>

            {/* "Clear Cart", "Cancel", and "Checkout" buttons */}
            <div className="flex flex-col sm:flex-row justify-between mt-6 gap-4"> {/* Responsive button layout */}
              <Link to="/" className="w-full sm:w-auto"> {/* Wrap Link around button for proper styling */}
                <button className="p-2 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 text-sm md:text-base w-full">
                  Cancel
                </button>
              </Link>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"> {/* Grouped action buttons */}
                <button
                  className="p-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 text-sm md:text-base w-full"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </button>
                <button className="p-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm md:text-base w-full">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;