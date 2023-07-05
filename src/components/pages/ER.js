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
                        <h3>What is the meaning of the Eucharist? </h3>
                        <p>The Eucharist is the source and summit of the Christian life. The term “Eucharist” originates from the Greek word eucharistia, meaning thanksgiving.</p>
                        <Col align="center">
                            <h3>“This is my body which is given for you. Do this in remembrance of me. (Lk 22:19)”</h3>
                            <p>The one who sacrifices for me</p>
                            <p>Went to Limbo and saved His people</p>
                            <p>Release me from the chain of sins</p>
                            <p>Resurrected for me</p>
                            <p>I am now forever His</p>
                        </Col>
                    </Col>
                    <Col align="center">
                        <h3 class="badge bg-primary text-wrap fs-5 fw-semibold">What is the meaning of the Eucharist? </h3>
                        <p>The Eucharist is the source and summit of the Christian life. The term “Eucharist” originates from the Greek word eucharistia, meaning thanksgiving.</p>
                        <Col align="center">
                            <h3>“This is my body which is given for you. Do this in remembrance of me. (Lk 22:19)”</h3>
                            <p>The one who sacrifices for me</p>
                            <p>Went to Limbo and saved His people</p>
                            <p>Release me from the chain of sins</p>
                            <p>Resurrected for me</p>
                            <p>I am now forever His</p>
                        </Col>
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