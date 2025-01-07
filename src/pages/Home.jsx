import Header from "../components/Header";
import Filters from "../components/Filters";
import RestaurantList from "../components/RestaurantList";
import { Link } from "react-router-dom";

export default function Home() {
  const handleFilterChange = (filters) => {
    console.log("Filters changed:", filters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-[140px] md:pt-[140px] pb-20 bg-gradient-to-b from-primary/10 to-white">
        {/* Decorative Elements */}
        <div className="absolute left-0 top-1/3 -translate-y-1/2 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
        <div className="absolute right-0 top-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-4 md:mb-6 animate-fade-in">
              Discover Authentic
              <span className="text-primary block mt-2">Nigerian Cuisine</span>
            </h1>
            <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 animate-fade-in delay-100 px-4">
              From local delicacies to street food favorites, experience the
              rich flavors of Nigeria at your doorstep
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center animate-fade-in delay-200 px-4">
              <button className="w-full sm:w-auto btn btn-primary px-6 md:px-8 py-3 text-base md:text-lg shadow-lg hover:shadow-xl">
                Order Now
              </button>
              <button className="w-full sm:w-auto btn btn-secondary px-6 md:px-8 py-3 text-base md:text-lg">
                Explore Restaurants
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-16 text-center animate-fade-in delay-300">
              <div className="p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl md:text-3xl font-bold text-dark mb-1 md:mb-2">
                  500+
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  Local Restaurants
                </div>
              </div>
              <div className="p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl md:text-3xl font-bold text-dark mb-1 md:mb-2">
                  100+
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  Nigerian Dishes
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="text-2xl md:text-3xl font-bold text-dark mb-1 md:mb-2">
                  25 mins
                </div>
                <div className="text-sm md:text-base text-gray-600">
                  Average Delivery Time
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8 -mt-4 relative z-10">
        <Filters onFilterChange={handleFilterChange} />
        <RestaurantList />
      </main>

      {/* Featured Restaurants Section */}
      <section className="container mx-auto px-4 -mt-10 mb-12 relative z-20">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-dark">
              Featured Restaurants
            </h2>
            <button className="text-accent hover:text-dark transition-colors text-sm md:text-base font-medium">
              View All →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                id: 1,
                name: "Mama's Kitchen",
                image:
                  "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?auto=format&fit=crop&w=800&q=80",
                cuisine: "Nigerian • Local Dishes",
                rating: 4.8,
                featuredDish: "Special Jollof Rice",
                deliveryTime: "25-35",
              },
              {
                id: 2,
                name: "Suya King",
                image:
                  "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80",
                cuisine: "Nigerian • Grills",
                rating: 4.7,
                featuredDish: "Special Suya Platter",
                deliveryTime: "20-30",
              },
              {
                id: 3,
                name: "Amala Zone",
                image:
                  "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80",
                cuisine: "Nigerian • Yoruba Cuisine",
                rating: 4.9,
                featuredDish: "Amala & Ewedu Special",
                deliveryTime: "30-40",
              },
              {
                id: 4,
                name: "Royal Pot",
                image:
                  "https://images.unsplash.com/photo-1577303935007-0d306ee638cf?auto=format&fit=crop&w=800&q=80",
                cuisine: "Nigerian • Buffet",
                rating: 4.7,
                featuredDish: "Mixed Grill Platter",
                deliveryTime: "35-45",
              },
            ].map((restaurant) => (
              <Link
                key={restaurant.id}
                to={`/restaurant/${restaurant.id}`}
                className="group bg-white rounded-lg border border-gray-100 hover:border-accent/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-40 rounded-t-lg overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-2 right-2 bg-white/90 text-dark px-2 py-1 rounded-full text-sm font-medium">
                    ⭐ {restaurant.rating}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-dark group-hover:text-accent transition-colors">
                    {restaurant.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {restaurant.cuisine}
                  </p>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-sm text-accent font-medium">
                      {restaurant.featuredDish}
                    </p>
                    <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {restaurant.deliveryTime} mins
                      </span>
                      <span className="text-accent font-medium">Order Now</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-12 mb-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real feedback from food lovers who have experienced the authentic
            taste of Nigerian cuisine through Local Eats
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            {
              id: 1,
              name: "Olayinka Adebayo",
              image: "https://randomuser.me/api/portraits/women/1.jpg",
              rating: 5,
              comment:
                "The pounded yam and egusi soup from Mama's Kitchen is exactly how my grandmother makes it! The portions are generous and the delivery was quick. This is my go-to spot for authentic Yoruba cuisine!",
              date: "2 days ago",
              order: "Pounded Yam & Egusi Soup",
              restaurant: "Mama's Kitchen",
            },
            {
              id: 2,
              name: "Chisom Okonkwo",
              image: "https://randomuser.me/api/portraits/men/2.jpg",
              rating: 5,
              comment:
                "Best suya in Lagos! The meat is perfectly seasoned with yaji, and they don't compromise on quality. The peppered goat meat is a must-try. Will definitely order again!",
              date: "1 week ago",
              order: "Special Suya Platter & Peppered Goat",
              restaurant: "Suya King",
            },
            {
              id: 3,
              name: "Amina Ibrahim",
              image: "https://randomuser.me/api/portraits/women/3.jpg",
              rating: 5,
              comment:
                "Finally found the perfect amala and ewedu! The gbegiri soup was creamy and delicious. The abula combo was perfect, and they even included extra fish. This is real Lagos food!",
              date: "3 days ago",
              order: "Amala, Ewedu & Gbegiri Combo",
              restaurant: "Amala Zone",
            },
          ].map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow relative"
            >
              <div className="absolute top-6 right-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
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

              <div className="flex items-center space-x-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-dark">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>

              <blockquote className="mt-4 text-gray-600">
                "{review.comment}"
              </blockquote>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm">
                  <div className="text-gray-500">
                    Ordered: <span className="text-accent">{review.order}</span>
                  </div>
                  <div className="text-gray-500">
                    from <span className="text-dark">{review.restaurant}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Reviews Button */}
        <div className="text-center mt-8">
          <button className="btn btn-secondary">View More Reviews</button>
        </div>
      </section>

      {/* Mobile App Promotion */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark mb-6">
                Get the Local Eats App
                <span className="block text-primary mt-2">
                  Order On the Go!
                </span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                Download our mobile app to enjoy a seamless food ordering
                experience with exclusive offers and real-time order tracking.
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    icon: (
                      <svg
                        className="w-8 h-8 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ),
                    title: "Real-time Tracking",
                    description: "Track your order from restaurant to doorstep",
                  },
                  {
                    icon: (
                      <svg
                        className="w-8 h-8 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ),
                    title: "Exclusive Offers",
                    description: "Get app-only discounts and special deals",
                  },
                  {
                    icon: (
                      <svg
                        className="w-8 h-8 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                    ),
                    title: "Loyalty Rewards",
                    description: "Earn points with every order and get rewards",
                  },
                  {
                    icon: (
                      <svg
                        className="w-8 h-8 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    ),
                    title: "Easy Reordering",
                    description: "Quick access to your favorite meals",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-accent/10 rounded-lg p-3">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="btn bg-black text-white hover:bg-gray-800 flex items-center justify-center space-x-2 px-6 py-3">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.5 1.3-.96 2.58-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.32 2.32-1.89 4.27-3.74 4.25z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </button>
                <button className="btn bg-black text-white hover:bg-gray-800 flex items-center justify-center space-x-2 px-6 py-3">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.891 12l1.807-2.419zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.635z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>

            {/* App Screenshots */}
            <div className="relative hidden lg:block">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
              <div className="relative">
                <img
                  src="https://placehold.co/280x560/png"
                  alt="LocalEats Mobile App"
                  className="absolute top-0 left-0 w-56 rounded-3xl shadow-2xl transform -rotate-12 translate-x-12"
                />
                <img
                  src="https://placehold.co/280x560/png"
                  alt="LocalEats Mobile App"
                  className="relative z-10 w-64 rounded-3xl shadow-2xl mx-auto"
                />
                <img
                  src="https://placehold.co/280x560/png"
                  alt="LocalEats Mobile App"
                  className="absolute top-0 right-0 w-56 rounded-3xl shadow-2xl transform rotate-12 -translate-x-12"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">
              Stay Updated with Local Eats
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for exclusive deals, new restaurants,
              and local food stories delivered to your inbox.
            </p>

            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <form className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-white/50"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary px-8 py-3 whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>

              <div className="mt-4 text-sm text-gray-500 text-center">
                <p>
                  By subscribing, you agree to our{" "}
                  <Link
                    to="/privacy"
                    className="text-accent hover:text-dark underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and consent to receive updates from Local Eats.
                </p>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-100">
                {[
                  {
                    icon: (
                      <svg
                        className="w-6 h-6 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v13m0-13V6a4 4 0 00-4-4H5.45a4 4 0 00-3.841 2.855l-1.333 4A4 4 0 004.109 14h1.557a4 4 0 003.841-2.855l1.333-4A4 4 0 0012 6v2zm0 0v13m0-13h7a4 4 0 014 4v6a4 4 0 01-4 4h-7"
                        />
                      </svg>
                    ),
                    title: "Exclusive Offers",
                    description: "Be the first to know about special deals",
                  },
                  {
                    icon: (
                      <svg
                        className="w-6 h-6 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        />
                      </svg>
                    ),
                    title: "New Restaurants",
                    description:
                      "Discover the latest additions to our platform",
                  },
                  {
                    icon: (
                      <svg
                        className="w-6 h-6 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                        />
                      </svg>
                    ),
                    title: "Food Stories",
                    description: "Local cuisine news and cultural insights",
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">{benefit.icon}</div>
                    <div>
                      <h3 className="text-sm font-semibold text-dark">
                        {benefit.title}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Main Footer */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-dark">LE</span>
                </div>
                <span className="text-xl font-bold text-gray-800">
                  Local<span className="text-primary">Eats</span>
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                Bringing authentic Nigerian cuisine to your doorstep. Experience the rich flavors and cultural heritage of Nigeria through our local restaurants.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-gray-800 font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-gray-600 hover:text-primary transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/partner" className="text-gray-600 hover:text-primary transition-colors">
                    Partner with Us
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-600 hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-gray-800 font-semibold mb-6">Support</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/help" className="text-gray-600 hover:text-primary transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/safety" className="text-gray-600 hover:text-primary transition-colors">
                    Safety
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-600 hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-600 hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/feedback" className="text-gray-600 hover:text-primary transition-colors">
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-gray-800 font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600">123 Main Street, Lagos, Nigeria</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-600">support@localeats.com</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-600">+234 123 456 7890</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-600 mb-4 md:mb-0">
                © {new Date().getFullYear()} LocalEats. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <Link to="/terms" className="text-gray-600 hover:text-primary transition-colors">
                  Terms
                </Link>
                <Link to="/privacy" className="text-gray-600 hover:text-primary transition-colors">
                  Privacy
                </Link>
                <Link to="/cookies" className="text-gray-600 hover:text-primary transition-colors">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
