// import React from 'react';
import LoginImage from '../assets/image/logimage.jpg'
import { Link } from "react-router-dom"

const LoginPage = () => {
  return (
    <div className="container mx-auto px-6 py-6 w-[60%] flex justify-center items-center">
      <div className="grid grid-cols-2">
        <div className="hidden lg:block">
          <img src={LoginImage} alt="Background" className="object-cover w-full h-full rounded-lg" />
        </div>

        <div className="bg-[#181a25] rounded-lg p-10 w-[60vh]">  {/* Formulário */}
          
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Login</h2>

          <form className="mt-8 flex flex-col space-y-10" action="./" method="POST">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <h2>Usuario</h2>
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="text-white mb-3 appearance-none rounded-none relative block w-full px-4 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"/>
              </div>
              <div>
                <h2>Senha</h2>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="text-white appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <Link to="/calendario">Login</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;