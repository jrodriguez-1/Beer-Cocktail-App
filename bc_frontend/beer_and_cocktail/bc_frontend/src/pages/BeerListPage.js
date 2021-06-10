import React, { useState, useEffect } from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import '../css/beerList.css'
import styled from 'styled-components'
import { useHistory } from 'react-router';



const BeerListPage = (props) => {
    let history = useHistory();
    const [beers, setBeers] = useState();
    const [fav, setFav] = useState();
 

    useEffect( () => {
        const allBeerHandler = async () =>{
        const response = await axios.get('https://api.punkapi.com/v2/beers')
        console.log(response)
        setBeers(response.data)
        }
        allBeerHandler()
    },[]);

    const addClickHandler = async () => {
       const data = await axios.post('http://localhost3000/favorites')
        console.log(data)
        setFav(data.name)
    };

        addClickHandler()


    return (
        <div>
        <NavBar/>
        <SideBar/> 
        <div className="beerlist">
            <h1 className='beer-title'>Beers</h1>
            {beers?.map((beer)=>(
            <div>
        
        <button className='beer-button'><h3 classname='beerpage-name' onClick={() => {
                history.push({ 
                    pathname: `/beerdetail/${beer.id}`,
                   });}}>{beer.name}</h3></button>
                <img className='beerpage-image' src={beer.image_url} alt=""/>
            <button className='add-button' onClick={addClickHandler}>Add to My Beer List</button>
            </div>
            ))}     
      </div>
    </div>

    )
}
       
    
export default BeerListPage;

const Mybutton = styled.button`
box-sizing: border-box;
margin: 0;
padding: 0;
justify-content: start;
width: 200px;
min-height: 100px;
text-align: center;
margin: 40px auto;
border-radius: 10px;
padding-bottom: 20px;
font-size: 24px;
transform: translateX(700px);
&:hover{
    color: gray;
}
`