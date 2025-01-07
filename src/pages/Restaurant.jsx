import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Gallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
        <img
          src={images[selectedImage]}
          alt="Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative rounded-lg overflow-hidden h-24 ${
              selectedImage === index ? "ring-2 ring-primary" : ""
            }`}
          >
            <img src={image} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

const MenuItem = ({ item }) => (
  <div className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between">
      <div>
        <h3 className="font-medium text-dark">{item.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
      </div>
      <span className="text-lg font-semibold text-dark">${item.price}</span>
    </div>
    {item.tags && (
      <div className="mt-2 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>
    )}
  </div>
);

const Review = ({ review }) => (
  <div className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between">
      <div className="flex items-center space-x-4">
        <img
          src={review.userImage}
          alt={review.userName}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-medium text-dark">{review.userName}</h3>
          <div className="flex items-center space-x-1 mt-1">
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
        </div>
      </div>
      <span className="text-sm text-gray-500">{review.date}</span>
    </div>
    <p className="mt-4 text-gray-600">{review.comment}</p>
    {review.images && (
      <div className="mt-4 flex space-x-2">
        {review.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className="w-20 h-20 rounded-lg object-cover"
          />
        ))}
      </div>
    )}
  </div>
);

export default function Restaurant() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [activeTab, setActiveTab] = useState("menu");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setRestaurant({
        id,
        name: "Tasty Corner",
        cuisine: "American • Burgers",
        rating: 4.5,
        reviews: 328,
        priceRange: "$$$",
        address: "123 Main St, New York, NY 10001",
        hours: "10:00 AM - 10:00 PM",
        phone: "(555) 123-4567",
        images: [
          "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1565299585577-e4e457c63838?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1565299624381-b5e1464c1b1d?auto=format&fit=crop&w=800&q=80",
        ],
        menu: {
          popular: [
            {
              name: "Classic Burger",
              description:
                "Angus beef patty with lettuce, tomato, and special sauce",
              price: 12.99,
              tags: ["Popular", "Bestseller"],
            },
            {
              name: "Truffle Fries",
              description: "Hand-cut fries with truffle oil and parmesan",
              price: 8.99,
              tags: ["Vegetarian"],
            },
          ],
        },
        reviews: [
          {
            userName: "John Doe",
            userImage: "https://randomuser.me/api/portraits/men/1.jpg",
            rating: 5,
            date: "2 days ago",
            comment:
              "Amazing food and great service! The burger was cooked perfectly.",
            images: [
              "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=200&q=80",
            ],
          },
          {
            userName: "Jane Smith",
            userImage: "https://randomuser.me/api/portraits/women/1.jpg",
            rating: 4,
            date: "1 week ago",
            comment: "Delicious food but the wait was a bit long.",
          },
        ],
      });
      setIsLoading(false);
    }, 1000);
  }, [id]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 mt-16">
        <div className="animate-pulse space-y-4">
          <div className="h-[400px] bg-gray-200 rounded-xl" />
          <div className="h-8 bg-gray-200 rounded w-1/4" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-24 bg-gray-200 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!restaurant) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-16 md:h-20" /> {/* Spacer for fixed header */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            to="/"
            className="text-accent hover:text-dark transition-colors"
          >
            ← Back to Restaurants
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Gallery images={restaurant.images} />

            {/* Tabs */}
            <div className="border-b border-gray-200">
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
            <div className="animate-fade-in">
              {activeTab === "menu" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold text-dark mb-4">
                      Popular Items
                    </h2>
                    <div className="space-y-4">
                      {restaurant.menu.popular.map((item, index) => (
                        <MenuItem key={index} item={item} />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="space-y-6">
                  {restaurant.reviews.map((review, index) => (
                    <Review key={index} review={review} />
                  ))}
                </div>
              )}

              {activeTab === "info" && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold text-dark mb-4">
                      Restaurant Information
                    </h2>
                    <div className="bg-white rounded-lg p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">
                            Address
                          </h3>
                          <p className="mt-1">{restaurant.address}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">
                            Hours
                          </h3>
                          <p className="mt-1">{restaurant.hours}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">
                            Phone
                          </h3>
                          <p className="mt-1">{restaurant.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-md sticky top-24">
              <h1 className="text-2xl font-bold text-dark">
                {restaurant.name}
              </h1>
              <p className="text-gray-600 mt-1">{restaurant.cuisine}</p>

              <div className="flex items-center mt-4">
                <div className="flex items-center">
                  <span className="text-primary font-semibold">
                    {restaurant.rating}
                  </span>
                  <div className="flex items-center ml-2">
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
                <span className="text-gray-500 ml-2">
                  ({restaurant.reviews} reviews)
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <button className="w-full btn btn-primary">
                  Reserve a Table
                </button>
                <button className="w-full btn btn-secondary">
                  Order Delivery
                </button>
              </div>

              <hr className="my-6" />

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Price Range
                  </h3>
                  <p className="mt-1 font-medium">{restaurant.priceRange}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Hours Today
                  </h3>
                  <p className="mt-1">{restaurant.hours}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                  <p className="mt-1">{restaurant.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
