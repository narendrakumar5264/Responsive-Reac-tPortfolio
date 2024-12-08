import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = ({ darkMode }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      await axios.post("https://getform.io/f/axoordgb", userInfo);
      toast.success("Your message has been sent!");
      reset(); // Clear the form after successful submission
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      name="Contact"
      className={`max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg mb-8">
        This is fully Functional form .
      </p>

      <div className="flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`w-full max-w-md px-8 py-6 rounded-xl ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-lg`}
        >
          <h2 className="text-xl font-semibold mb-4">Send Your Message</h2>

          {/* Full Name Input */}
          <div className="flex flex-col mb-4">
            <label className="block mb-2 font-medium" htmlFor="name">
              Full Name
            </label>
            <input
              {...register("name", { required: "Full name is required." })}
              className={`shadow appearance-none rounded-lg border py-2 px-3 leading-tight focus:outline-none focus:ring ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600 focus:ring-yellow-400"
                  : "bg-gray-200 text-gray-900 border-gray-300 focus:ring-blue-500"
              }`}
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email Input */}
          <div className="flex flex-col mb-4">
            <label className="block mb-2 font-medium" htmlFor="email">
              Email Address
            </label>
            <input
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value:
                    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Please enter a valid email address.",
                },
              })}
              className={`shadow appearance-none rounded-lg border py-2 px-3 leading-tight focus:outline-none focus:ring ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600 focus:ring-yellow-400"
                  : "bg-gray-200 text-gray-900 border-gray-300 focus:ring-blue-500"
              }`}
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Message Input */}
          <div className="flex flex-col mb-4">
            <label className="block mb-2 font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              {...register("message", { required: "Message is required." })}
              className={`shadow appearance-none rounded-lg border py-2 px-3 leading-tight focus:outline-none focus:ring ${
                darkMode
                  ? "bg-gray-700 text-white border-gray-600 focus:ring-yellow-400"
                  : "bg-gray-200 text-gray-900 border-gray-300 focus:ring-blue-500"
              }`}
              id="message"
              name="message"
              placeholder="Type your message here"
              rows="5"
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 rounded-lg text-white font-semibold transition-colors duration-300 ${
              darkMode
                ? "bg-yellow-500 hover:bg-yellow-400"
                : "bg-blue-500 hover:bg-blue-400"
            }`}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
