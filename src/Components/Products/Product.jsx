import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import useStyles from './Styles';

const Product = ({beer}) => {
    const classes = useStyles();
    return (
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={beer.image} title={beer.name}/>
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {beer.name}
                        </Typography>
                        <Typography varient="h5">
                        {beer.price}
                    </Typography>
                    </div>
                    <Typography varient="body2" color="textSecondary">
                        {beer.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to Cart">
                        <AddShoppingCart/>
                    </IconButton>
                </CardActions>
            </Card>
    )
}

export default Product
