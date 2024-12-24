import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../features/authSlice";
import Button from "../components/Button";
import logo from "../assets/logo/logo-no-background.png";

export default function SignUp() {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const { isLoading, isError, message } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(loginData));
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
      <div className="flex flex-col justify-center min-h-screen py-6 lg:py-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img src={logo} alt="logo" className="mx-auto h-16 w-auto" />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 text-gray-900">
            Create an account and start your journey
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                onChange={handleChange}
                required
                className="block border border-1 w-full px-4 py-2 mt-2 text-gray-900 bg-gray-100 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                required
                className="block border border-1 w-full px-4 py-2 mt-2 text-gray-900 bg-gray-100 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                autoComplete="current-password"
                required
                className="block border border-1 w-full px-4 py-2 mt-2 text-gray-900 bg-gray-100 rounded-md focus:ring-2 focus:ring-gray-500 focus:outline-none"
              />
            </div>

            <div>
              <Button text="Sign Up" type="submit" disabled={isLoading} />
            </div>

            {isError && <div className="text-red-500 text-sm">{message}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}
