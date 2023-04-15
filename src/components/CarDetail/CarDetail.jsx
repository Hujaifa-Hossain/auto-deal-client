import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../Hooks/useAuth";

const CarDetail = () => {
  const { _id } = useParams();
  const { user } = useAuth();
  const [message, setMessage] = useState("");
  const [isUpdate, setIsUpdated] = useState(null);
  console.log(isUpdate);

  const [cars, setCars] = useState({});
  useEffect(() => {
    const url = `https://auto-deal-server.onrender.com/api/car/${_id}`;
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
    data.status = "Pending";
    fetch(`https://auto-deal-server.onrender.com/api/order/${_id}`, {
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
    setMessage(
      `Thank you ${user?.displayName}, your order placed successfully.`
    );
    reset();
  };
  const car = cars[0];
  console.log(car);
  return (
    <div>
      <div className="container overflow-hidden">
        <h6 className="text-center my-2">{message}</h6>
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
                  className="p-2 px-4 m-1"
                  placeholder="Enter your name"
                  defaultValue={user?.displayName}
                  {...register("user", { required: true })}
                />
                <input
                  className="p-2 px-4 m-1"
                  placeholder="Enter your email"
                  defaultValue={user?.email}
                  {...register("email", { required: true })}
                />
                <input
                  className="p-2 px-4 m-1"
                  placeholder="Enter your car Name"
                  defaultValue={car?.name}
                  {...register("car", { required: true })}
                />
                <input
                  className="p-2 px-4 m-1"
                  type="text"
                  placeholder="Enter your address"
                  {...register("address", { required: true })}
                  required
                />
                <input
                  className="p-2 px-4 m-1"
                  type="text"
                  placeholder="Give phone number"
                  {...register("phone", { required: true })}
                  required
                />

                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input
                  className="btn btn-warning py-2 px-5 mx-3"
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
