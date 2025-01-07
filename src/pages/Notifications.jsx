import { useState } from "react";
import Header from "../components/Header";

const NotificationItem = ({ notification }) => (
  <div
    className={`p-4 border-b border-gray-100 ${
      notification.isRead ? "bg-white" : "bg-primary/5"
    }`}
  >
    <div className="flex items-start gap-4">
      <div className={`p-2 rounded-full ${notification.iconBg}`}>
        <span className="text-2xl">{notification.icon}</span>
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-dark">{notification.title}</h3>
        <p className="text-gray-600 text-sm mt-1">{notification.message}</p>
        <div className="flex items-center gap-4 mt-2">
          <span className="text-xs text-gray-500">{notification.time}</span>
          {notification.action && (
            <button className="text-sm text-accent hover:text-dark transition-colors">
              {notification.action}
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default function Notifications() {
  const [notifications] = useState([
    {
      id: 1,
      title: "Order Delivered",
      message:
        "Your order from Mama's Kitchen has been delivered. Enjoy your meal!",
      time: "2 minutes ago",
      icon: "✅",
      iconBg: "bg-green-100",
      isRead: false,
      action: "Rate Order",
    },
    {
      id: 2,
      title: "Special Offer",
      message: "Get 20% off on your next order from Jollof Express!",
      time: "1 hour ago",
      icon: "🎉",
      iconBg: "bg-yellow-100",
      isRead: false,
      action: "View Offer",
    },
    {
      id: 3,
      title: "Order Confirmation",
      message: "Your order #12345 has been confirmed and is being prepared.",
      time: "2 hours ago",
      icon: "🛵",
      iconBg: "bg-blue-100",
      isRead: true,
      action: "Track Order",
    },
    {
      id: 4,
      title: "New Restaurant",
      message: "Suya King is now available in your area!",
      time: "1 day ago",
      icon: "🎊",
      iconBg: "bg-purple-100",
      isRead: true,
      action: "Explore Menu",
    },
    {
      id: 5,
      title: "Weekend Special",
      message: "Free delivery on orders above ₦5000 this weekend!",
      time: "2 days ago",
      icon: "🚚",
      iconBg: "bg-orange-100",
      isRead: true,
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8 mt-[100px] md:mt-[80px]">
        {/* Notifications Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-dark">
            Notifications
          </h1>
          <button className="text-sm text-accent hover:text-dark transition-colors">
            Mark all as read
          </button>
        </div>

        {/* Notifications List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
              />
            ))
          ) : (
            <div className="p-8 text-center">
              <div className="text-4xl mb-4">📭</div>
              <h3 className="text-lg font-medium text-dark mb-2">
                No notifications yet
              </h3>
              <p className="text-gray-600">
                We'll notify you when there's something new
              </p>
            </div>
          )}
        </div>

        {/* Load More */}
        {notifications.length > 0 && (
          <div className="text-center mt-6">
            <button className="text-accent hover:text-dark transition-colors">
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
