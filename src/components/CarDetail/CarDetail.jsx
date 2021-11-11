import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../Hooks/useAuth";

const CarDetail = () => {
  const { _id } = useParams();
  const { user } = useAuth();
  const [isUpdate, setIsUpdated] = useState(null);
  console.log(isUpdate);

  const [cars, setCars] = useState({});
  useEffect(() => {
    const url = `https://shielded-brushlands-06342.herokuapp.com/car/${_id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [_id]);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(`https://shielded-brushlands-06342.herokuapp.com/shipment/${_id}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          setIsUpdated(true);
        } else {
          setIsUpdated(false);
        }
      });
    console.log(data);
    reset();
  };
  const car = cars[0];
  return (
    <div>
      <div className="container overflow-hidden">
        <div className="row gx-5">
          <div className="col-lg-6">
            <div className="p-3">
              <div className="card mb-3 bg-dark">
                <img src={car?.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{car?.name}</h5>
                  <p className="card-text">{car?.description.slice(0, 120)}</p>
                  <p className="card-text">
                    Price: ${car?.price}{" "}
                    <span className="text-warning"> with 10% discount</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-3">
              <h3>Shipment Form</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input
                  className="p-2 px-4 m-2"
                  placeholder="Enter your name"
                  defaultValue={user?.displayName}
                  {...register("user", { required: true })}
                />
                <input
                  className="p-2 px-4 m-2"
                  placeholder="Enter your email"
                  defaultValue={user?.email}
                  {...register("email", { required: true })}
                />
                <input
                  className="p-2 px-4 m-2"
                  type="text"
                  placeholder="Enter your address"
                  {...register("address", { required: true })}
                  required
                />
                <input
                  className="p-2 px-4 m-2"
                  type="text"
                  placeholder="Give phone number"
                  {...register("phone", { required: true })}
                  required
                />
                <input
                  className="p-2 px-4 m-2"
                  placeholder="Enter your car Name"
                  defaultValue={car?.name}
                  {...register("car", { required: true })}
                  required
                />
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input
                  className="btn btn-warning py-2 px-5 m-3"
                  type="submit"
                  value="PLACE ORDER"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
