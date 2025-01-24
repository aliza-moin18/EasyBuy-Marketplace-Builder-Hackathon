"use client";

import Image from "next/image";

export default function ShopexOffer() {
  const offers = [
    {
      id: 1,
      icon: "/Shopex/img1.jpg", 
      title: "24/7 Support",
      description:
      "We offer round-the-clock support to ensure that your shopping experience is smooth and hassle-free. No matter the time, we're here to assist you with any inquiries or issues.",
    },
    {
      id: 2,
      icon: "/Shopex/img2.jpg", 
      title: "Fast Responses",
      description:
        "Our team strives to provide quick and helpful responses to all your questions. Whether it's a product inquiry or an order update, expect to hear back from us promptly.",
    },
    {
      id: 3,
      icon: "/Shopex/img3.jpg", 
      title: "Expert Assistance",
      description:
        "Our support team is made up of experts who can guide you through any problems you encounter. From troubleshooting to product recommendations, weve got you covered.",
    },
    {
      id: 4,
      icon: "/Shopex/img4.jpg", 
      title: "Always Available",
      description:
        "Your satisfaction is our priority. Whether it's day or night, we are always available to help you resolve any concerns. Don't hesitate to contact us whenever you need assistance.",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-6 mb-12">
    {/* Header */}
      <h2 className="text-center text-[43px] font-bold text-blue-950 mb-8">
        What Shopex Offer!
      </h2>

    {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white shadow-lg rounded-lg p-12 text-center"
          >
    {/* Icon */}
        <div className="flex justify-center mb-4">
              <Image
                src={offer.icon}
                alt={offer.title}
                width={90}
                height={60}
                className="object-contain"
              />
            </div>

    {/* Title */}
         <h3 className="text-lg font-semibold text-[#151875] mb-2 mt-4">
            {offer.title}
         </h3>

    {/* Description */}
        <p className="text-gray-600 text-sm mt-4">{offer.description}</p>
    </div>
        ))}
      </div>
    </section>
  );
};