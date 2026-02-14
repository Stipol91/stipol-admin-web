import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

export default function Dashboard() {
  const [usersCount, setUsersCount] = useState(0);
  const [providersCount, setProvidersCount] = useState(0);
  const [bookingsCount, setBookingsCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const usersSnap = await getDocs(collection(db, "users"));
      const providersSnap = await getDocs(collection(db, "providers"));
      const bookingsSnap = await getDocs(collection(db, "bookings"));

      setUsersCount(usersSnap.size);
      setProvidersCount(providersSnap.size);
      setBookingsCount(bookingsSnap.size);
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <div className="cards">
        <div>Users: {usersCount}</div>
        <div>Providers: {providersCount}</div>
        <div>Bookings: {bookingsCount}</div>
      </div>
    </div>
  );
}
