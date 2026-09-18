import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const { userId } = useParams();

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setLoading(true);
    setUser(null);

    const timer = setTimeout(() => {
      setUser({
        id: userId,
        name: "Surya",
        email: "surya@example.com"
      });

      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [userId]);

  if (loading) {
    return (
      <div>
        <h2>User Profile</h2>
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div>
      <h2>User Profile</h2>

      <p>User ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;