import React from 'react'

type stackinput = {
  name:string,
  icons : React.ReactNode;
}
function Stackinput({name ,icons}:stackinput) {
  return (
    <div className='hover:scale-105 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:scale-100 cursor-pointer ' >
      <div className='h-50 w-64  flex justify-start mt-12'>
        {icons}
        {/* <FaReact size={50} className='ml-28 '/> */}
        <h2 className='relative top-12 right-12 mt-2 w-44 mr-7'>{name}</h2>
      </div>
    </div>
  )
}

export default Stackinput;
