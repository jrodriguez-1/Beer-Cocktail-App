import React from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Images from '../images/images'
import '../css/image.css'
import BeerContainer from '../cards/ChooseBeer'
import CocktailContainer from '../cards/ChooseCocktail'


const HomePage = () => {
    return (
        <div>
         <NavBar/>
            <SideBar/> 
            <BeerContainer/>  <CocktailContainer/>
        <Images/>
       
        
        </div>

    )
}

export default HomePage





