import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const SavedItem = ({ item, onRemove }) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
    <div className="relative h-48">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover"
      />
      <button
        onClick={() => onRemove(item.id)}
        className="absolute top-2 right-2 p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
      >
        <svg
          className="w-5 h-5 text-red-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {item.type === "restaurant" && (
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-white/90 rounded-full text-sm">
          {item.rating} ⭐
        </div>
      )}
    </div>
    <div className="p-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-dark">{item.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{item.description}</p>
        </div>
        {item.type === "dish" && (
          <span className="font-medium text-dark">₦{item.price}</span>
        )}
      </div>
      <div className="mt-4">
        <Link
          to={
            item.type === "restaurant"
              ? `/restaurant/${item.id}`
              : `/restaurant/${item.restaurantId}`
          }
          className="btn btn-primary w-full"
        >
          {item.type === "restaurant" ? "View Restaurant" : "Order Now"}
        </Link>
      </div>
    </div>
  </div>
);

export default function Saved() {
  const [activeTab, setActiveTab] = useState("restaurants");
  const [savedItems, setSavedItems] = useState({
    restaurants: [
      {
        id: 1,
        type: "restaurant",
        name: "Mama's Kitchen",
        description: "Nigerian • Local Dishes",
        rating: 4.8,
        image:
          "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 2,
        type: "restaurant",
        name: "Suya King",
        description: "Nigerian • Grills",
        rating: 4.7,
        image:
          "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
      },
    ],
    dishes: [
      {
        id: 1,
        type: "dish",
        name: "Jollof Rice Special",
        description: "With grilled chicken and plantain",
        price: "2500",
        restaurantId: 1,
        image:
          "https://images.unsplash.com/photo-1575920956925-0f3199a32e78?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 2,
        type: "dish",
        name: "Pounded Yam & Egusi",
        description: "With assorted meat",
        price: "3000",
        restaurantId: 1,
        image:
          "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
      },
    ],
  });

  const handleRemove = (id) => {
    setSavedItems((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].filter((item) => item.id !== id),
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8 mt-[100px] md:mt-[80px]">
        {/* Page Header */}
        <h1 className="text-2xl md:text-3xl font-bold text-dark mb-6">
          Saved Items
        </h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab("restaurants")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "restaurants"
                ? "bg-accent text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Restaurants
          </button>
          <button
            onClick={() => setActiveTab("dishes")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "dishes"
                ? "bg-accent text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Dishes
          </button>
        </div>

        {/* Content */}
        {savedItems[activeTab].length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedItems[activeTab].map((item) => (
              <SavedItem key={item.id} item={item} onRemove={handleRemove} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔖</div>
            <h3 className="text-lg font-medium text-dark mb-2">
              No saved {activeTab} yet
            </h3>
            <p className="text-gray-600 mb-6">
              Save your favorite {activeTab} for quick access
            </p>
            <Link to="/" className="btn btn-primary">
              Explore {activeTab}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
