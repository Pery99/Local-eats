import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";

const MenuSection = ({ title, items }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-dark mb-4">{title}</h3>
    <div className="grid gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow flex justify-between items-start"
        >
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h4 className="text-lg font-medium text-dark">{item.name}</h4>
              {item.isPopular && (
                <span className="px-2 py-1 bg-primary/10 text-dark text-xs rounded-full">
                  Popular
                </span>
              )}
            </div>
            <p className="text-gray-600 text-sm mt-1">{item.description}</p>
            {item.tags && (
              <div className="flex gap-2 mt-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="text-right">
            <span className="text-lg font-semibold text-dark">
              ₦{item.price}
            </span>
            <button className="block mt-2 text-sm text-accent hover:text-dark transition-colors">
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ReviewCard = ({ review }) => {
  if (!review) return null;

  return (
    <div className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={review.userImage}
            alt={review.userName}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-medium text-dark">{review.userName}</h4>
            <div className="flex items-center mt-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating ? "text-primary" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500 ml-2">{review.date}</span>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-gray-600">{review.comment}</p>
      {review.images && review.images.length > 0 && (
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {review.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Review image ${index + 1}`}
              className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function RestaurantDetail() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("menu");
  const [restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setRestaurant({
        id,
        name: "Mama's Kitchen",
        cuisine: "Nigerian • Local Dishes",
        rating: 4.8,
        reviewCount: 328,
        priceRange: "₦₦",
        isOpen: true,
        address: "123 Herbert Macaulay Way, Yaba, Lagos",
        phone: "+234 801 234 5678",
        email: "info@mamaskitchen.com",
        hours: {
          monday: "10:00 AM - 10:00 PM",
          tuesday: "10:00 AM - 10:00 PM",
          wednesday: "10:00 AM - 10:00 PM",
          thursday: "10:00 AM - 10:00 PM",
          friday: "10:00 AM - 11:00 PM",
          saturday: "11:00 AM - 11:00 PM",
          sunday: "11:00 AM - 9:00 PM",
        },
        menu: {
          "Popular Dishes": [
            {
              name: "Jollof Rice Special",
              description:
                "Smoky jollof rice served with grilled chicken, plantain, and coleslaw",
              price: "2500",
              isPopular: true,
              tags: ["Bestseller", "Spicy"],
            },
            {
              name: "Pounded Yam & Egusi",
              description:
                "Smooth pounded yam with rich egusi soup and assorted meat",
              price: "3000",
              isPopular: true,
              tags: ["Traditional"],
            },
          ],
          "Main Dishes": [
            {
              name: "Ofada Rice & Sauce",
              description:
                "Local rice served with special ofada sauce and assorted meat",
              price: "2800",
              tags: ["Local", "Spicy"],
            },
            {
              name: "Amala & Ewedu",
              description: "Soft amala served with ewedu soup and gbegiri",
              price: "2500",
              tags: ["Traditional"],
            },
          ],
        },
        reviews: [
          {
            userName: "Oluwaseun A.",
            userImage: "https://randomuser.me/api/portraits/men/1.jpg",
            rating: 5,
            date: "2 days ago",
            comment:
              "Best jollof rice in Lagos! The smoky flavor is unmatched.",
            images: [
              "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?auto=format&fit=crop&w=200&q=80",
            ],
          },
          {
            userName: "Chioma N.",
            userImage: "https://randomuser.me/api/portraits/women/2.jpg",
            rating: 4,
            date: "1 week ago",
            comment:
              "Great food but the wait time was a bit long. Will still come back though!",
          },
        ],
      });
      setIsLoading(false);
    }, 1000);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8 mt-[100px] md:mt-[80px]">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="h-[400px] bg-gray-200 rounded-lg" />
          </div>
        </div>
      </div>
    );
  }

  if (!restaurant) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8 mt-[100px] md:mt-[80px]">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-accent hover:text-dark transition-colors mb-6"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Restaurants
        </Link>

        {/* Restaurant Header */}
        <div className="bg-white rounded-lg p-6 shadow-md mb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-dark">
                {restaurant.name}
              </h1>
              <p className="text-gray-600 mt-1">{restaurant.cuisine}</p>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <div className="flex items-center">
                  <span className="text-primary font-semibold mr-1">
                    {restaurant.rating}
                  </span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(restaurant.rating)
                            ? "text-primary"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <span className="text-gray-500">
                  ({restaurant.reviewCount} reviews)
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-sm whitespace-nowrap ${
                    restaurant.isOpen
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {restaurant.isOpen ? "Open Now" : "Closed"}
                </span>
              </div>
            </div>
            <div className="flex md:flex-col gap-2 md:gap-2 mt-4 md:mt-0">
              <button className="flex-1 md:w-full btn btn-primary">
                Order Online
              </button>
              <button className="flex-1 md:w-full btn btn-secondary">
                Book a Table
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {["menu", "reviews", "info"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === "menu" && (
              <div className="space-y-8">
                {Object.entries(restaurant.menu).map(([section, items]) => (
                  <MenuSection key={section} title={section} items={items} />
                ))}
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                {restaurant.reviews.map((review, index) => (
                  <ReviewCard key={index} review={review} />
                ))}
              </div>
            )}

            {activeTab === "info" && (
              <div className="bg-white rounded-lg p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-dark mb-2">
                    Location & Contact
                  </h3>
                  <p className="text-gray-600">{restaurant.address}</p>
                  <p className="text-gray-600 mt-2">{restaurant.phone}</p>
                  <p className="text-gray-600">{restaurant.email}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-dark mb-2">
                    Opening Hours
                  </h3>
                  <div className="space-y-2">
                    {Object.entries(restaurant.hours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between">
                        <span className="text-gray-600 capitalize">{day}</span>
                        <span className="text-gray-800">{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-md sticky top-24">
              <h3 className="text-lg font-semibold text-dark mb-4">
                Order Online
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Delivery Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your delivery address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                  />
                </div>
                <button className="w-full btn btn-primary">Start Order</button>
                <p className="text-sm text-gray-500 text-center">
                  Minimum order: ₦1,500
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
