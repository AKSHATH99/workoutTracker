import React from "react";
import { useState } from "react";

const Workoutlist = ({workout , time}) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex shadow-xl rounded-lg max-w-max my-10">
      <img
        className="w-14 h-14 rounded-full mx-5"
        src="https://s3-alpha-sig.figma.com/img/4aee/a404/269733701b8604f00f8ab3dbc8874dc4?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YRoQWw1HXgEYtTY7Vg-M2g5IhiKck5VPpcn0Jugib1uL3YWAQL9qngsOoqDKslwiVHm92OampIuJOJkCdMcWDYlxGYqOFHZVpM8s2z1NyIbEcAiKz~icWxqUXjtf4EAuTX9PwtEQlsCSC0eZ1sedcvdPPiuRHDN4gBuCPv2QbJdkmyGb-r7idogspouJ~KeCGnL22lnRm6d3tNchIqngW8S7bW5iSmzqzL9ZwQbhV5Gc~KAC4rG2HVSKRnt9USxdvf6EDrMtSycuyrzitLLWZsB8H3GV-v-dOdoYeRvYsvk7FYyo0Aaj6F-TrXDcnfWOmeBAu9FtArLfMihHELXaSA__"
      />
      <div className="mt-1">
        <p>{workout}</p>
        <p>{time} </p>
      </div>

      <div className="relative inline-block w-12 h-6  rounded-2xl ml-16 mt-3 bg-blue-400">
        <input
          type="checkbox"
          id="toggle"
          className="absolute opacity-0 w-0 h-0"
          checked={isChecked}
          onChange={toggleChecked}
        />
        <label
          htmlFor="toggle"
          className={`block w-[22px] h-[22px] rounded-full p-3 absolute top-0 left-0 cursor-pointer transition-transform duration-300 ease-in-out transform ${
            isChecked ? "bg-white" : "bg-white"
          }`}
        ></label>
      </div>
    </div>
  );
};

export default Workoutlist;
