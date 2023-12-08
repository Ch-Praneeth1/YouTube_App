import React from 'react'

const Comment = ({data}) => {
    const {name, text, replies} = data;
  return (
    <div className='flex flex-col bg-gray-300 shadow-xl m-2'>
        <div className='flex '>
            <img className='h-8' alt='icon' src='https://static.vecteezy.com/system/resources/thumbnails/019/879/198/small/user-icon-on-transparent-background-free-png.png'></img>
            <h3>{name}</h3>
        </div>
        <p className='text-s pl-14 py-0'>{text}</p>
    </div>
  )
}

export default Comment;