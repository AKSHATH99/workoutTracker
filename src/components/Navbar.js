import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-white border border-black w-full flex justify-around items-center  sticky top-auto bottom-0">
     <Link to= "/mainpage"> <img
        className="w-10 h-10 p-1 ml- "
        src="https://www.iconpacks.net/icons/2/free-home-icon-2502-thumb.png"
      /></Link>
      <Link to = "schedule"><img
        className="w-10 h-10 p-1 ml-"
        src="https://cdn-icons-png.flaticon.com/512/3731/3731754.png"
      /></Link>
      {/* <img className='w-12 h-12 p-2 shadow-xl rounded-full -mt-5 bg-gradient-to-r from-blue-200 to-blue-300' src='https://www.iconsdb.com/icons/preview/white/search-3-xxl.png'/> */}
      {/* <img className='w-12 h-12 p-2 shadow-xl rounded-full -mt-5 bg-gradient-to-r from-blue-200 to-blue-300' src='search.png'/> */}
      <img
        className="w-12 h-12 p-2 shadow-xl rounded-full -mt-5 ml-"
        // src="search.png"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/VisualEditor_-_Icon_-_Search-big_-_white.svg/1200px-VisualEditor_-_Icon_-_Search-big_-_white.svg.png"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(222, 229, 255, 1), rgba(128, 154, 255, 1))",
        }}
      />

      <img className="w-12 h-12 p-1" src="camera.png" />
      <img
        className="w-10 h-10 p-1  ml-"
        src="https://icons.veryicon.com/png/o/miscellaneous/icon-8/my-account-5.png"
      />
    </div>
  );
};

export default Navbar;
