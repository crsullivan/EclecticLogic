import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import Button from '@material-ui/core/Button';

const TopCarousel = (props) => {

    {
        var items = [
            {
                name: <img src={require("../images/protfolioGif.gif")} width="800" height="500" alt="Omega2020 theme" />,

            },
            {
                name: <img src={require("../images/covidGif.gif")} width="800" height="500" alt="Omega2020 theme" />,

            }
        ]
    
        return (
            <Carousel>
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        )
    }
    
    function Item(props)
    {
        return (
            <Paper>
                <div classname="carouselImage">{props.item.name}</div>
                {/* <Button className="CheckButton">
                    Check it out!
                </Button> */}
            </Paper>
        )
    }

}

export default TopCarousel;