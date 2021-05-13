import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import axios from 'axios'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import '../css/cocktailList.css'
import styled from 'styled-components'
import Drinks from '../components/Drinks'



const CocktailListPage = () => {
    const [categories, setCategories] = useState();
    const [cocktails, setCocktails] = useState([]);
    const [cat, setCat] = useState('');
    // const [detail, setDetail] = useState('')

    useEffect( () => {
        axios.get(`https://thecocktaildb.com/api/json/v2/9973533/list.php?c=list`)
            .then(res => {
                console.log(res)
                setCategories(res.data.drinks)
            })
            .catch(err => {
                console.log(err.message)
            })
    },[]);
    useEffect( () => {
        if (cat !== ''){
        axios.get(`https://thecocktaildb.com/api/json/v2/9973533/filter.php?c=${cat}`)
            .then(res => {
                console.log(res)
                setCocktails(res.data.drinks.slice(0,20))
            })
            .catch(err => {
                console.log(err.message)
            })}
    },[cat]);

    const onClickHandler =(evt) => {
        const choice = evt.target.textContent.replaceAll(' ','_')
        setCat(choice)

        // useEffect( () => {
        //     if (cat !== ''){
        //     axios.get(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${detail}`)
        //         .then(res => {
        //             console.log(res)
        //             setCocktails(res.data.drinks.slice(0,20))
        //         })
        //         .catch(err => {
        //             console.log(err.message)
        //         })}
        // },[cat]);
    
        

    // const secondClickHandler =(evt) => {
    //     const nextChoice = evt.target.textContent.replaceAll(' ','_')
    //     setDrink(nextChoice)
    
        


    }

    return (
        <div>
        <NavBar/>
        <SideBar/> 
        {cocktails.length !==0 ? <h2>{cat.replace('_',' ')}</h2> : <h2>Categories</h2>}
        <Contain>  
            
        {cocktails.length !==0 ? <Drinks drinks={cocktails}/> : 
        <div className="CocktailListPage"> 
            {categories?.map((category)=>(
            <div>
                
                
                <button onClick={onClickHandler}><p>{category.strCategory}</p></button>

            </div>
            ))}     
      </div>
        }
      </Contain>
     </div>
    )
}

    
    
export default CocktailListPage;

const Contain = styled.div`
box-sizing: border-box;
margin: 0;
padding: 0;
display: flex;
flex-direction: column;
justify-content: start;
width: 600px;
min-height: 100px;
text-align: center;
margin: 128px auto;
border-radius: 10px;
padding-bottom: 32px;
font-size: 24px;
&:hover{
    color: white;
}
`
const MyButton = styled.button`
`





