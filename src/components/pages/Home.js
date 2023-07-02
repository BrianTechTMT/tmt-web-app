import React, {Component} from 'react'
import card1 from '../images/highlight.jpg';
import ImgSlider from '../inc/ImgSlider';
import {Image, Card, Carousel, Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
class Home extends React.Component{
    render(){
        return(
            <>
            <Container>
                <Row>
                    <div bg-gradient-primary></div>
                    <Image className="img-fluid" src= {card1} thumbnail/>
                </Row>
                <Row className="justify-content-md-center" >
                    <div className="fluid">
                        <h4 class='text-center'>Highlight Events</h4>
                        <ImgSlider/>
                    </div>
                </Row>
                <Row className="justify-content-md-center">
                <div className="fluid">
                        <h4 class='text-center'>Yearbook</h4>
                        <iframe class="scribd_iframe_embed" title="TMT 30th Yearbook" src="https://www.scribd.com/embeds/636195821/content?start_page=1&amp;view_mode=slideshow&amp;access_key=key-yZZ9IjmHl4JForTxTGsS" tabindex="0" data-auto-height="true" data-aspect-ratio="0.7729220222793488" scrolling="no" width="100%" height="600" frameborder="0"></iframe>
                    </div>
                   
                </Row>
            </Container>
            </>
        )
    }
}
export default Home;