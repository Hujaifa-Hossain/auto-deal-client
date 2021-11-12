import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const DashBoard = () => {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  
  console.log(isAdmin);


  return (
    <div className="vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            {user?.email ? (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/myOrder"
                >
                  My Order
                </Link>
              </li>
            ) : (
              <li></li>
            )}
            {user?.email ? (
              <li className="nav-item">
                <Link className="nav-link active" to="/review">
                  Review
                </Link>
              </li>
            ) : (
              <li></li>
            )}
            {user?.email ? (
              <li className="nav-item">
                <Link className="nav-link active" to="/pay">
                  Pay
                </Link>
              </li>
            ) : (
              <li></li>
            )}
            {isAdmin? (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/manageProducts"
                >
                  Manage Products
                </Link>
              </li>
            ) : (
              <li></li>
            )}
            {isAdmin? (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/manageAll"
                >
                  Manage All Orders
                </Link>
              </li>
            ) : (
              <li></li>
            )}
            {isAdmin? (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/addCar"
                >
                  Add A Car
                </Link>
              </li>
            ) : (
              <li></li>
            )}
            {isAdmin? (
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/makeAdmin"
                >
                  Make Admin
                </Link>
              </li>
            ) : (
              <li></li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default DashBoard;
