import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import Button from '@material-ui/core/Button';

const TopCarousel = (props) => {

    {
        var items = [
            {
                name: <img src={require("../images/protfolioGif.gif")} width="90%" alt="Portfolio work done by this company." />,

            },
            {
                name: <img src={require("../images/covidGif.gif")} width="90%" alt="Data management and visualization done by this company." />,

            }
        ]
    
        return (
            <Carousel width="150%">
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        )
    }
    
    function Item(props)
    {
        return (
                <div classname="carouselImage">{props.item.name}</div>
        )

    }

}

export default TopCarousel;