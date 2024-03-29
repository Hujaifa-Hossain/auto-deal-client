import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";

const AddReview = () => {
  const { user } = useAuth();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://auto-deal-server.onrender.com/api/reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
    reset();
  };
  return (
    <div className="container my-5">
      <h5 className="text-center my-3">
        A Feedback Will Be <span className="text-warning">Appriciated</span>{" "}
      </h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="p-2 my-1 w-100"
          placeholder="Enter your name"
          defaultValue={user.displayName}
          {...register("user")}
        />
        <input
          className="p-2 my-1 w-100"
          placeholder="Enter Your Email"
          defaultValue={user.email}
          {...register("email")}
        />
        <br />
        <input
          className="p-2 my-1 w-100"
          placeholder="write your review, maximum 100 characters"
          {...register("review", { required: true, maxLength: 100 })}
        />
        <input
          className="p-2 my-1 w-100"
          type="number"
          placeholder="Give a rating between 0 to 5"
          {...register("stars", { min: 0, max: 5, required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <p className="w-50 m-auto p-2">
          <input
            type="submit"
            value="Give Review"
            className="btn btn-warning d-block m-auto px-3"
          />
        </p>
      </form>
    </div>
  );
};

export default AddReview;
