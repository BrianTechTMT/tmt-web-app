import React from 'react'
import image1 from "../images/EImages/ER1.jpg"
import image2 from "../images/EImages/ER2.webp"
import image3 from "../images/EImages/ER3.jpeg"
import { Container, Row, Col, Card} from 'react-bootstrap';
function ER(){
    return(
        <div className="pt-5 bg-image" >
            <Container className='justify-content-md-center pt-3 border border-primary rounded-5 shadow-lg p-3 mb-5 bg-body rounded'> 
                <h2 align="center">Eucharistic Revival</h2>
                <Row className='pt-2 justify-content-md-center'>
                    <Col align="center">
                        <div>
                            <span>
                                <div>
                                    <h3 class="badge bg-primary text-wrap fs-5 fw-semibold">What is Eucharistic Revival? </h3>
                                    <p>The National Eucharistic Revival is a three-year initiative by the U.S. bishops that aims to inspire, educate, and unite the faithful in a more intimate relationship with Jesus in the Eucharist.</p>
                                </div>
                            </span>
                            <span>
                                <Col align="center">
                                    <h3 class="badge bg-secondary text-wrap fs-5 fw-semibold">“This is my body which is given for you. Do this in remembrance of me. (Lk 22:19)”</h3>
                                    <p>He's not speaking figuratively. He's speaking literally. 
                                        The Eucharist we have in our Masses--the Eucharist we have every single Catholic Church 
                                        throughout the world for the last 2000 years--is not a symbol of Jesus. 
                                        It truly is Jesus' Body, Blood, Soul, and Divinity" - Father Mike Schmitz</p>
                                </Col>
                            </span>
                        </div>

                    </Col>
                    <Col align="center">
                        <div>
                            <span>
                                <div>
                                    <h3 class="badge bg-primary text-wrap fs-5 fw-semibold">Why we need to focus on the Eucharist? </h3>
                                    <p>
                                        The Eucharist is the source and summit of the Christian life. The term “Eucharist” originates from the Greek word eucharistia, <br></br>meaning thanksgiving.
                                    </p>
                                </div>
                            </span>
                            <span>
                                <Col align="center pt-3">
                                    <h3 class="badge bg-secondary text-wrap fs-5 fw-semibold">“This is my body which is given for you. Do this in remembrance of me. (Lk 22:19)”</h3>
                                    <p>The one who sacrifices for me</p>
                                    <p>Went to Limbo and saved His people</p>
                                    <p>Release me from the chain of sins</p>
                                    <p>Resurrected for me</p>
                                    <p>I am now forever His</p>
                                </Col>
                            </span>
                        </div>
                    </Col>                    
                </Row>
            </Container>
            <Container className='pt-5'>
                <Row className='justify-content-md-center pt-3 '>
                    <Col align="center">
                        <Card className= 'border rounded-5 shadow-lg p-3 mb-5 bg-body rounded' style={{ width: '18rem' }} align="center">
                            <Card.Header> Body and Blood Of Christ</Card.Header>
                            <Card.Img variant="top" src={image2} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Checking Title Style</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col align="center">
                        <Card className= 'border rounded-5 shadow-lg p-3 mb-5 bg-body rounded' style={{ width: '18rem' }} align="center">
                            <Card.Header className='fs-5 fw-bold'> Eucharistic Adoration</Card.Header>
                            <Card.Img variant="top" src={image1} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Checking Title Style</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col align="center">
                        <Card className= 'border rounded-5 shadow-lg p-3 mb-5 bg-body rounded ' style={{ width: '18rem' }} align="center">
                            <Card.Header className='fs-5 fw-bold'> Eucharistic Visitation</Card.Header>
                            <Card.Img variant="top" src={image3} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>Checking Title Style</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default ER;