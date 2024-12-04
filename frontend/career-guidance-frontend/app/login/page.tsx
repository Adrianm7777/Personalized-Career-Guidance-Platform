import React from "react";

export const metadata = {
  title: "Login",
};

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-semibold mb-6 text-center">Login</h1>
        <form
          method="POST"
          action="http://127.0.0.1:8000/login/"
          className="space-y-4"
        >
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-green-600 font-semibold hover:underline"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
