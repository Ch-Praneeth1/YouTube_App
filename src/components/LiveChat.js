import React, { useEffect } from 'react'
import LiveMessage from './LiveMessage'
import { commentMessage, userNameGenerator } from '../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/commentsSlice';

const LiveChat = () => {

    const dispatch = useDispatch()
    const chatMessages = useSelector((store)=> store.chat.messages)

    useEffect(()=>{
        const i = setInterval(()=>{
            //api call for collecting comments              these api calls are made after every peeticular time interval which is known as api pooling
            // console.log("api call")
            dispatch(addMessage({
                name:userNameGenerator(),
                message:commentMessage(20),
            }))
        },500)

        return () =>{
            clearInterval(i);
        };

    },[]);

  return (
    <div className='w-full h-[500px] pl-2 ml-2 border border-black bg-slate-100 rounded-lg  overflow-y-scroll flex flex-col-reverse'>
        {chatMessages.map((message, index)=>(
            <LiveMessage key={index} name={message.name} message={message.message} />
        ))}
    </div>
  )
}

export default LiveChat