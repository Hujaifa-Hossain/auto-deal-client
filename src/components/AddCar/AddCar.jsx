import React from "react";
import { useForm } from "react-hook-form";

const AddCar = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://shielded-brushlands-06342.herokuapp.com/addCar", {
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          placeholder="Name"
          className="p-2 my-1 w-100"
        />
        <br />
        <input
          {...register("price")}
          placeholder="Price"
          className="p-2 my-1 w-100"
        />
        <br />
        <input
          {...register("description")}
          placeholder="Description"
          className="p-2 my-1 w-100"
        />
        <br />
        <input
          {...register("image", { required: true })}
          placeholder="Image Link"
          className="p-2 my-1 w-100"
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <p className="w-50 m-auto p-2">
          <input
            type="submit"
            value="Add A Car"
            className="btn btn-warning d-block m-auto px-3"
          />
        </p>
      </form>
    </div>
  );
};

export default AddCar;
