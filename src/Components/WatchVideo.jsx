import React from 'react'
import { useParams } from 'react-router-dom'
import { embedUrl } from '../utils/constants'
import { useSelector } from 'react-redux'

const WatchVideo = () => {

    const showSideMenu = useSelector((state) => state.showSideMenu)

    const {id} = useParams()
    const videoUrl = embedUrl+id

  return (
    <div className='mt-5'>
        <iframe
        src={videoUrl}
        className='m-auto ml-5 rounded-xl'
        title="YouTube video player"
        style={{width: '50vw', height: '60vh' }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

export default WatchVideo