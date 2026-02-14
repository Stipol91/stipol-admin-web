import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Providers from "./pages/Providers";
import Bookings from "./pages/Bookings";
import Announcements from "./pages/Announcements";
import Ledger from "./pages/Ledger";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/providers" element={<Providers />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/ledger" element={<Ledger />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}
