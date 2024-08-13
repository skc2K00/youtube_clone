import React from 'react'
import SideMenu from './SideMenu'
import VideoCards from './VideoCards'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const Body = () => {

    const showSideMenu = useSelector((state) => state.showSideMenu)
    // console.log(showSideMenu)

  return (
    <div className='flex'>
        {showSideMenu.isShowMenu && <div className='w-1/6 h-screen'>
            <SideMenu />
        </div>}
        <Outlet />
    </div>
  )
}

export default Body