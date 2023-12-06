import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleSideBar } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Head = () => {

  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState("");

  const toggleHandler = () =>{
    dispatch(toggleSideBar())
  };

  useEffect(()=>{
   const timer= setTimeout(() => fetchSearchData(),200);

    return () =>{
      clearTimeout(timer);
    }
  },[searchValue]);

  const fetchSearchData = async () =>{
      const data = await fetch(YOUTUBE_SEARCH_API+searchValue);
      const json = await data.json();
      console.log(json[1]);
  };




  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>

      <div className='flex col-span-1'>
        <img onClick={()=> toggleHandler()} className='h-8 cursor-pointer' alt='hamburger menu' src='https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png'></img>
        <img  className='h-8 cursor-pointer ml-2' alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png'></img>
      </div>

      <div className='flex col-span-10 justify-center h-10'>
        <input placeholder='Search'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)} 
            className='w-[450px] border border-black rounded-l-2xl text-center' 
            type='text'>
        </input>
        <button className='w-14 bg-gray-200 border border-black rounded-r-2xl'>🔍</button>
        <img className='ml-2 cursor-pointer' alt='mic' src='data:image/png;base64,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'></img>
      </div>

      <div>
          <img className='h-8  col-span-1 cursor-pointer' alt='user' src='https://static.vecteezy.com/system/resources/thumbnails/019/879/198/small/user-icon-on-transparent-background-free-png.png'></img>
      </div>

    </div>
  );
};

export default Head;