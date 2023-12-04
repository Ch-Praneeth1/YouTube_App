import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {

  const isSideBarOpen = useSelector(store => store.app.sideBarOpen);

  if(!isSideBarOpen) return null;
  
  return (
    <div className='w-52 pl-4 shadow-lg'>
      <div className='border border-b-slate-500 pb-2 pt-2'>
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Subscriptions</li>
          <li>Live</li>
        </ul>
      </div>
      <div className='border border-b-slate-500 pb-2 pt-2'>
        <h1 className='font-bold pb-4'>Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Movies</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Shows</li>
        </ul>
      </div>
      <div className='border border-b-slate-500 pb-2'>
        <h1 className='font-bold pb-4 pt-2'>Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Movies</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Shows</li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar