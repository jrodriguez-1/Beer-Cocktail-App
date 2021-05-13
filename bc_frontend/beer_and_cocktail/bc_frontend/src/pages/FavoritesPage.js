import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import '../css/beerList.css'
import Header from '../components/Header'
import '../css/favs.css'
import styled from 'styled-components'


const FavoritesListPage = () => {
    // const [cocktails, setCocktails] = useState([]);
    // const [cat, setCat] = useState('');

    // const onClickHandler =(evt) => {
    //     const choice = evt.target.textContent.replaceAll(' ','_')
    //     setCat(choice)

    return (
        <div>
        <Header/>
        <SideBar/> 
        <BButton>My Beer</BButton>
        <BButton>My Cocktail</BButton>
         {/* <div className="BeerListPage">
        <TodoForm onSubmit={addTodo} />
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo} */}
        
    </div>

    )
}
     //{cocktails.length !==0 ? <Drinks drinks={cocktails}/> : 
// <div className="CocktailListPage">
//     {categories?.map((category)=>(
//     <div>
       
//         <button onClick={onClickHandler}><p>{category.strCategory}</p></button>
       
    
export default FavoritesListPage;

const BButton = styled.button`
 display: flex;
 flex-direction: column;
 min-height: 100px;
 background: #161a2b;
 text-align: center;
 margin: 128px auto;
 border-radius: 10px;
 padding-bottom: 50px;
 padding-right: 50px;
 color: #fff;
 font-size: 50px;
 align-content: right;
 padding: 16px;
 border: none;
 border-radius: 0 4px 4px 0;
 cursor: pointer;
 outline: none;
 background: linear-gradient(
   90deg,
   rgb(0, 0, 0) 0%,
   rgb(177, 129, 255) 100%
 );
 color: #fff;
 text-transform: capitalize;
}
`