import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Products/Product';

const products = [
    {id: 1, name: 'Kingfisher', description: 'Enjoy the moment', price: "12$"},
    {id: 2, name: 'Heiniken', description: 'Enjoy the moment', price: "12$"}
]

const Products = () => {
    return (
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((beer) => (
                <Grid item key={beer.id} xs={12} sm={6} md={4} lg={3}>
                    <Product beer={beer}/>
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Products;

