import React, { useEffect, useState } from "react";
import Car from "../Car/Car";

const Explore = () => {
  const [cars, setCar] = useState([]);
  useEffect(() => {
    fetch("https://auto-deal-server.onrender.com/api/car")
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, []);
  return (
    <div>
      <h3 className="text-center my-3">Explore {cars.length} Best <span className="text-warning">Cars</span></h3>
      <div className="cars-container">
        {cars.map((car) => (
          <Car key={car._id} car={car}></Car>
        ))}
      </div>
    </div>
  );
};

export default Explore;
