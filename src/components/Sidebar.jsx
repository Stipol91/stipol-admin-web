import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/users">Users</Link>
      <Link to="/providers">Providers</Link>
      <Link to="/bookings">Bookings</Link>
      <Link to="/announcements">Announcements</Link>
      <Link to="/ledger">Ledger</Link>
      <Link to="/settings">Settings</Link>
    </div>
  );
}
