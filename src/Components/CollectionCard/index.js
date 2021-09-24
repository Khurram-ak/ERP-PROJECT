import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import collection1 from "../../Images/collection1.png"
import collection2 from "../../Images/collection2.png"
import collection3 from "../../Images/collection3.png"
import "./index.css"
export default function CollectionCard() {

    return <>

        <Container style={{ width: "94%",cursor:'pointer' }} fluid>
            <Row>
                <Col md='4'>
                    <div className="downHeight" style={{ height: "536px" }}>
                        <Row>
                            <img src={collection1} alt="12" />
                        </Row>
                        <div style={{ padding: "12px", textAlign: 'center', }}>
                            <p style={{ fontSize: "24px", fontWeight: "700" }} >
                                Down To The Core
                            </p>
                            <p style={{ fontSize: "12px", color: "gray" }}>Endlessly Verstile new Styles that say yes to spring.The season's looking bright.</p>

                        </div>
                    </div>

                </Col>
                <Col md='4' className="resCard">

                    <div className="downHeight" style={{ height: "536px", display: "flex", flexDirection: "column-reverse" }}>
                        <Row>
                            <img src={collection2} alt="12" />
                        </Row>
                        <div style={{ padding: "12px", textAlign: 'center', }}>
                            <p style={{ fontSize: "24px", fontWeight: "700" }} >
                                Down To The Core
                            </p>
                            <p style={{ fontSize: "12px", color: "gray" }}>Endlessly Verstile new Styles that say yes to spring.The season's looking bright.</p>

                        </div>
                    </div>
                </Col>
             
                <Col md='4' className="blockCard">

                    <div className="downHeight" style={{ height: "536px" }}>
                        <Row>
                            <img src={collection2} alt="12" />
                        </Row>
                        <div style={{ padding: "12px", textAlign: 'center', }}>
                            <p style={{ fontSize: "24px", fontWeight: "700" }} >
                                Down To The Core
                            </p>
                            <p style={{ fontSize: "12px", color: "gray" }}>Endlessly Verstile new Styles that say yes to spring.The season's looking bright.</p>

                        </div>
                    </div>
                </Col>
             
             
                <Col md='4'>
                    <div className="downHeight" style={{ height: "536px" }}>
                        <Row>
                            <img src={collection3} alt="12" />
                        </Row>
                        <div style={{ padding: "12px", textAlign: 'center', }}>
                            <p style={{ fontSize: "24px", fontWeight: "700" }} >
                                Down To The Core
                            </p>
                            <p style={{ fontSize: "12px", color: "gray" }}>Endlessly Verstile new Styles that say yes to spring.The season's looking bright.</p>

                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

        <br></br>
        <br></br> 
        <br></br>
        <br></br>

    </>
}
