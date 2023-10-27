import React, { FormEvent, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

const Form3 = () => {
  const { register, handleSubmit } = useForm();
  const submitHandler = (data: FieldValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form3;
