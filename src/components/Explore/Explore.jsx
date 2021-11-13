import React, { useEffect, useState } from "react";
import Car from "../Car/Car";

const Explore = () => {
  const [cars, setCar] = useState([]);
  useEffect(() => {
    fetch("https://shielded-brushlands-06342.herokuapp.com/car")
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, []);
  return (
    <div>
      <h3 className="text-center my-3">Explore {cars.length} Best Cars</h3>
      <div className="cars-container">
        {cars.map((car) => (
          <Car key={car._id} car={car}></Car>
        ))}
      </div>
    </div>
  );
};

export default Explore;
