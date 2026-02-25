import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import CustomerHome from "../pages/CustomerHome";
import RestaurantDashboard from "../pages/RestaurantDashboard";
import AgentDashboard from "../pages/AgentDashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/customer" element={<CustomerHome />} />
      <Route path="/restaurant" element={<RestaurantDashboard />} />
      <Route path="/agent" element={<AgentDashboard />} />
    </Routes>
  );
}