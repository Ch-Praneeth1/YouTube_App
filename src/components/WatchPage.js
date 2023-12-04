import React from 'react'
import { useDispatch } from 'react-redux'
import { offSideBar } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    
    console.log(searchParams.get("v"));

    const Dispatch = useDispatch();
    Dispatch(offSideBar());

  return (
    <div className='px-5'>
        <iframe 
            width="1000" 
            height="500" 
            src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
        </iframe>
    </div>
  )
}

export default WatchPage