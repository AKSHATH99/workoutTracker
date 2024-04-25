import React from "react";
import {DateComponent , SelectedDate} from "./DateComponent.js";
import TimeSection from "./TimeSection.js";

const Android9 = () => {
  return (
    <div className="mb-20">
      <div className="flex">
        <img
          className="h-5 w-5 mt-10"
          src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
        />
        <h1 className="font-Montserrat text-[20px] mt-9 ml-16 font-[600] leading-[24.38px] w-[192px]  ">
          Workout Schedule
        </h1>
      </div>

      {/* Year and month  SECTION */}
      <div className="flex ml-28">
        <img
          className="h-5 w-5 mt-10"
          src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
        />
        <p className="mt-10  mx-5 font-[Montserrat]  font-semibold leading-[14.63px]">
        Feb 2024
        </p>
        <img
          className="h-5 w-5 mt-10"
          src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
        />  
      </div>

    {/* Dates */}
    <div className="flex justify-around mt-10">
        <DateComponent day="Sun" date="5"/>
        <SelectedDate day="Mon" date="6"/>
        <DateComponent day="Tue" date="7"/>
        <DateComponent day="Wed" date="8"/>
        <DateComponent day="Thu" date="9"/>
    </div>

    {/* TimeTable */}
    <div className="mt-20">
        <TimeSection time="6:00 AM "/>
        <TimeSection time="7:00 AM " task="Abs Workout , 7:30am"/>
        <TimeSection time="8:00 AM "/>
        <TimeSection time="9:00 AM "task="Upperbody Workout , 9am"/>
        <TimeSection time="10:00 AM "/>
        <TimeSection time="11:00 AM "/>
        <TimeSection time="12:00 AM " />
        <TimeSection time="1:00 AM "/>
        <TimeSection time="2:00 AM "task="Lowebody Workout , 3pm"/>
        <TimeSection time="3:00 AM "/>
        <TimeSection time="4:00 AM "/>
        <TimeSection time="5:00 AM "/>
    </div>
    <div className="rounded-full w-16 h-16 flex items-center justify-center text-white -mt-28 ml-72 shadow-lg  "style={{
              background:
                "linear-gradient(270deg, #D3A4F4 0%, #E9B1E0 102.35%)",
            }}>
        <p className="text-4xl">+</p>
    </div>
    </div>
  );
};

export default Android9;
