import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import '../css/beerList.css'
import Header from '../components/Header'
import styled from 'styled-components'


const BeerListPage = (props) => {
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

    const onClickHandler = async () => {
       const data = await axios.post('http://localhost3000')
        console.log(data)
        setFav(data.name)
    };

        onClickHandler()

    
    return (
        <div>
        <Header/>
        <SideBar/> 
        <div className="BeerListPage">
            {beers?.map((beer)=>(
            <div>
        
        <button><h3>{beer.name}</h3></button>
                <img src={beer.image_url} alt=""/>
            <Mybutton onClick={onClickHandler}>Add to My Beer List</Mybutton>
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
&:hover{
    color: white;
}
`