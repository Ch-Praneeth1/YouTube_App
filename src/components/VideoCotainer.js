import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_CARDS_URL } from '../utils/constants';
import { Link } from 'react-router-dom';


const VideoCotainer = () => {
  const [vidoes, setVidoes] = useState([]);
  useEffect(()=>{
      fetchVideos();
  },[]);

  const fetchVideos = async () =>{
    const data = await fetch(YOUTUBE_CARDS_URL);
    const json = await data.json()
    // console.log(json);
    setVidoes(json?.items)
  };

  return (
    <div className='flex flex-wrap'>
        {vidoes.map((video)=>(
          <Link to={'/watch?v='+video?.id}><VideoCard key={video?.id} data={video}/></Link>
        ))}
    </div>
  )
}

export default VideoCotainer