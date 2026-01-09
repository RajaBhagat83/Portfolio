import React from 'react'

type stackinput = {
  name:string,
  icons : React.ReactNode;
}
function Stackinput({name ,icons}:stackinput) {
  return (
    <div className='hover:scale-105 focus:outline-2 focus:outline-offset-2  active:scale-100 cursor-pointer  w-64 ' >
      <div className='flex justify-start mt-12'>
        {icons}
        <h2 className='relative top-11 right-12 text-sm'>{name}</h2>
      </div>
    </div>
  )
}

export default Stackinput;
