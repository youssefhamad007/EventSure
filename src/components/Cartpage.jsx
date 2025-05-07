import React from 'react';

const Cartpage = ({ cart, onRemoveItem }) => {
  const calculateTotal = () => {
    return cart
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
        return total + price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gradient-to-bl from-gray-900 via-blue-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-6 md:p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500 text-lg text-center">Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.price}</p>
                    <p className="text-sm text-gray-500">{item.location}</p>
                  </div>
                  <button
                    onClick={() => onRemoveItem(index)}
                    className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-400"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <div className="flex justify-between items-center text-xl font-bold text-gray-900">
                <span>Total</span>
                <span>${calculateTotal()}</span>
              </div>
              <button
                className="mt-6 w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => alert('Proceed to checkout')}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cartpage;