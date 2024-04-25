import React from "react";
import { Link } from "react-router-dom";

const Androind4 = () => {
  const loginBtnColor = "";
  const color = "#9FB2FF"
  return (
    <div className="top-0">
      {/* <h1>Create an account</h1> */}

      <div className="min-h-screen flex mt-36 justify-center bg-gray-50 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full ">
          <div>
            <h2 className="  font-semibold text-xl font-roboto  text-gray-900 ">
              Create an account
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
                  placeholder="First Name"
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
                  placeholder="Second Name"
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
                  className="h-14 appearance-none rounded-xl bg-gray-100  w-full py-2 px-3 text-gray-900 placeholder-gray-500 focus:outline-none  sm:text-sm mt-3"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <input type="checkbox" />{" "}
              <span className=" text-sm">
                By proceeding, I agree to all{" "}
                <a className="text-blue-200 underline" href="#">
                  T&C{" "}
                </a>
                and{" "}
                <a className="text-blue-200 underline" href="#">
                  {" "}
                  Privacy Policy
                </a>
              </span>
            </div>
            <div>
            <Link to="/goals"><button
                type="submit"
                className="w-full h-12 flex items-center justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                style={{
                  backgroundImage:
                    "linear-gradient(270deg, #7B91FF 0%, #95BEFF 100%)",
                }}
              >
                Create an Account
              </button></Link>
            </div>
            <span className="flex items-center">
              <hr className="border-black flex-grow" />
              <span className="mx-2">Or</span>
              <hr className="border-black flex-grow" />
            </span>

            <div className="flex items-center justify-center ">
              <div className="border border-black  rounded-md p-2">
                <img
                  className="h-5   w-5"
                  src="https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png"
                />
              </div>
              
              <div className="border border-black p-2 rounded-md ml-10">
                <img
                  className="h-5 w-5 " 
                  src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Facebook-512.png"
                />
              </div>
            </div>

            <div>
                <span className="ml-20">Already have an account? <Link to="/login"> <a className="underline " style={{ color: color }} href="#">Login</a></Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Androind4;
