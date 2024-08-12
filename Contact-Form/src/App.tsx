// import React from "react";
import { useForm } from "react-hook-form";
import { FaPaperPlane } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  Message: string;
}
const App = () => {
  const { register, handleSubmit, formState } = useForm<FormData>();
  const { errors } = formState;

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col bg-white w-1/3 h-500 mx-auto mt-16 rounded-lg border border-gray-200 shadow-custom-light transform transition duration-300 hover:shadow-2xl hover:-translate-y-2">
      <h1 className="text-2xl text-customPink mb-10 text-center mt-3">
        Contact Form
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <input
          type="text"
          placeholder="Enter your name"
          className={`border-b-2 border-opacity-20 ${
            errors.name
              ? "border-red-500 border-opacity-100"
              : "border-purple-500"
          }  focus:outline-none my-2 mx-4 h-11 focus:border-opacity-100 placeholder-customPink`}
          {...register("name", {
            required: "Name is required",
          })}
        />
        <p className="mx-4 text-xs text-red-500">
          {errors.name ? "*" + errors.name.message : ""}
        </p>
        <input
          type="email"
          placeholder="your email"
          className={`border-b-2 border-opacity-20 ${
            errors.email
              ? "border-red-500 border-opacity-100"
              : "border-purple-500"
          }  focus:outline-none my-2 mx-4 h-11 focus:border-opacity-100 placeholder-customPink`}
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "invalid email address",
            },
          })}
        />
        <p className="mx-4 text-xs text-red-500">
          {errors.email ? "*" + errors.email.message : ""}
        </p>
        <textarea
          placeholder="your message"
          className={`border-b-2 ${
            errors.name
              ? "border-red-500 border-opacity-100"
              : "border-purple-500"
          }  border-opacity-30 focus:outline-none my-4 mx-4 min-h-16 resize-none overflow-visible focus:border-opacity-100 placeholder-customPink`}
          {...register("Message", {
            validate: (data) => {
              return (
                data.trim().split(/\s+/).length >= 2 || "minimum of 2 words"
              );
            },
          })}
        />
        <p className="mx-4 text-xs text-red-500">
          {errors.Message?.message ? "*" + errors.Message.message : ""}
        </p>

        <button className="bg-customPink rounded-lg h-12 mx-3 mt-20 text-white">
          Submit <FaPaperPlane className="inline-block" />
        </button>
      </form>
    </div>
  );
};

export default App;
