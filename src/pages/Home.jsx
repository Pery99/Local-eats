import Header from "../components/Header";
import Filters from "../components/Filters";
import RestaurantList from "../components/RestaurantList";

export default function Home() {
  const handleFilterChange = (filters) => {
    // TODO: Implement filter logic
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

      <main className="container mx-auto px-4 py-8 -mt-10 relative z-10">
        <Filters onFilterChange={handleFilterChange} />
        <RestaurantList />
      </main>
    </div>
  );
}
