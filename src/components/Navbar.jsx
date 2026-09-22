import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        🏭 Hosiery Manager
      </div>

      <div className="navbar-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/workers"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Workers
        </NavLink>

        <NavLink
          to="/production"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Production
        </NavLink>

        <NavLink
          to="/payments"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Payments
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;