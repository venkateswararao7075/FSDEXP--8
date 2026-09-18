import {
  BrowserRouter,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import UserProfile from "./UserProfile";
import NotFound from "./NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <h1>React Router v6 Example</h1>

        {/* Navigation Bar */}
        <nav className="navbar">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            About
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/user/101"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            User Profile
          </NavLink>

        </nav>

        {/* Routes */}
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          {/* Nested Routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route
              path="profile"
              element={<h3>Dashboard Profile</h3>}
            />

            <Route
              path="settings"
              element={<h3>Dashboard Settings</h3>}
            />
          </Route>

          {/* Dynamic Route */}
          <Route
            path="/user/:userId"
            element={<UserProfile />}
          />

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;