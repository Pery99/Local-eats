import { useState } from "react";

export default function Filters({ onFilterChange }) {
  const [activeFilters, setActiveFilters] = useState({
    sortBy: "rating",
    cuisine: "all",
    priceRange: "all",
    distance: 5,
    dietary: [],
    features: [],
  });

  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const dietaryOptions = [
    { id: "halal", label: "Halal" },
    { id: "vegetarian", label: "Vegetarian" },
    { id: "vegan", label: "Vegan" },
    { id: "gluten-free", label: "Gluten Free" },
  ];

  const featureOptions = [
    { id: "delivery", label: "Delivery" },
    { id: "takeout", label: "Takeout" },
    { id: "outdoor-seating", label: "Outdoor Seating" },
    { id: "events", label: "Events & Parties" },
    { id: "live-cooking", label: "Live Cooking" },
  ];

  const cuisineTypes = [
    "All",
    "Yoruba",
    "Igbo",
    "Hausa",
    "Calabar",
    "Street Food",
    "Grills",
    "Soups",
    "Rice Dishes",
    "Swallow",
  ];

  const handleFilterChange = (key, value) => {
    const newFilters = { ...activeFilters, [key]: value };
    setActiveFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const toggleArrayFilter = (key, value) => {
    const array = activeFilters[key];
    const newArray = array.includes(value)
      ? array.filter((item) => item !== value)
      : [...array, value];
    handleFilterChange(key, newArray);
  };

  const FilterButton = ({ label, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
        isActive
          ? "bg-accent text-white shadow-md"
          : "bg-white text-gray-600 hover:bg-gray-100"
      }`}
    >
      {label}
    </button>
  );

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsFilterDrawerOpen(true)}
          className="w-full btn btn-secondary flex items-center justify-center space-x-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
          <span>Filters</span>
        </button>
      </div>

      {/* Desktop Filters */}
      <div className="hidden md:block bg-white shadow-md rounded-lg p-6 mb-6 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sort and Basic Filters */}
          <div className="space-y-4 lg:border-r lg:pr-6">
            <h3 className="font-semibold text-dark">Sort By</h3>
            <select
              value={activeFilters.sortBy}
              onChange={(e) => handleFilterChange("sortBy", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
            >
              <option value="rating">Rating</option>
              <option value="distance">Distance</option>
              <option value="price">Price</option>
              <option value="popularity">Most Popular</option>
              <option value="newest">Newest</option>
            </select>

            <h3 className="font-semibold text-dark pt-4">Price Range</h3>
            <div className="flex flex-wrap gap-2">
              {["₦", "₦₦", "₦₦₦"].map((price) => (
                <FilterButton
                  key={price}
                  label={price}
                  isActive={activeFilters.priceRange === price}
                  onClick={() => handleFilterChange("priceRange", price)}
                />
              ))}
            </div>
          </div>

          {/* Cuisine Types */}
          <div className="space-y-4 lg:border-r lg:pr-6">
            <h3 className="font-semibold text-dark">Cuisine Type</h3>
            <div className="flex flex-wrap gap-2">
              {cuisineTypes.map((cuisine) => (
                <FilterButton
                  key={cuisine}
                  label={cuisine}
                  isActive={activeFilters.cuisine === cuisine.toLowerCase()}
                  onClick={() =>
                    handleFilterChange("cuisine", cuisine.toLowerCase())
                  }
                />
              ))}
            </div>
          </div>

          {/* Dietary Preferences */}
          <div className="space-y-4 lg:border-r lg:pr-6">
            <h3 className="font-semibold text-dark">Dietary</h3>
            <div className="flex flex-wrap gap-2">
              {dietaryOptions.map((option) => (
                <FilterButton
                  key={option.id}
                  label={option.label}
                  isActive={activeFilters.dietary.includes(option.id)}
                  onClick={() => toggleArrayFilter("dietary", option.id)}
                />
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="font-semibold text-dark">Features</h3>
            <div className="flex flex-wrap gap-2">
              {featureOptions.map((option) => (
                <FilterButton
                  key={option.id}
                  label={option.label}
                  isActive={activeFilters.features.includes(option.id)}
                  onClick={() => toggleArrayFilter("features", option.id)}
                />
              ))}
            </div>

            <h3 className="font-semibold text-dark pt-4">
              Distance: {activeFilters.distance} km
            </h3>
            <input
              type="range"
              min="1"
              max="20"
              value={activeFilters.distance}
              onChange={(e) =>
                handleFilterChange("distance", parseInt(e.target.value))
              }
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div
        className={`fixed inset-0 bg-black/50 z-[101] md:hidden transition-opacity duration-300 ${
          isFilterDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsFilterDrawerOpen(false)}
      >
        <div
          className={`fixed inset-y-0 right-0 w-[280px] bg-white shadow-lg transition-transform duration-300 transform ${
            isFilterDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-dark">Filters</span>
              <button
                onClick={() => setIsFilterDrawerOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-6 max-h-[70vh] overflow-y-auto">
              {/* Mobile Sort */}
              <div>
                <h3 className="font-semibold text-dark mb-2">Sort By</h3>
                <select
                  value={activeFilters.sortBy}
                  onChange={(e) => handleFilterChange("sortBy", e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                >
                  <option value="rating">Rating</option>
                  <option value="distance">Distance</option>
                  <option value="price">Price</option>
                  <option value="popularity">Most Popular</option>
                  <option value="newest">Newest</option>
                </select>
              </div>

              {/* Mobile Price Range */}
              <div>
                <h3 className="font-semibold text-dark mb-2">Price Range</h3>
                <div className="flex flex-wrap gap-2">
                  {["₦", "₦₦", "₦₦₦"].map((price) => (
                    <FilterButton
                      key={price}
                      label={price}
                      isActive={activeFilters.priceRange === price}
                      onClick={() => handleFilterChange("priceRange", price)}
                    />
                  ))}
                </div>
              </div>

              {/* Mobile Cuisine */}
              <div>
                <h3 className="font-semibold text-dark mb-2">Cuisine Type</h3>
                <div className="flex flex-wrap gap-2">
                  {cuisineTypes.map((cuisine) => (
                    <FilterButton
                      key={cuisine}
                      label={cuisine}
                      isActive={activeFilters.cuisine === cuisine.toLowerCase()}
                      onClick={() =>
                        handleFilterChange("cuisine", cuisine.toLowerCase())
                      }
                    />
                  ))}
                </div>
              </div>

              {/* Mobile Dietary */}
              <div>
                <h3 className="font-semibold text-dark mb-2">Dietary</h3>
                <div className="flex flex-wrap gap-2">
                  {dietaryOptions.map((option) => (
                    <FilterButton
                      key={option.id}
                      label={option.label}
                      isActive={activeFilters.dietary.includes(option.id)}
                      onClick={() => toggleArrayFilter("dietary", option.id)}
                    />
                  ))}
                </div>
              </div>

              {/* Mobile Features */}
              <div>
                <h3 className="font-semibold text-dark mb-2">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {featureOptions.map((option) => (
                    <FilterButton
                      key={option.id}
                      label={option.label}
                      isActive={activeFilters.features.includes(option.id)}
                      onClick={() => toggleArrayFilter("features", option.id)}
                    />
                  ))}
                </div>
              </div>

              {/* Mobile Distance */}
              <div>
                <h3 className="font-semibold text-dark mb-2">
                  Distance: {activeFilters.distance} km
                </h3>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={activeFilters.distance}
                  onChange={(e) =>
                    handleFilterChange("distance", parseInt(e.target.value))
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                />
              </div>
            </div>

            <div className="mt-6 flex space-x-4">
              <button
                onClick={() => setIsFilterDrawerOpen(false)}
                className="flex-1 btn btn-secondary"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onFilterChange?.(activeFilters);
                  setIsFilterDrawerOpen(false);
                }}
                className="flex-1 btn btn-primary"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
