import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import classes from '*.module.css';

function Product({products}) {
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image="" title={products.name}/>
                <CardContent>
                    <div className={classes.CardContent}>
                        <Typography variant="h5" gutterBottom>
                            {products.price}
                        </Typography>
                    </div>
                    <Typography varient="h2" color="textSecondary">
                        {products.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.CardActions}>
                    <IconButton aria-label="Add to Cart">
                        <AddShoppingCart/>
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default Product
