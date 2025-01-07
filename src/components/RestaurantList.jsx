import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const RestaurantCard = ({ restaurant, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Link
      to={`/restaurant/${restaurant.id}`}
      className="block group"
      style={{
        animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
        opacity: 0,
      }}
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1">
        <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
          <div
            className={`absolute inset-0 bg-gray-200 animate-pulse ${
              isLoaded ? "hidden" : "block"
            }`}
          />
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-2 right-2 bg-primary text-dark px-3 py-1 rounded-full text-sm font-medium shadow-lg">
            ⭐ {restaurant.rating}
          </div>
          {restaurant.isNew && (
            <div className="absolute top-2 left-2 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
              New
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-dark group-hover:text-accent transition-colors">
                {restaurant.name}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{restaurant.cuisine}</p>
            </div>
            <div className="text-right">
              <span className="text-sm font-medium text-gray-800">
                {restaurant.priceRange}
              </span>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-500">
              <svg
                className="w-4 h-4 mr-1 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {restaurant.distance} km away
            </div>
            <div className="flex items-center text-sm">
              <span
                className={`px-2 py-1 rounded-full ${
                  restaurant.isOpen
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {restaurant.isOpen ? "Open Now" : "Closed"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function RestaurantList() {
  const [isLoading, setIsLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setRestaurants([
        {
          id: 1,
          name: "Mama's Kitchen",
          cuisine: "Nigerian • Local Dishes",
          rating: 4.8,
          distance: 1.2,
          priceRange: "₦₦",
          isOpen: true,
          isNew: true,
          image:
            "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 2,
          name: "Jollof Express",
          cuisine: "Nigerian • Rice Dishes",
          rating: 4.6,
          distance: 0.8,
          priceRange: "₦2,000",
          isOpen: true,
          isNew: false,
          image:
            "https://images.unsplash.com/photo-1575920956925-0f3199a32e78?auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 3,
          name: "Suya King",
          cuisine: "Nigerian • Grills",
          rating: 4.7,
          distance: 2.0,
          priceRange: "₦6,000",
          isOpen: true,
          isNew: false,
          image:
            "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 4,
          name: "Calabar Kitchen",
          cuisine: "Nigerian • Seafood",
          rating: 4.5,
          distance: 3.1,
          priceRange: "₦₦10,000",
          isOpen: false,
          isNew: false,
          image:
            "https://images.unsplash.com/photo-1576097449798-7c7f90e1248a?auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 5,
          name: "Amala Zone",
          cuisine: "Nigerian • Yoruba Cuisine",
          rating: 4.9,
          distance: 1.5,
          priceRange: "₦900",
          isOpen: true,
          isNew: true,
          image:
            "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 6,
          name: "Pepper Soup Hub",
          cuisine: "Nigerian • Soups",
          rating: 4.4,
          distance: 0.5,
          priceRange: "₦4,000",
          isOpen: true,
          isNew: false,
          image:
            "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 7,
          name: "Iya Basira's Place",
          cuisine: "Nigerian • Street Food",
          rating: 4.3,
          distance: 1.8,
          priceRange: "₦800 - ₦10,000",
          isOpen: true,
          isNew: false,
          image:
            "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 8,
          name: "Royal Pot",
          cuisine: "Nigerian • Buffet",
          rating: 4.7,
          distance: 2.5,
          priceRange: "₦600 - ₦55,000",
          isOpen: true,
          isNew: true,
          image:
            "https://images.unsplash.com/photo-1577303935007-0d306ee638cf?auto=format&fit=crop&w=800&q=80",
        },
        {
          id: 9,
          name: "Boli & Fish Express",
          cuisine: "Nigerian • Street Food",
          rating: 4.2,
          distance: 0.3,
          priceRange: "₦700 - ₦3,000",
          isOpen: true,
          isNew: false,
          image:
            "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=800&q=80",
        },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 md:h-56 lg:h-64 bg-gray-200 animate-pulse" />
              <div className="p-4 space-y-3">
                <div className="h-6 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
