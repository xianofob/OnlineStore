import React, { useState, useEffect } from 'react';
import client from '../client';
import imageUrlBuilder from '@sanity/image-url'

/**
* @author
* @function Products
**/

const getUrl = (source) => {
    const builder = imageUrlBuilder(client);
    return builder.image(source)
}

export const Products = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        client.fetch(`*[_type == "product"] {
            name,
            image,
            description,
            quantity
        }`).then((data) => setProducts(data));
    }, []);

  return(
    <div>
        {products.map((product) => <img src={getUrl(product.image).url()} />)}
    </div>
   )
  }
