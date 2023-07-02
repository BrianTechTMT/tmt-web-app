import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Container,Image} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import img1 from '../images/LBM/IMG_09874.jpg'
import img2 from '../images/LBM/IMG_09877.jpg'
import img3 from '../images/LBM/IMG_09889.jpg'
import img4 from '../images/LBM/IMG_09895.jpg'
import img5 from '../images/BDC/DSC_0043_1.jpg'
import img6 from '../images/BDC/DSC_0221_1.jpg'
import img7 from '../images/BDC/DSC_0252_1.jpg'
import img8 from '../images/BDC/IMG_0041.JPG'
import img9 from '../images/NHR/DAY2IMG_5079.JPG'
import img10 from '../images/NHR/DAY3IMG_5253.JPG'
import img11 from '../images/NHR/DAY3IMG_5528.JPG'
import img12 from '../images/NHR/DAY3IMG_5670.JPG'
function ImgSlider() {
  return (
    <div style={{ display: 'block', padding: 30 }}>
        <Container>
            <Row>
                <Col><h6 class='text-center'>Lễ Bổn Mạng</h6></Col>
                <Col><h6 class='text-center'>Sa Mạc Biển Đỏ</h6></Col>
            </Row>
            <Row>
                <Carousel indicators={false} controls={false}>
                  <Carousel.Item interval={2300}>
                    <Container>
                        <Row>
                            <Col><Image className="img-fluid" src= {img1} thumbnail/></Col>
                            <Col><Image className="img-fluid" src= {img5} thumbnail/></Col>
                        </Row>
                    </Container>
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                    <Container>
                        <Row>
                            <Col><Image className="img-fluid" src= {img2} thumbnail/></Col>
                            <Col><Image className="img-fluid" src= {img6} thumbnail/></Col>
                        </Row>
                    </Container>
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                    <Container>
                        <Row>
                            <Col><Image className="img-fluid" src= {img3} thumbnail/></Col>
                            <Col><Image className="img-fluid" src= {img7} thumbnail/></Col>
                        </Row>
                    </Container>
                  </Carousel.Item>
                  <Carousel.Item interval={3000}>
                    <Container>
                        <Row>
                            <Col><Image className="img-fluid" src= {img4} thumbnail/></Col>
                            <Col><Image className="img-fluid" src= {img8} thumbnail/></Col>
                        </Row>
                    </Container>
                  </Carousel.Item>
                </Carousel>
              </Row>
              <Row>
                <Col><h6 class='text-center'>Nghĩa Hiệp Retreat</h6></Col>
                <Col><h6 class='text-center'>Sa Mạc Bình Mình</h6></Col>
              </Row>
              <Row>
                  <Carousel indicators={false} controls={false}>
                    <Carousel.Item interval={2300}>
                      <Container>
                          <Row>
                              <Col><Image className="img-fluid" src= {img9} thumbnail/></Col>
                              <Col><Image className="img-fluid" src= {img5} thumbnail/></Col>
                          </Row>
                      </Container>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                      <Container>
                          <Row>
                              <Col><Image className="img-fluid" src= {img10} thumbnail/></Col>
                              <Col><Image className="img-fluid" src= {img6} thumbnail/></Col>
                          </Row>
                      </Container>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                      <Container>
                          <Row>
                              <Col><Image className="img-fluid" src= {img11} thumbnail/></Col>
                              <Col><Image className="img-fluid" src= {img7} thumbnail/></Col>
                          </Row>
                      </Container>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                      <Container>
                          <Row>
                              <Col><Image className="img-fluid" src= {img12} thumbnail/></Col>
                              <Col><Image className="img-fluid" src= {img8} thumbnail/></Col>
                          </Row>
                      </Container>
                    </Carousel.Item>
                  </Carousel>
                </Row>
         </Container>
    </div>
  );
}

export default ImgSlider;