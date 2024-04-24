// import React from "react";

const TimeSection = ({ time, task }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="ml-8 font-Montserrat text-[16px] my-3 font-semibold leading-[14.63px]">
          {time}
        </p>
        {task ? (
          <div
            className="rounded-xl h-[30px] text-sm text-white flex items-center justify-center leading-[14.63px]"
            style={{
              background:
                "linear-gradient(270deg, #D3A4F4 0%, #E9B1E0 102.35%)",
              padding: "1rem", // Adjust the padding as needed
            }}
          >
            <p className="">{task}</p>
          </div>
        ) : null}
      </div>
      <hr className="border border-gray"/>
    </div>
  );
};

export default TimeSection;
