import React from "react";
import { Link } from "react-router-dom";


const Android1 = () => {
  const color = "#9FB2FF";
  return (
    <div className="w-screen h-screen border border-black">
     <Link to="/register"> <p className="phone: ml-[290px] underline " style={{ color: color }}>
        skip
      </p></Link>
      <img
        className="mt-14 w-screen"
        alt="running"
        src="https://s3-alpha-sig.figma.com/img/bd9b/3108/cb36b0b2aebaab8d7bad4ecbedf2a369?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xx1mI1U-yJ6RmuGEo1mtRxHwwalaBLHZWGd10bTpoVmUionEoDQZuviVQ6WoVzNDOsHl~0yy0ilAOlhE7bkA4vHBJH0DbqU9dwhXfqlk6jw1xdyF0f33oy5zbojfG2QWYudfPu~cYNQINXjXYkZuoLCeasONMGowwLq3P1TygHCHF51hwYNk8gOjU0dslJ3zLmSMuhiEV3cmW2V2OTu0zfQmANaaxPYR-14ZtD7PkGhKKhgMQo6kBHsZkBqZQsc-HfhFMCRjiJeSb-UlF5I~pJ1kggf-mor3DrAaPZhP7ikYQBqvZSZnFpga9F46Saa4bffCCrUiL1kG9lJ93vZx2Q__"
      />
      <h1 className="phone:text-red-600 phone:ml-8">TRACK YOUR GOALS</h1>
      <p className="phone: ml-8 w-72" style={{ size: "16px" }}>
          Don't worry if you have trouble determining your goals, We can help you
          determine your goals and track your goals
      </p>

     <Link to  = "/android2"> <div
        className="rounded-full w-14 h-14 ml-72 flex justify-center items-center mt-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(222, 229, 255, 1), rgba(128, 154, 255, 1))",
        }}
      
      > <img className="w-7 h-7 " src="arrow.png"/> </div></Link>
    </div>
  );
};

export default Android1;
