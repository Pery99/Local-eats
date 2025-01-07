import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const OrderCard = ({ order }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-800";
      case "preparing":
        return "bg-yellow-100 text-yellow-800";
      case "on_the_way":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "delivered":
        return "Delivered";
      case "preparing":
        return "Preparing";
      case "on_the_way":
        return "On the way";
      case "cancelled":
        return "Cancelled";
      default:
        return status;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <Link
              to={`/restaurant/${order.restaurantId}`}
              className="font-medium text-dark hover:text-accent transition-colors"
            >
              {order.restaurantName}
            </Link>
            <div className="text-sm text-gray-600 mt-1">
              Order #{order.orderNumber}
            </div>
          </div>
          <span
            className={`px-2 py-1 rounded-full text-sm ${getStatusColor(
              order.status
            )}`}
          >
            {getStatusText(order.status)}
          </span>
        </div>

        <div className="mt-4 space-y-2">
          {order.items.map((item, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className="text-gray-600">
                {item.quantity}x {item.name}
              </span>
              <span className="text-dark">₦{item.price}</span>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 mt-4 pt-4">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">{order.date}</div>
            <div className="font-medium text-dark">Total: ₦{order.total}</div>
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          {order.status === "delivered" && !order.isRated && (
            <button className="btn btn-primary flex-1">Rate Order</button>
          )}
          {order.status === "on_the_way" && (
            <button className="btn btn-primary flex-1">Track Order</button>
          )}
          <button className="btn btn-secondary w-28">Details</button>
        </div>
      </div>
    </div>
  );
};

export default function Orders() {
  const [activeTab, setActiveTab] = useState("current");
  const [orders] = useState({
    current: [
      {
        id: 1,
        orderNumber: "ORD123456",
        restaurantId: 1,
        restaurantName: "Mama's Kitchen",
        status: "preparing",
        date: "Today, 2:30 PM",
        total: "5500",
        items: [
          { name: "Jollof Rice Special", quantity: 1, price: "2500" },
          { name: "Pounded Yam & Egusi", quantity: 1, price: "3000" },
        ],
      },
      {
        id: 2,
        orderNumber: "ORD123457",
        restaurantId: 2,
        restaurantName: "Suya King",
        status: "on_the_way",
        date: "Today, 1:15 PM",
        total: "4000",
        items: [{ name: "Suya Special", quantity: 2, price: "2000" }],
      },
    ],
    past: [
      {
        id: 3,
        orderNumber: "ORD123455",
        restaurantId: 1,
        restaurantName: "Mama's Kitchen",
        status: "delivered",
        date: "Yesterday, 7:30 PM",
        total: "5500",
        isRated: false,
        items: [
          { name: "Jollof Rice Special", quantity: 1, price: "2500" },
          { name: "Pounded Yam & Egusi", quantity: 1, price: "3000" },
        ],
      },
      {
        id: 4,
        orderNumber: "ORD123454",
        restaurantId: 3,
        restaurantName: "Calabar Kitchen",
        status: "cancelled",
        date: "2 days ago",
        total: "3500",
        items: [{ name: "Seafood Okra", quantity: 1, price: "3500" }],
      },
    ],
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8 mt-[100px] md:mt-[80px]">
        {/* Page Header */}
        <h1 className="text-2xl md:text-3xl font-bold text-dark mb-6">
          My Orders
        </h1>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab("current")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "current"
                ? "bg-accent text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Current Orders
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === "past"
                ? "bg-accent text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Order History
          </button>
        </div>

        {/* Orders List */}
        {orders[activeTab].length > 0 ? (
          <div className="space-y-4">
            {orders[activeTab].map((order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-lg font-medium text-dark mb-2">
              No {activeTab} orders
            </h3>
            <p className="text-gray-600 mb-6">
              {activeTab === "current"
                ? "You don't have any ongoing orders"
                : "You haven't placed any orders yet"}
            </p>
            <Link to="/" className="btn btn-primary">
              Browse Restaurants
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
