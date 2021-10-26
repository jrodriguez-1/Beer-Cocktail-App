import React, { useState, useEffect } from 'react'
import Navbar from '../components/NavBar'
import Sidebar from '../components/SideBar'
import axios from 'axios'


const BeerDetail = (props) => {
    const [beers, setBeers] = useState();
    const id = props.match.params.id

    useEffect( () => {
        const beerDetailHandler = async () =>{
        const response = await axios.get(`https://api.punkapi.com/v2/beers/${id}`)
        console.log(response)
        setBeers(response.data)
        }
        beerDetailHandler()
    },[]);

    const onClickDetail = async () => {
        const data = await axios.post('http://localhost3000')
        console.log(data)
        setBeers(data)
    }

        onClickDetail()


    return (
        <div className='beer-detail'>
        <Navbar/>
        <Sidebar/> 
        {beers?.map((beer)=>(
            <div>
                <h1 className='beer-name'><span className='beer-span'>{beer.name}</span></h1>
                <img className='beer-image' src={beer.image_url} alt=""/>
                <ul>
                    <li className='beer-detail-list'>
                        <h4><span>Yeast:</span> {beer.ingredients.yeast}</h4>
                        <h4><span>Tagline:</span> {beer.tagline}</h4>
                        <h4><span>Description:</span>{beer.description}</h4>
                        <h4><span>Food Parings:</span>{beer.food_pairing}</h4>
                        <h4>ABV: {beer.abv}</h4>
                    </li>
                </ul> 

            </div>
        ))}

            
        </div>
    )
}

export default BeerDetail

