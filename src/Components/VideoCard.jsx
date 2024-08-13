import React from 'react'
import numeral from 'numeral';

const formatNumber = (num) => {
  return numeral(num).format('0.0a'); // Formats as K or M
};

const VideoCard = (props) => {
    const {snippet,statistics} = props.data;
    const thumbImgUrl = (snippet.thumbnails.maxres) ? (snippet.thumbnails.maxres.url) : (snippet.thumbnails.high.url)
  

  return (
    <div className='h-[300px] w-[300px] p-1 m-2 rounded-lg hover:bg-slate-100'>
        <img className='h-[150px] w-auto rounded-md' src={thumbImgUrl} alt='video_thumbnail' />
        <h5 className='font-semibold'>{snippet.title}</h5>
        <p>{snippet.channelTitle}</p>
        <p>{formatNumber(statistics.viewCount).toUpperCase()} views</p>
    </div>
  )
}

export default VideoCard