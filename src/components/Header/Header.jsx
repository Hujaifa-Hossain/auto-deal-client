import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid col-lg-12">
        <Link className="navbar-brand" to="/">
          AUTO <span className="text-warning">DEAL</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/explore">
              Explore
              </Link>
            </li>
            <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/addCar"
                >
                  Add Car
                </Link>
              </li>
            {user?.email ? (
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/dashboard">
              Dashboard
              </Link>
            </li>
            ) : (
              <li></li>
            )}

            {user?.displayName ? (
              <li className="nav-item p-2">{user?.displayName}</li>
            ) : (
              <li className="nav-item"></li>
            )}

            {!user?.email ? (
              <li className="nav-item">
                <Link
                  className="nav-link bg-dark rounded px-3 text-white"
                  to="/login"
                >
                  Sign In
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link
                  onClick={logOut}
                  className="nav-link bg-dark rounded px-3 text-white"
                  to="/login"
                >
                  Log Out
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
