import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import '../css/cocktailList.css'
import styled from 'styled-components'
import Drinks from '../components/Drinks'


const CocktailDetail = (props) => {
    const [cocktails, setCocktails] = useState([]);
    // const id = props.match.params.id
    console.log(props)

    useEffect( () => {
        axios.get(`www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=11007`)
            .then(res => {
                console.log(res)
                setCocktails(res.data.drinks)
            })
            .catch(err => {
                console.log(err.message)
            })
    },[]);
    return (
        <div>
            
        </div>
    )
}

export default CocktailDetail
