import React from 'react'

const LiveMessage = ({name, message}) => {
  return (
    <div className='flex text-center m-2 p-2 shadow-md'>
        <img className='h-7' alt='icon' src='https://static.vecteezy.com/system/resources/thumbnails/019/879/198/small/user-icon-on-transparent-background-free-png.png'></img>
        <h3 className='font-bold'>{name}</h3>
        <p className='text-s pl-4'>{message}</p>
    </div>
  )
}

export default LiveMessage