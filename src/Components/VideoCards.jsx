import React, { useEffect, useState } from 'react'
import {videosApi} from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'


const VideoCards = () => {
    const [videos,setVideos] = useState([])

    useEffect(() => {
        const fetchVideos = async () => {
            const response = await fetch(videosApi);
            const res = await response.json()
            setVideos(res.items)
        }

        fetchVideos();

    },[])

  return (
    <>
        <div className='flex flex-col w-5/6 mt-5'>
            <div className='flex ml-5 mb-2'>
                <button className='ml-1 mr-1 pr-2 pl-2 p-1 rounded-md bg-slate-100'>All</button>
                <button className='ml-3 mr-1 pr-2 pl-2 p-1 rounded-md bg-slate-100'>Music</button>
                <button className='ml-3 mr-1 pr-2 pl-2 p-1 rounded-md bg-slate-100'>Telugu Cinema</button>
                <button className='ml-3 mr-1 pr-2 pl-2 p-1 rounded-md bg-slate-100'>News</button>
                <button className='ml-3 mr-1 pr-2 pl-2 p-1 rounded-md bg-slate-100'>Software Engineering</button>
                <button className='ml-3 mr-1 pr-2 pl-2 p-1 rounded-md bg-slate-100'>Live</button>
                <button className='ml-3 mr-1 pr-2 pl-2 p-1 rounded-md bg-slate-100'>Algorithms</button>
                <button className='ml-3 mr-1 pr-2 pl-2 p-1 rounded-md bg-slate-100'>Gadgets</button>
                <button className='ml-3 mr-1 pr-2 pl-2 p-1 rounded-md bg-slate-100'>New to you</button>
                <button className='ml-3 mr-1 pr-2 pl-2 p-1 rounded-md bg-slate-100'>Watched</button>
            </div>
            <div className='flex flex-wrap'>
                {videos.map((video) => (
                    <Link to={"/watch/"+video.id} key={video.id}>
                        <VideoCard  data={video} />
                    </Link>
                ))}
            </div>
        </div>
    </>
    
  )
}

export default VideoCards