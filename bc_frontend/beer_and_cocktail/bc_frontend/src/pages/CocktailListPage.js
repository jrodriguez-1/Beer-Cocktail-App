import React, { useState, useEffect } from 'react'
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
import { useHistory } from 'react-router';




const CocktailListPage = (props) => {
    const [categories, setCategories] = useState();
    const [cocktails, setCocktails] = useState([]);
    const [cat, setCat] = useState('');
    let history = useHistory();


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

    }

    return (
        <div>
        <NavBar/>
        <SideBar/> 
        {cocktails.length !==0 ? <h2 className='categories'>{cat.replace('_',' ')}</h2> : <h1 className='category-title'>Categories</h1>}
        <Contain>  
            
        {cocktails.length !==0 ? <Drinks drinks={cocktails}/> : 
        <div className="cocktailListPage"> 
            {categories?.map((category)=>(
            <div className='cocktail-cat' onClick={onClickHandler}><p className='str-category'>{category.strCategory}</p>
            
            {/* <div className='detail-container'>
                <button className='detail-button'> <h3 className='detail-display' onClick={() => {
                    history.push({
                        pathname: `/cocktaildetail/${drinks.idDrink}`
                    })
                }} ></h3> </button>
                </div> */}

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





