import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RestaurantDetail from "./pages/RestaurantDetail";
import Orders from "./pages/Orders";
import Notifications from "./pages/Notifications";
import Saved from "./pages/Saved";
import Help from "./pages/Help";

// Placeholder components for routes we'll implement later
const ProfilePage = () => <div>Profile Page (Coming Soon)</div>;

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/favorites" element={<Saved />} />
        <Route path="/help" element={<Help />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}
