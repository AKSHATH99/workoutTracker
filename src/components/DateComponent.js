import React from 'react'

export const DateComponent = ({day , date}) => {
  return (
    <div className='h-12'>
       <p className='  font-Montserrat'>{day}</p> <br/> <p className='ml-1 text-3xl font-semibold -mt-4 font-Montserrat'>{date}</p>    
    </div>
  )
}

export const SelectedDate = ({day , date}) => {
  return (
    <div className='bg bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 text-white h-20 rounded-lg w-[70px] flex flex-col items-center justify-center'>

       <p className='  font-Montserrat'>{day}</p> <br/> <p className='ml-1 text-3xl font-semibold -mt-4  font-Montserrat'>{date}</p>    
    </div>
  )
}


 
