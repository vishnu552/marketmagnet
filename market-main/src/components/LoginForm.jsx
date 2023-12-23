
import { useForm } from "react-hook-form";
import { Login } from "../api/signupLoginApi";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await Login(data);
      console.log("login response", res);
      localStorage.setItem('user',res.data.firstName)
      navigate("/opportunities")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-3/4 md:w-1/2 lg:w-1/3 mx-auto mt-30">
      <div className=" text-center py-8">
        <h1 className="text-[#3a41bd] text-5xl font-semibold">Log In</h1>
        <br />
        <p className="text-gray-700 text-3xl font-medium">Welcome Back</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
            className={` h-10 mt-1 p-2 border w-full rounded-s-md ${
              errors.email ? "border-rose-800" : "border-gray-300"
            }`}
          />
          <p className="text-rose-800 text-lg">{errors.email?.message}</p>
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
          <button
            className="bg-[#3a41bd] w-full text-white p-3 rounded-md hover:bg-white hover:text-black"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
