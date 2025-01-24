"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation"; 

interface UserDetails {
  name: string;
  phone: string;
  address: string;
  city: string;
  cardNumber: string;
  cardExpiry: string;
  cardCVV: string;
}

const CheckoutPage = () => {
  const { cart = [], clearCart } = useCart();
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: "",
    phone: "",
    address: "",
    city: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const router = useRouter(); // Initialize useRouter hook for redirection

  const shipmentCharges = 5;

  // Calculate subtotal for cart items
  const calculateSubtotal = (): number => {
    return cart.reduce((total: number, item) => {
      const price = item.price;
      if (isNaN(price)) {
        console.error(`Invalid price for item: ${item.name}`);
        return total;
      }
      return total + price * item.quantity;
    }, 0);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof UserDetails): void => {
    setUserDetails((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 11);
    setUserDetails((prev) => ({ ...prev, phone: value }));
  };

  const handlePlaceOrder = (): void => {
    const emptyFields = Object.keys(userDetails).filter((key) => userDetails[key as keyof UserDetails].trim() === "");

    if (emptyFields.length > 0) {
      alert("Please fill out all the fields in the form.");
      return;
    }
    if (userDetails.phone.length !== 11) {
      alert("Phone number must be exactly 11 digits.");
      return;
    }

    if (userDetails.cardNumber.length !== 16) {
      alert("Card number must be 16 digits.");
      return;
    }

    if (userDetails.cardCVV.length !== 3) {
      alert("CVV must be 3 digits.");
      return;
    }

    clearCart();
    setUserDetails({
      name: "",
      phone: "",
      address: "",
      city: "",
      cardNumber: "",
      cardExpiry: "",
      cardCVV: "",
    });
    setOrderPlaced(true);

    // Simulate an order ID for this example
    const orderId = "123456789"; // This would be generated dynamically in a real system

    // Corrected router.push with a string URL
    router.push(`/ordertracking?orderId=${orderId}`);
  };

  return (
    <div className="container mx-auto px-5 sm:px-20 py-8 min-h-screen bg-white flex justify-center items-center">
      {orderPlaced ? (
        <div className="text-center mt-20 flex flex-col items-center justify-center flex-grow">
          <h2 className="text-4xl font-bold text-gray-800">Order placed successfully!</h2>
          <p className="mt-4">Thank you for shopping with us.</p>
          <Link href="/ordertracking">
            <button className="bg-black text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition mt-6">
              Track Your Order
            </button>
          </Link>
        </div>
      ) : (
        <div className="w-full max-w-lg border-1 border-gray-200 p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl text-black font-semibold mb-8 text-center">Checkout</h2>

          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              value={userDetails.name}
              onChange={(e) => handleFormChange(e, "name")}
              className="w-full p-4 border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your Name"
            />
            <label className="block mb-2">Phone</label>
            <input
              type="text"
              value={userDetails.phone}
              onChange={handlePhoneChange}
              maxLength={11}
              className="w-full p-4 border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your Phone (11 digits)"
            />
            <label className="block mb-2">Address</label>
            <input
              type="text"
              value={userDetails.address}
              onChange={(e) => handleFormChange(e, "address")}
              className="w-full p-4 border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your Address"
            />
            <label className="block mb-2">City</label>
            <input
              type="text"
              value={userDetails.city}
              onChange={(e) => handleFormChange(e, "city")}
              className="w-full p-4 border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your City"
            />
          </div>

          <h3 className="text-xl font-semibold mt-6">Payment Details</h3>
          <div>
            <label className="block mb-2">Card Number</label>
            <input
              type="text"
              value={userDetails.cardNumber}
              onChange={(e) => handleFormChange(e, "cardNumber")}
              maxLength={16}
              className="w-full p-4 border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your Card Number (16 digits)"
            />
            <label className="block mb-2">Expiry Date</label>
            <input
              type="text"
              value={userDetails.cardExpiry}
              onChange={(e) => handleFormChange(e, "cardExpiry")}
              className="w-full p-4 border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="MM/YY"
            />
            <label className="block mb-2">CVV</label>
            <input
              type="text"
              value={userDetails.cardCVV}
              onChange={(e) => handleFormChange(e, "cardCVV")}
              maxLength={3}
              className="w-full p-4 border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="CVV (3 digits)"
            />
          </div>

          <div className="mt-6 flex justify-between items-center">
            <div>
              <p className="md:text-xl font-semibold">Subtotal: ${calculateSubtotal().toFixed(2)} USD</p>
              <p className="md:text-xl font-semibold">Shipment: ${shipmentCharges.toFixed(2)} USD</p>
            </div>
            <div>
              <p className="md:text-xl font-semibold">Total: ${(calculateSubtotal() + shipmentCharges).toFixed(2)} USD</p>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder} // Trigger the order placement and redirection
            className="bg-black text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-900 transition mt-6 w-full"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;