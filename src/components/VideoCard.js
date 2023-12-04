import React from 'react'

const VideoCard = ({data}) => {
   console.log(data);
   const url = data?.snippet?.thumbnails?.medium?.url;
   const title = data?.snippet?.title;
   const channelName =  data?.snippet?.channelTitle;
   const views = data?.statistics?.viewCount;
  return (
    <div className='p-2 m-2 w-80'>
      <img className='rounded-xl' alt='Thumb nail' src={url}></img>
      <ul className='py-2'l>
        <li className='font-bold'>{title}</li>
        <li>{channelName}</li>
        <li>{views} Views</li>
      </ul>
    </div>
  )
}

export default VideoCard