import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useContext } from "react";

import Home from "./Home.jsx";
import About from "./About.jsx";
import Dashboard from "./Dashboard.jsx";
import UserProfile from "./UserProfile.jsx";
import NotFound from "./NotFound.jsx";

import { ThemeContext } from "./ThemeContext.jsx";

function App() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      <h1>React Router and Screen Updating</h1>

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

      <button onClick={toggleTheme}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <hr />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route
          path="/user/:userId"
          element={<UserProfile />}
        />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </div>
  );
}

export default App;