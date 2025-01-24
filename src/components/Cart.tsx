"use client";
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

const CartPage = () => {
  const { cart, removeFromCart, totalQuantity, totalPrice } = useCart(); 
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>

      {totalQuantity === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b py-2">
                <div className="flex items-center gap-4">
                  <span className="font-medium">{item.name}</span>
                  <span>Quantity: {item.quantity}</span>
                  <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)} // Call remove function
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div>
              <span className="font-semibold">Total Items: {totalQuantity}</span>
            </div>
            <div>
              <span className="font-bold text-xl">Total: ${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <div className="mt-4">
            <Link
              href="/checkout"
              className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900 transition-all duration-300"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;