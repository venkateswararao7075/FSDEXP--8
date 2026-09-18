import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <nav>
        <Link to="profile">Dashboard Profile</Link>{" "}
        <Link to="settings">Dashboard Settings</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default Dashboard;