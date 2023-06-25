import React, { useState, useEffect } from 'react'
import CustomCarousel from '../components/CustomCarousel/CustomCarousel'

/**
* @author
* @function Home
**/

export const Home = (props) => {
    //render -> lifecycle method
    let [counter, setCounter] = useState(0);
    let [products, setProducts] = useState([]);

    console.log("Se rerandeaza");

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((data) => data.json())
            .then((data) => setProducts(data));
    }, []); //dependency array

  return(
    <>
     {/* <CustomCarousel /> */}
        {products.map((product) => <p>{product.title}</p>)}
        <h3>Counter: {counter}</h3>
        <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>Add</button>
        <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>Substract</button>
    </>
   )
  }
