import React from 'react'

const Button = ({name}) => {
  return (
    <div className=' p-2 m-4 bg-gray-200'>
        <button>{name}</button>
    </div>
  )
}

export default Button