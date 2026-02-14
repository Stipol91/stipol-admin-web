import { useState } from "react";
import { auth, db } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userRef = doc(db, "users", loginId);
      const userSnap = await getDoc(userRef);
      if (!userSnap.exists()) throw new Error("User not found");

      const email = userSnap.data().email;
      await signInWithEmailAndPassword(auth, email, password);

      if (userSnap.data().role !== "admin")
        throw new Error("Unauthorized");

      navigate("/dashboard");

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-page">
      <h2>Admin Login</h2>
      <input placeholder="Login ID" value={loginId} onChange={e=>setLoginId(e.target.value)}/>
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  );
}
