import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="pt-5 pb-2 bg-dark text-white container">
        <div className="row gx-5">
          <div className="col-lg-4">
            <div className="bg-dark text-white">
              <h4>AUTO <span className="text-warning">DEAL</span></h4>
            </div>
            <div className="my-2">
              <p>
                <small> Hossain villa, Kuril, Dhaka</small>
              </p>
              <p>
                <small> Official: 21hujaifa@gmail.com</small>
              </p>
              <p>
                <small> Helpline: 01791158039</small>
              </p>
            </div>
          </div>
          <div className="col-lg-2">
            <div>
              <p>Quick Links</p>
              <ul className="p-0 bg-dark text-start">
                <li className="list-group-item bg-dark p-0">
                  <Link className="text-decoration-none text-white" to="/home">
                    Home
                  </Link>
                </li>
                <li className="list-group-item bg-dark p-0">
                  <Link
                    className="text-decoration-none text-white"
                    to="/AddDestination"
                  >
                    Add Service
                  </Link>
                </li>
                <li className="list-group-item bg-dark p-0">
                  <Link className="text-decoration-none text-white" to="/manage">
                    Manage
                  </Link>
                </li>
                <li className="list-group-item bg-dark  p-0">
                  <Link
                    className="text-decoration-none text-white"
                    to="/cart"
                  >
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div>
              <p>Quick Links</p>
              <ul className="p-0 bg-dark text-start">
                <li className="list-group-item bg-dark p-0">
                  <Link className="text-decoration-none text-white" to="/home">
                    Home
                  </Link>
                </li>
                <li className="list-group-item bg-dark p-0">
                  <Link
                    className="text-decoration-none text-white"
                    to="/AddDestination"
                  >
                    Add Service
                  </Link>
                </li>
                <li className="list-group-item bg-dark p-0">
                  <Link className="text-decoration-none text-white" to="/manage">
                    Manage
                  </Link>
                </li>
                <li className="list-group-item bg-dark  p-0">
                  <Link
                    className="text-decoration-none text-white"
                    to="/cart"
                  >
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-center">
              <p>You can pay with</p>
              <img className="img-fluid h-100"
                src="https://www.sslwireless.com/wp-content/uploads/2020/05/Payment-gateway-service.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      <p className="text-white text-center mt-3">Copyright © 2021 Traveller</p>
      </div>
    </div>
  );
};

export default Footer;