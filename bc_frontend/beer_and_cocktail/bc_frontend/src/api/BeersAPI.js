import React,{ useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const BASE_URL= 'https://api.punkapi.com/v2/beers';

// function Beer(){
//   const { ID } = useParams()
//   const url = BASE_URL
//   const [product, setProduct] = useState({
//     loading: false,
//     data: null,
//     error: false,

//   })
//   let content = null

//   useEffect(() => {
//     setProduct({
//     loading: false,
//     data: null,
//     error: false,
//   })
//   axios.get(url)
//   .then()


// }




const fetchAllBeers = async () => {
    const response = await axios.get(BASE_URL);
    const data = await response.json();
    return data;
};

// const fetchBeerByID = async (ID) => {
//   const response = await axios.get(`${BASE_URL}/${ID}`);
//   const data = await response.json();
//   return data;
// };


const fetchRandomBeer = async (filters = null) => {
  const response = await axios.get(`${BASE_URL}/random`);
  const data = await response.json();
  return data;
};

const fetchBeerByName = async (beer_name) => {
  const response = await axios.get(`${BASE_URL}/${beer_name}`)
  const data = await response.json();
  return data;
};

const addBeerToFavs = (beerObject, token) => { 
  return axios.post(BASE_URL, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: "POST",
    body: JSON.stringify(beerObject)
  });
};

const updateBeer = async (ID) => {
  const response = await axios.update(`${BASE_URL}/${ID}`);
  const data = await response.json();
  return data;
};

const deleteBeer = async (ID) => {
  const response = await axios.delete(`${BASE_URL}/${ID}`);
  const data = await response.json();
  return data;
};




export {
    fetchAllBeers,
    fetchBeerByName,
    fetchRandomBeer,
    addBeerToFavs,
    updateBeer,
    deleteBeer,
};