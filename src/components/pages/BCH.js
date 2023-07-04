import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import DT from "../images/BCH/JH.jpg"
import DPQT from "../images/BCH/CT.jpg"
import DPNH from "../images/BCH/KLN.jpg"
import TQ from "../images/BCH/JD.jpg"
import TK from "../images/BCH/DT.jpg"
import AN from "../images/BCH/AP.jpg"
import TN from "../images/BCH/TN.jpg"
import NS from "../images/BCH/CL.jpg"
import HS from "../images/BCH/KTN.jpg"

function BCH(){
    return(
        <>
        <Container className="justify-content-md-center">
            <Row className="justify-content-md-center">
                <Col align="center">
                    <h3 className='mt-1' align="center">Ban Chấp Hành Đoàn</h3>
                    <Card style={{ width: '18rem' }} className="d-flex" align="center">
                        <Card.Img variant="top" src={DT}  />
                        <Card.Body>
                            <Card.Title align="center">Đoàn Trưởng</Card.Title>
                            <Card.Subtitle align="center">Ban Thuần Vụ Đoàn</Card.Subtitle>
                            <Card.Text>
                            Tr. John Huỳnh
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-md-center mt-2">
                <Col align="center">
                    <Card style={{ width: '18rem' }} align="center">
                        <Card.Header>Doan Pho</Card.Header>
                        <Card.Img variant="top" src={DPQT} />
                        <Card.Body>
                            <Card.Title>Đoàn Phó Quản Trị</Card.Title>
                            <Card.Subtitle>Ban Thuần Vụ Đoàn</Card.Subtitle>
                            <Card.Text>
                            Tr. Cecilia Trần
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col align="center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={DPNH} />
                        <Card.Body>
                            <Card.Title>Đoàn Phó Nghiên Huấn</Card.Title>
                            <Card.Subtitle>Ban Thuần Vụ Đoàn</Card.Subtitle>
                            <Card.Text>
                            Tr. Kevin Lộc Nguyễn
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col align="center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={TQ} height="268px" />
                        <Card.Body>
                            <Card.Title>Thủ Quỹ Đoàn</Card.Title>
                            <Card.Subtitle>Ban Thuần Vụ Đoàn</Card.Subtitle>
                            <Card.Text>
                            Tr. John Đỗ
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col align="center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={TK} height="268px" />
                        <Card.Body>
                            <Card.Title>Thư Ký Đoàn</Card.Title>
                            <Card.Subtitle>Ban Thuần Vụ Đoàn</Card.Subtitle>
                            <Card.Text>
                            Tr. David Trần
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-md-center mt-2">
                <Col align="center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={AN} height="268px"/>
                        <Card.Body>
                            <Card.Title>Ngành Trưởng Ấu Nhi</Card.Title>
                            <Card.Subtitle>Ban Chấp Hành Đoàn</Card.Subtitle>
                            <Card.Text>
                            Tr. Angela Phạm
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col align="center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={TN} height="268px" />
                        <Card.Body>
                        <Card.Title>Ngành Trưởng Thiếu Nhi</Card.Title>
                            <Card.Subtitle>Ban Chấp Hành Đoàn</Card.Subtitle>
                            <Card.Text>
                            Tr. Triết Nguyễn
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col align="center">
                    <Card style={{ width: '18rem' }} >
                        <Card.Img variant="top" src={NS} height="268px" />
                        <Card.Body>
                        <Card.Title>Ngành Trưởng Nghĩa Sĩ</Card.Title>
                            <Card.Subtitle>Ban Chấp Hành Đoàn</Card.Subtitle>
                            <Card.Text>
                            Tr. Chi Lê
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col align="center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={HS} height="268px" />
                        <Card.Body>
                        <Card.Title>Ngành Trưởng Hiệp Sĩ</Card.Title>
                            <Card.Subtitle>Ban Chấp Hành Đoàn</Card.Subtitle>
                            <Card.Text>
                            Tr. Kevin Thông Nguyễn
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default BCH;