import React, { useEffect, useState } from 'react'

import { RxHamburgerMenu } from "react-icons/rx";
import {youtubeImgIcon,userProfileIcon} from '../utils/constants'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSideMenu } from '../utils/showSideMenuSlice';
import { Link } from 'react-router-dom';
import {suggestionsUrl} from "../utils/constants"
import Suggestions from './Suggestions';

const Header = () => {

    const showSideMenu = useSelector((state) => state.showSideMenu)
    const dispatch = useDispatch();

    const [searchParams,setSearchParams] = useState("");
    const [suggestions,setSuggestions] = useState([]);
    const [focusSearch,setFocusSearch] = useState(false);
    
    const searchVideos = (e) => {
        setSearchParams(e.target.value);
        // console.log(searchParams)
    }

    useEffect(() => {
        const fetchSuggestions = async () => {
            const data = await fetch(suggestionsUrl+searchParams)
            const searchResults = await data.json()
            
            setSuggestions(searchResults[1])
            console.log(suggestions)
        }

        setTimeout(()=> {
            fetchSuggestions()
        },200)
        
    },[searchParams])


  return (
    <>
    <div className='flex items-center pr-2 pl-2 ml-2 mr-8 justify-between rounded shadow-sm'>
        <div className='flex items-center'>
            <span onClick={() => dispatch(toggleSideMenu())} ><RxHamburgerMenu /></span>
            <Link to="/" >
                <img className='ml-2 h-[70px] w-[180px]' src={youtubeImgIcon} />
            </Link>
        </div>
        <div className='flex border-2 rounded-2xl items-center h-[30px] w-[400px] justify-between p-1'>
            <input onChange={searchVideos} className='w-5/6 pl-3' type='text' placeholder='Search' 
            onFocus={() => setFocusSearch(true)} 
            onBlur={() => setFocusSearch(false)}
            />
            <IoSearchOutline className='w-1/6' />
        </div>
        <div className='flex items-center p-2 justify-between w-[120px]'>
            <IoIosNotificationsOutline className='h-12 w-8' />
            <img className='h-8' src={userProfileIcon} />
        </div>
    </div>
    <div className=''>
        {focusSearch && <Suggestions data={suggestions} />}
    </div>
    
    </>
  )
}

export default Header