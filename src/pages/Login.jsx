import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center mt-10 mb-10 px-4 sm:px-6 lg:px-8">
      <form className="w-full max-w-md bg-gray-200 shadow-lg rounded-lg p-8 gap-5 flex flex-col">
        <h2 className="text-xl font-semibold text-center">Login</h2>

        <input
          placeholder="Enter Your Username"
          className="w-full px-4 py-2 bg-slate-300 border-slate-600 border-2 text-black hover:bg-white rounded-lg"
        />

        <input
          placeholder="Enter Your Password"
          className="w-full px-4 py-2 bg-slate-300 border-slate-600 border-2 text-black hover:bg-white rounded-lg"
        />

        <button
          type="submit"
          className="w-full px-4 py-2 bg-fuchsia-400 hover:bg-fuchsia-900 border-2 border-fuchsia-300 rounded-lg text-white"
        >
          Submit
        </button>

        <h2 className="text-center">
          Don’t have an account?{" "}
          <Link to="/sign-up" className="text-fuchsia-500 font-semibold">
            Sign Up
          </Link>
        </h2>
      </form>
    </div>
  );
};

export default Login;
