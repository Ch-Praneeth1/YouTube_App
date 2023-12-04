import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const buttonList = ["Movie","God","Songs","Sports","Entertinment","trailers","Kid Shows","Comedy Shows","Learnig","Hand Craft","Paintings","Edits"];
  return (
    <div className='flex'>
      
      {buttonList.map((name) => (
        <Button key={name} name={name}/>
      ))}
    </div>
  )
}

export default ButtonList