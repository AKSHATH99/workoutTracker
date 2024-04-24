import React from "react";
import GoalSection from "./GoalSection";
import { Link } from "react-router-dom";

const Android6 = () => {
  return (
    <div>
      <h1 className="text-[25px] ml-20 mt-12 font-bold font-Montserrat">
        What are your goals?
      </h1>
      <div className="mt-2">
        <GoalSection Goal="Weight Loss" />
        <GoalSection Goal="Muscle Gain" />
        <GoalSection Goal="Flexibilty and Mobility" />
        <GoalSection Goal="General Fitness" />
        <GoalSection Goal="Event - specific training" />
        <GoalSection Goal="Mindfullness and Mental Health" />
      </div>
      <Link to = "/mainpage"> <div class="bg-gradient-to-r from-blue-500 to-blue-300 ml-4 mt-24 text-white font-Montserrat text-[16px] w-[343px] h-[50px] rounded-xl flex items-center justify-center">
        <p>Confirm</p> 
      </div></Link>
    </div>
  );
};

export default Android6;
