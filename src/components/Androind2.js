import React from 'react'
import { Link } from 'react-router-dom';

const Android2 = () => {
    const color = "#9FB2FF"
    return (
      <div className="">
        <Link to="/register"><p className='phone: ml-80 underline 'style={{ color: color }}>skip</p></Link>
        <img
          className='mt-32 w-96'
          alt='running' 
          src='https://s3-alpha-sig.figma.com/img/9958/8bb7/dbf14a6d26ec54e2ba9e71eaef184f6b?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WaF8rMmvfqmePqO8U9FcI-Vj-rIs2-s2wBqi2eQU-eqSg4BT9mcxM9szMdI0l-Wx6339LRlvWmZxTo7DLkPgNY5TDpNfSrytPWvsbs7BQhx-qw579iY9Ku-U4OsgEJy-qrHnYY2XY4U4HdQRO7~bYooqRsx4Gkgy3y0WWQLGAIk3nQrhPuzhv-TaIBHiYpIoxK~S69VrUoN~bjuF3PJJ~MQY~1DYK29We51YBJ6e5P5Aft1AThbXiqrKivz8kn~NTpXZAjX7akU5N1zEPZjeoSl-O80YIJnW8udKSbgEG5nycAgUwlaqL0PdNkqh8wxmcGh3~PmJHFm03Wnmrd0sFA__'
        />
        <h1 className="phone:text-red-600 phone:ml-8 mt-10">GET BURN</h1>
        <p className='phone: ml-8 w-72' style={{size: "16px"}}>Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever</p>
        
        <Link to  = "/login"> <div
        className="rounded-full w-14 h-14 ml-72 flex justify-center items-center mt-24"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(222, 229, 255, 1), rgba(128, 154, 255, 1))",
        }}
      
      > <img className="w-7 h-7 " src="arrow.png"/> </div></Link>
      </div>
    );
}

export default Android2
