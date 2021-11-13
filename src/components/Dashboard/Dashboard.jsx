import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const DashBoard = () => {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(
      `https://shielded-brushlands-06342.herokuapp.com/checkAdmin/${user?.email}`
    )
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
      <ul className="dashboard-link">
        {user?.email ? (
          <li className="nav-link">
            <Link className="nav-link active text-white" to="/myOrder">
              My Order
            </Link>
          </li>
        ) : (
          <li></li>
        )}
        {user?.email ? (
          <li className="nav-link">
            <Link className="nav-link active text-white" to="/review">
              Review
            </Link>
          </li>
        ) : (
          <li></li>
        )}
        {user?.email ? (
          <li className="nav-link">
            <Link className="nav-link active text-white" to="/pay">
              Pay
            </Link>
          </li>
        ) : (
          <li></li>
        )}
        {isAdmin ? (
          <li className="nav-link">
            <Link className="nav-link active text-white" to="/manageProducts">
              Manage Products
            </Link>
          </li>
        ) : (
          <li></li>
        )}
        {isAdmin ? (
          <li className="nav-link">
            <Link className="nav-link active text-white" to="/manageAll">
              Manage All Orders
            </Link>
          </li>
        ) : (
          <li></li>
        )}
        {isAdmin ? (
          <li className="nav-link">
            <Link className="nav-link active text-white" to="/addCar">
              Add A Car
            </Link>
          </li>
        ) : (
          <li></li>
        )}
        {isAdmin ? (
          <li className="nav-link">
            <Link className="nav-link active text-white" to="/makeAdmin">
              Make Admin
            </Link>
          </li>
        ) : (
          <li></li>
        )}
      </ul>
    </div>
  );
};

export default DashBoard;
