import React from 'react'
import img1 from '../images/JHP.jpg'
import img2 from '../images/TMTLOGO.png'
import { Container, Tabs, Tab, Row, Col, Image } from 'react-bootstrap';
import {MorseDecoder} from "../inc/MorseDecoder"
import {Morsify} from "../inc/Morsify"
import {MorseChart} from "../inc/MorseChart"
function Morse(){  
    return(
        <>
            <h1 class="text-center">TMT Introduction</h1>
            <Container>
                <Tabs defaultActiveKey="intro"
                id="controlled-tab-example" justify>
                    <Tab eventKey="intro" title="Introductions">
                        <Row className="justify-content-md-center">
                            <h1 class='text-center'>Introduction</h1>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col className="justify-content-md-center">
                                <h3>History of Morse Code</h3>
                                <p>
                                    Morse Code is a type of character encoding that transmits telegraphic information using rhythm. Morse Code uses a standardized sequence of short and long elements to represent the letters, numerals, punctuation and special characters of a given message. The short and long elements can be formed by sounds, marks, or pulses, in on off keying and are commonly known as "dots" and "dashes" or "dits" and "dahs". The most popular current use of Morse Code is by amateur radio operators, although it is no longer a requirement for amateur licensing in many countries. In the professional field, pilots and air traffic controllers are usually familiar with Morse Code and require a basic understanding. Navigational aids in the field of aviation, such as VORs and NDBs, constantly transmit their identity in Morse Code. Morse Code is designed to be read by humans without a decoding device, making it useful for sending automated digital data in voice channels. For emergency signaling, Morse Code can be sent by way of improvised sources that can be easily "keyed" on and off, making Morse Code one of the most versatile methods of telecommunication in existence. 
                                </p>
                            </Col>
                            <Col>
                                <h3>Using Morse in TNTT</h3>
                                <p>
                                - Truyền tin là một trong các môn thích thú nhất trong sinh hoạt đoàn.<br></br> - Trong sinh hoạt mật mã Morse được dùng liên lạc khi ở xa tầm tiếng nói, hay mắt nhìn; chẳng hạn khi tập họp Ðoàn Sinh và đặc biệt trong các Hành Trình Đức Tin trại. <br></br>- Mặt khác, các mật thư được dùng trong Phong Trào, phần lớn đều quy thuận vào mật mã Morse. <br></br>- Ðặc điểm của mật mã Morse là để luyện tinh thần đồng đội; cùng học, cùng chơi, cùng truyền tin. <br></br>- Morse cũng dạy tính cần cù nhẫn nại mà các thiếu sinh cần tập luyện. 
                                </p>
                            </Col>
                            <Col>
                                <h3>Morse Chart</h3>
                                <MorseChart/>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="morse1" title="Morse Decoder">
                        <Row className="justify-content-md-center">
                            <Col>
                            <h1>Introduction</h1>
                            <MorseDecoder/>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="morse2" title="Morsify Message">
                        <Row className="justify-content-md-center">
                            <Col>
                            <h1>Introduction</h1>
                            <Morsify/>
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
            </Container>
        </>
        )
}
export default Morse;