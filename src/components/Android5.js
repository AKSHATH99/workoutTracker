import React from "react";
import { Link } from "react-router-dom";

const Androind5 = () => {
  const loginBtnColor = "";
  const color = "#9FB2FF"
  return (
    <div className="top-0 ">
      {/* <h1>Create an account</h1> */}

      <div className="min-h-screen flex mt-10 justify-center bg-gray-50 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full ">
          <div>
            <h2 className="  font-semibold text-xl font-roboto  text-gray-900 ">
              Welcome Back 
            </h2>
          </div>
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className=" h-14 appearance-none rounded-xl bg-gray-100   w-full py-2 px-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className=" h-14 appearance-none rounded-xl bg-gray-100   w-full py-2 px-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3"
                  placeholder="Password"
                />
              </div>
              
              
            </div>
            <div>
              
                <a className=" underline" href="#">
                  Forgot your password 
                </a>
                
            </div>
            <div>
             <Link to="/mainpage"><button
                type="submit"
                className=" mt-56 w-full h-12 flex items-center justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                style={{
                  backgroundImage:
                    "linear-gradient(270deg, #7B91FF 0%, #95BEFF 100%)",
                }}
              >
                Sign In
              </button></Link> 
            </div>
            <span className="flex items-center">
              <hr className="border-black flex-grow" />
              <span className="mx-2">Or</span>
              <hr className="border-black flex-grow" />
            </span>

            <div className="flex items-center justify-center ">
              <div className="border border-black p-2 rounded-md">
                <img
                  className="h-5   w-5"
                  src="https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png"
                />
              </div>
              
              <div className="border border-black rounded-md p-2 ml-10">
                <img
                  className="h-5 w-5 " 
                  src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Facebook-512.png"
                />
              </div>
            </div>

            <div>
                <span className="ml-8">Don't have an account? <Link to ="/register"> <a className="underline " style={{ color: color }} href="#">Create an account</a></Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Androind5;
