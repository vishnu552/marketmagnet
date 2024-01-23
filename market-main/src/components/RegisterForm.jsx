import { useForm } from "react-hook-form";
import { SignUp } from "../api/signupLoginApi";
import { useNavigate } from "react-router-dom";
import getOtp from "../api/getOtp";

function RegisterForm() {
  const navigate = useNavigate();
  const form = useForm();
  const { register, control, handleSubmit, formState, getValues } = form;
  const { errors } = formState;
  const onSubmit = async (data) => {
    try {
      const response = await SignUp(data);
      console.log(response);
      console.log("Registration successful:", response.data);
      navigate("/opportunities");
      localStorage.setItem("user", response.data.firstName);
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };
  return (
    <div className="w-3/4 md:w-1/2 lg:w-1/3 mx-auto ">
      <div className=" text-center py-8">
        <h1 className="text-[#3a41bd] text-5xl font-semibold">Register</h1>
        <br />
        <p className="text-gray-700 text-3xl font-medium">
          Sign up to create an account
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="firstName"
            className="block text-xl font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", {
              required: {
                value: true,
                message: "First Name is Required Field",
              },
            })}
            className={` h-10 mt-1 p-2 border w-full rounded-md ${
              errors.firstName ? "border-rose-800" : "border-gray-300"
            }`}
          />
          <p className="text-rose-800 text-lg">{errors.firstName?.message}</p>
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-xl font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", {
              required: {
                value: true,
                message: "Last Name is Required Field",
              },
            })}
            className={` h-10 mt-1 p-2 border w-full rounded-md ${
              errors.lastName ? "border-rose-800" : "border-gray-300"
            }`}
          />
          <p className="text-rose-800 text-lg">{errors.lastName?.message}</p>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xl font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is Required Field",
              },
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid Email format",
              },
            })}
            className={` h-10 mt-1 p-2 border w-5/6 rounded-s-md ${
              errors.email ? "border-rose-800" : "border-gray-300"
            }`}
          />
          <button
          type="button"
            className=" w-1/6 bg-[#3a41bd] text-white h-10 text-lg rounded-e-md"
            onClick={() => {
              const email = getValues("email");
              console.log(email);
              getOtp(email);
            }}
          >
            get otp
          </button>
          <p className="text-rose-800 text-lg">{errors.email?.message}</p>
        </div>

        <div>
          <label
            htmlFor="otp"
            className="block text-xl font-medium text-gray-700"
          >
            OTP
          </label>
          <input
            type="text"
            id="otp"
            {...register("otp", {
              required: {
                value: true,
                message: "OTP is Required Field",
              },
            })}
            className={` h-10 mt-1 p-2 border w-full rounded-md ${
              errors.otp ? "border-rose-800" : "border-gray-300"
            }`}
          />
          <p className="text-rose-800 text-lg">{errors.otp?.message}</p>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-xl font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="text"
            id="password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is Required Field",
              },
            })}
            className={` h-10 mt-1 p-2 border w-full rounded-md ${
              errors.password ? "border-rose-800" : "border-gray-300"
            }`}
          />
          <p className="text-rose-800 text-lg">{errors.password?.message}</p>
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-xl font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="text"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Confirm Password is Required",
              },
            })}
            className={` h-10 mt-1 p-2 border w-full rounded-md ${
              errors.confirmPassword ? "border-rose-800" : "border-gray-300"
            }`}
          />
          <p className="text-rose-800 text-lg">
            {errors.confirmPassword?.message}
          </p>
        </div>
        <div>
          <button
            className="bg-[#3a41bd] w-full text-white p-3 rounded-md hover:bg-white hover:text-black"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
