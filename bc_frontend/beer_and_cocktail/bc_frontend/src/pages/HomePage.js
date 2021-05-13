import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Images from '../images/images'
import Video from '../images/video'
import styled from 'styled-components'
import '../css/image.css'
// import MyCarousel from '../components/MyCarousel'


const HomePage = () => {
    return (
        <div>
         <NavBar/>
            <SideBar/> 
        <Video></Video>
        {/* <MyCarousel/> */}
        </div>

    )
}

export default HomePage





