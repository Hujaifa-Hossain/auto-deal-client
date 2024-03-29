import React, { useEffect, useState } from "react";
import "./HomeExplore.css";
import Car from "../../Car/Car";

const HomeExplore = () => {
  const [cars, setCar] = useState([]);
  useEffect(() => {
    fetch("https://auto-deal-server.onrender.com/api/car")
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, []);
  return (
    <div>
      <h5 className="text-center my-4">
        Top {cars?.length} Best Selling <span className="text-warning">Cars</span>
      </h5>
      <div className="cars-container">
        {cars.slice(0, 6).map((car) => (
          <Car key={car._id} car={car}></Car>
        ))}
      </div>
    </div>
  );
};

export default HomeExplore;
