import React from "react";

const GoalSection = ({ Goal }) => {
  const bgcolor = "#F1F1F1";
  return (
    <div className="w-[343px] rounded-xl mt-8 h-[50px] ml-[16px]  flex items-center justify-between font-semibold font-Montserrat" style={{ backgroundColor: bgcolor }}>
      <span className="flex items-center">
        <p className="ml-10 text-[15px]">{Goal}</p>
      </span>
      <label className="inline-block relative w-7 h-7 mr-4 border-2 border-blue-300 rounded cursor-pointer">
        <input className="hidden" type="checkbox" />
      </label>
      
    </div>
  );
};

export default GoalSection;
