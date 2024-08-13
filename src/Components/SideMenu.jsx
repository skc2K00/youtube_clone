import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { Link } from 'react-router-dom';
import You from './You';
import Subscriptions from './Subscriptions';

const SideMenu = () => {
  return (
    <div className='ml-2 mt-5'>
        <Link to="/">
          <div className='flex items-center font-medium p-2 hover:bg-slate-100 rounded-2xl'>
            <MdHomeFilled className='w-1/5'/>
            <h4 className='w-4/5'>Home</h4>
          </div>
        </Link>
        <h4 className='p-2 hover:bg-slate-100 rounded-2xl'>Shorts</h4>
        <Link to="/subscriptions">
          <div className='p-2 hover:bg-slate-100 rounded-2xl'>
            <Subscriptions />
          </div>
        </Link>
        <hr className='mt-2 mb-2' />
        <Link to="/you" >
        <div className='p-2 hover:bg-slate-100 rounded-2xl'>
            <You />
        </div>
        <ul className='font-normal'>
          <li className='p-2 hover:bg-slate-100 rounded-2xl'>History</li>
          <li className='p-2 hover:bg-slate-100 rounded-2xl'>Playlists</li>
          <li className='p-2 hover:bg-slate-100 rounded-2xl'>Watch later</li>
          <li className='p-2 hover:bg-slate-100 rounded-2xl'>Liked videos</li>
        </ul>
        </Link>
    </div>
  )
}

export default SideMenu