// "strDrink": "Margarita",
//             "strDrinkAlternate": null,
//             "strTags": "IBA,ContemporaryClassic",
//             "strVideo": null,
//             "strCategory": "Ordinary Drink",
//             "strIBA": "Contemporary Classics",
//             "strAlcoholic": "Alcoholic",
//             "strGlass": "Cocktail glass",
//             "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
import React from 'react'
import styled from 'styled-components'

const DrinkDetail = (props) => {
    return (
    
            <div>
                <h2>
            {props.drinks.map((detail) => {
                return (<MyButton>{detail.strDrink}, {detail.strTags},{detail.strCategory}, {detail.strIBA}, {detail.strGlass}, {detail.strInstructions} <img src={detail.strDrinkThumb} alt=""/></MyButton>)
                })}
                </h2>
            </div>
    )
}

export default DrinkDetail

const MyButton = styled.button`
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
transition-delay: 0.5ms;
}
`
