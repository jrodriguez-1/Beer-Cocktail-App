import React from 'react'
import still from './still.jpg';
import styled from 'styled-components'

const Images = () => {
    return (
        <div>
           <Image src={still} alt=""/>
        </div>
    )
}

export default Images;

const Image = styled.image`
    background-image: url('../images/still.jpg') center center/cover no-repeat;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
    object-fit: contain;
    margin-top: -80px;
`

