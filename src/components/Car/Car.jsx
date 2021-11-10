import React from "react";
import { Link } from "react-router-dom";

const Car = (props) => {
  const { _id, name, image, description } = props.car;
  return (
    <div>
      <div className="card mb-3 bg-dark border-light">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description.slice(0, 120)}</p>
          <p className="card-text">
            <Link to={`/car/${_id}`}>
              <button className="btn btn-info">Buy Now</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Car;
