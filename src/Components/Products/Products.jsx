import React from 'react';
import Grid from '@material-ui/core';

const Products = [
    {id: 1, name: 'Kingfisher', description: 'Enjoy the moment', price: "1200"}
]

const Products = () => {
    <main>
        <Grid container justify="center" spacing={4}>
            {Products.map((beer) => {
                <Grid item key={beer.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            })}
        </Grid>
    </main>
}