import React from 'react'
import "./index.css"
import { Container, Row, Col, Input, ButtonToggle } from 'reactstrap'

export default function LowerTextBox() {

    return <>

        <Container fluid style={{ width: "94%" }}>
            <Row className="lowerHeight" style={{ backgroundColor: "#FBF1E9", height: "210px", padding: "25px", borderRadius: "7px" }} >
                <Col md='5' className='LowerBox'>
                    <div className='lowerText'>
                        <h2 >Get Expert Tips In Your Inbox </h2>
                        <p  >Subscribe to our newsletter and stay updated.</p>
                    </div>
                </Col>
                <Col md='7' className='LowerBox'>
                    <div className="buttonMedia" style={{ display: "flex", width: "500px" }}>
                        <Input className="lowerInput" placeholder="Write Your Email Here" bsSize="lg" />
                        <div className='mLowerBtn'>
                            <ButtonToggle className="lowerBtn">Subscribe</ButtonToggle>{' '}
                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
        <br></br>
        <br></br>
        <br></br>

    </>
}
