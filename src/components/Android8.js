// import React from "react";
// import Workoutlist from "./Workoutlist";
// import Navbar from "./Navbar";

// const Android8 = () => {
//   return (
//     <div className="w-screen h-auto" >
//       <div className="flex">
//         <img
//           className="h-5 w-5 mt-5"
//           src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
//         />
//         <h1 className="font-Montserrat text-[20px] mt-5 ml-16 font-[600] leading-[24.38px] w-[192px]  ">
//           Workout Tracker
//         </h1>
//       </div>

//       {/* graph */}
//       <div className="mt-10 ">
//         <div className="flex text-sm">
//           <p className="ml-36 ">Good job</p>
//           <p className="ml-10">less than 3200kcal</p>
//         </div>
//         <img className="w-[350px] ml-3" src="graph.png" />
//       </div>

//       <div className="flex bg-gradient-to-r from-blue-200 via-transparent to-transparent w-80 mt-10 ml-4 rounded-xl">
//         <img
//           className="w-5 h-5 mt-5 m-5"
//           src="https://pnglib.nyc3.cdn.digitaloceanspaces.com/uploads/2021/02/blue-alert-icon_60213a7793f67-680x680.png"
//         />
//         <p>You've burned fewer calories than yesterday. Time to get moving! </p>
//       </div>

//       <div className="flex mt-14 ml">
//         <p className="font-Montserrat font-[600] leading-[19.5px] text-[16px] ml-6">
//           Upcomming Workout
//         </p>
//         <a href="#" className="ml-24 text-gray-400 underline">
//           {" "}
//           See more
//         </a>
//       </div>

//       <div className="mt-10 ml-2  ">
//         <Workoutlist workout="Full body workout" time="Today 3pm" />
//         <Workoutlist workout="Upper body workout" time="4 feb  3:30pm" />
//       </div>

//       <div className="phone: mb-64">
//         <p className="  ml-4 font-Montserrat leading-[19.5px] text-[16px] font-[600] mb-3">What Do You Want to Train</p>
//         <div className="bg-gradient-to-r from-blue-200 to-blue-300 flex   w-[343px]  ml-4 rounded-lg">
//           <div className="ml-5 mt-5 font-Montserrat  leading-[14.63px] text-[12px] font-semibold">
//             <p> Full Body Workout</p>
//             <p className="mt-3 leading-[12.19px] text-[10px] font-semibold">Arms</p>
//             <p className="mt-3 leading-[12.19px] text-[10px] font-semibold">Chest</p>
//           </div>
//           <img
//             className="rounded-full w-20 h-20 ml-14 mt-5"
//             src="https://s3-alpha-sig.figma.com/img/23ae/977c/32610d884493905711642300c8cc67c0?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PCvWTbZ5NjUumO0m8v5MjXz6bJHmGbsYJb4EYWTl0mPfkcGnUBjwosLVe7DtUuaziR-CNpluc9dwXWY589sUOzBZ0mcPkjWbd46xnrBVrc12gFYYI19CWtg5Gu6QQrXoVomP4CE0--ylPpaqYOcUQXjg2Giyro9koG87sf1qH4u3NwtuV4pzkKNVp-FbF7F5uG4R~ZaZH7QUYNcNv1PW667PNSgkJ7zHDV4XPckVeHESpnAUY~BWKYhOGOTaRhTLjc5gaOv58Kx96OP8PiaU0XbOXVgh-kVkiDl1tA0ypsTrc9HFWQQovr87-31FWxfssbwvrBn53tT4GDwxrLP0kw__"
//           />
//         </div>
//       </div>
//       {/* <Navbar/> */}
//     </div>
//   );
// };

// export default Android8;

import React from "react";
import Workoutlist from "./Workoutlist";
import Navbar from "./Navbar";

const Android8 = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="flex items-center"> {/* Added items-center */}
        <img
          className="h-5 w-5 mt-5"
          src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
        />
        <h1 className="font-Montserrat text-[20px] mt-5 ml-2 font-[600] leading-[24.38px] w-[192px]  "> {/* Adjusted ml value */}
          Workout Tracker
        </h1>
      </div>

      {/* graph */}
      <div className="mt-10 ">
        <div className="flex text-sm">
          <p className="ml-36 ">Good job</p>
          <p className="ml-10">less than 3200kcal</p>
        </div>
        <img className="w-[350px] ml-3" src="graph.png" />
      </div>

      <div className="flex bg-gradient-to-r from-blue-200 via-transparent to-transparent w-80 mt-10 ml-4 rounded-xl">
        <img
          className="w-5 h-5 mt-5 m-5"
          src="https://pnglib.nyc3.cdn.digitaloceanspaces.com/uploads/2021/02/blue-alert-icon_60213a7793f67-680x680.png"
        />
        <p>You've burned fewer calories than yesterday. Time to get moving! </p>
      </div>

      <div className="flex mt-14 ml">
        <p className="font-Montserrat font-[600] leading-[19.5px] text-[16px] ml-6">
          Upcoming Workout
        </p>
        <a href="#" className="ml-24 text-gray-400 underline">
          {" "}
          See more
        </a>
      </div>

      <div className="mt-10 ml-2  ">
        <Workoutlist workout="Full body workout" time="Today 3pm" />
        <Workoutlist workout="Upper body workout" time="4 feb  3:30pm" />
      </div>

      <div className="phone: mb-64">
        <p className="  ml-4 font-Montserrat leading-[19.5px] text-[16px] font-[600] mb-3">What Do You Want to Train</p>
        <div className="bg-gradient-to-r from-blue-200 to-blue-300 flex   w-[343px]  ml-4 rounded-lg">
          <div className="ml-5 mt-5 font-Montserrat  leading-[14.63px] text-[12px] font-semibold">
            <p> Full Body Workout</p>
            <p className="mt-3 leading-[12.19px] text-[10px] font-semibold">Arms</p>
            <p className="mt-3 leading-[12.19px] text-[10px] font-semibold">Chest</p>
          </div>
          <img
            className="rounded-full w-20 h-20 ml-14 mt-5"
            src="https://s3-alpha-sig.figma.com/img/23ae/977c/32610d884493905711642300c8cc67c0?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PCvWTbZ5NjUumO0m8v5MjXz6bJHmGbsYJb4EYWTl0mPfkcGnUBjwosLVe7DtUuaziR-CNpluc9dwXWY589sUOzBZ0mcPkjWbd46xnrBVrc12gFYYI19CWtg5Gu6QQrXoVomP4CE0--ylPpaqYOcUQXjg2Giyro9koG87sf1qH4u3NwtuV4pzkKNVp-FbF7F5uG4R~ZaZH7QUYNcNv1PW667PNSgkJ7zHDV4XPckVeHESpnAUY~BWKYhOGOTaRhTLjc5gaOv58Kx96OP8PiaU0XbOXVgh-kVkiDl1tA0ypsTrc9HFWQQovr87-31FWxfssbwvrBn53tT4GDwxrLP0kw__"
          />
        </div>
      </div>
      {/* <Navbar/> */}
    </div>
  );
};

export default Android8;

