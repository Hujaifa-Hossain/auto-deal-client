import React, { useEffect, useState } from "react";
import "./HomeExplore.css";
import Car from "../../Car/Car";

const HomeExplore = () => {
  const [cars, setCar] = useState([]);
  useEffect(() => {
    fetch("https://shielded-brushlands-06342.herokuapp.com/car")
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, []);
  return (
    <div>
      <h3 className="text-center my-4">
        Top 6 Best Selling <span className="text-warning">Cars</span>
      </h3>
      <div className="cars-container">
        {cars.slice(0, 6).map((car) => (
          <Car key={car._id} car={car}></Car>
        ))}
      </div>
    </div>
  );
};

export default HomeExplore;
