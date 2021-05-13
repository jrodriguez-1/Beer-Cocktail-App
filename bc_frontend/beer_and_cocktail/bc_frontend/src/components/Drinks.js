import React from 'react'
import styled from 'styled-components'

const Drinks = (props) => {
    return (
        <ul>
            {props.drinks.map((drink) => {
                return (<SButton>{drink.strDrink}<img src={drink.strDrinkThumb} alt=""/></SButton> 
            )})}
        </ul>
    )
}

export default Drinks
const SButton = styled.button`
display: flex;
flex-direction: column;
justify-content: start;
width: 400px;
min-height: 50px;
text-align: center;
margin: 128px auto;
border-radius: 10px;
padding-bottom: 40px;
margin: 20px 0;
color: #fff;
font-size: 30px;
align-content: center;
padding: 16px;
border: none;
border-radius: 0 4px 4px 0;
cursor: pointer;
outline: none;
text-decoration: none;
color: rgba(0, 0, 0, 0.8);
background: rgb(102, 51, 153);
font-weight: bold;
text-transform: uppercase;
transition: all 0.5s ease-in-out;
:hover{
background: #21ebff;
color: #111;
box-shadow: 0 0 50px #ff2121;
transition-delay: 0.3ms;
}
`