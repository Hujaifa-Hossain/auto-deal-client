import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const { register, handleSubmit, reset} = useForm();

  const onSubmit = (data) => {
    fetch("https://shielded-brushlands-06342.herokuapp.com/makeAdmin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
    reset();
  };
  return (
    <div>
      <form className="text-center my-3" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="email"
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="btn btn-warning mt-2"
          type="submit"
          value="make Admin"
        />
      </form>
    </div>
  );
};

export default MakeAdmin;