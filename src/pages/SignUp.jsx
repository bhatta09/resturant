import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [form, setForm] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm({
      fullName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="flex justify-center items-center mt-10 mb-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col rounded-lg shadow-lg bg-slate-200 p-8 gap-4">
          <h2 className="text-xl font-semibold text-center">Sign-up</h2>
          
          <input
            value={form.fullName}
            placeholder="Enter Your Name"
            onChange={handleChange}
            name="fullName"
            className="w-full px-4 py-2 bg-slate-300 border-slate-600 border-2 text-black hover:bg-white rounded-lg"
          />
          
          <input
            value={form.userName}
            placeholder="Enter Your UserName"
            onChange={handleChange}
            name="userName"
            className="w-full px-4 py-2 bg-slate-300 border-slate-600 border-2 text-black hover:bg-white rounded-lg"
          />
          
          <input
            value={form.email}
            placeholder="Enter Your Email"
            onChange={handleChange}
            name="email"
            className="w-full px-4 py-2 bg-slate-300 border-slate-600 border-2 text-black hover:bg-white rounded-lg"
          />
          
          <input
            value={form.password}
            placeholder="Enter Your Password"
            onChange={handleChange}
            name="password"
            type="password"
            className="w-full px-4 py-2 bg-slate-300 border-slate-600 border-2 text-black hover:bg-white rounded-lg"
          />
          
          <input
            value={form.confirmPassword}
            placeholder="Confirm Your Password"
            onChange={handleChange}
            name="confirmPassword"
            type="password"
            className="w-full px-4 py-2 bg-slate-300 border-slate-600 border-2 text-black hover:bg-white rounded-lg"
          />
          
          <button
            type="submit"
            className="w-full px-4 py-2 bg-fuchsia-400 hover:bg-fuchsia-900 border-2 border-fuchsia-300 rounded-lg text-white"
          >
            Submit
          </button>
          
          <h2 className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-fuchsia-400 font-semibold">
              Login
            </Link>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
