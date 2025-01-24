"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface OrderDetails {
  orderId: string;
  date: string;
  status: string;
  items: OrderItem[];
  total: number;
  shipmentCharges: number;
  totalPrice: number;
}

const OrderTrackingPage = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams?.get("orderId"); 

  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);

  useEffect(() => {
    if (orderId) {
      // Simulate fetching order data using the orderId
      const fetchedOrderDetails: OrderDetails = {
        orderId,
        date: new Date().toLocaleDateString(),
        status: "Processing",
        items: [
          { name: "Product 1", quantity: 1, price: 29.99 },
        ],
        total: 69.97,
        shipmentCharges: 5.0,
        totalPrice: 74.97,
      };

      setOrderDetails(fetchedOrderDetails);
    }
  }, [orderId]);

  return (
    <div className="container mx-auto px-4 sm:px-20 py-8 min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Order Tracking</h2>
        {orderDetails ? (
          <div>
            <div className="mb-6">
              <p className="text-lg font-semibold text-gray-700 mb-1">Order ID:</p>
              <p className="text-xl font-medium text-gray-900">{orderDetails.orderId}</p>
            </div>

            <div className="mb-6">
              <p className="text-lg font-semibold text-gray-700 mb-1">Order Date:</p>
              <p className="text-xl font-medium text-gray-900">{orderDetails.date}</p>
            </div>

            <div className="mb-6">
              <p className="text-lg font-semibold text-gray-700 mb-1">Status:</p>
              <p className="text-xl font-medium text-gray-900">{orderDetails.status}</p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Items Ordered</h3>
            <ul className="space-y-3">
              {orderDetails.items.map((item, index) => (
                <li key={index} className="flex justify-between items-center py-2 px-4 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 transition">
                  <div className="flex-1">
                    <span className="font-semibold text-gray-800">{item.name}</span>
                    <span className="text-gray-600"> (x{item.quantity})</span>
                  </div>
                  <span className="text-gray-800 font-semibold">${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-gray-300 pt-6">
              <div className="flex justify-between mb-4">
                <p className="text-lg font-semibold text-gray-700">Subtotal:</p>
                <p className="text-lg font-semibold text-gray-900">${orderDetails.total.toFixed(2)}</p>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-lg font-semibold text-gray-700">Shipment Charges:</p>
                <p className="text-lg font-semibold text-gray-900">${orderDetails.shipmentCharges.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-lg font-semibold text-gray-700">Total:</p>
                <p className="text-xl font-semibold text-gray-900">${orderDetails.totalPrice.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading order details...</p>
        )}
      </div>
    </div>
  );
};

export default OrderTrackingPage;