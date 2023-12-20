import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { SignUp } from "../api/signupLoginApi";
import { useNavigate } from "react-router-dom";


function RegisterForm() {
  const navigate = useNavigate();
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  const onSubmit = async(data) => {
    try{
      const response = await SignUp(data)
      console.log(response);
      console.log('Registration successful:', response.data);
      navigate("/opportunities");
      localStorage.setItem("user",response.data.firstName)
    }
    catch (error) {
      console.error('Registration failed:', error.message);
    }
  };
  return (
    <div className="w-3/4 md:w-1/2 lg:w-1/3 mx-auto mt-40">
      <div className=" text-center py-8">
        <h1 className="text-blue-950 text-3xl font-semibold">Register</h1>
        <p className="text-gray-700 text-xl font-medium">
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
            className={` h-10 mt-1 p-2 border w-full rounded-md ${
              errors.email ? "border-rose-800" : "border-gray-300"
            }`}
          />
          <p className="text-rose-800 text-lg">{errors.email?.message}</p>
        </div>

        {/* <div>
          <label
            htmlFor="contactNumber"
            className="block text-xl font-medium text-gray-700"
          >
            Mobile No.
          </label>
          <input
            type="text"
            id="contactNumber"
            {...register("contactNumber", {
              required: {
                value: true,
                message: "contact Number is Required Field",
              },
            })}
            className={` h-10 mt-1 p-2 border w-full rounded-md ${
              errors.contactNumber ? "border-rose-800" : "border-gray-300"
            }`}
          />
          <p className="text-rose-800 text-lg">
            {errors.contactNumber?.message}
          </p>
        </div> */}
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
        <button
          className="bg-orange-400 w-full text-white p-3 rounded-md hover:bg-orange-600"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default RegisterForm;
