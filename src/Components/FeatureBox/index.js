import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import "./index.css"
import feature1 from "../../Images/feature1.png"
import feature2 from "../../Images/feature2.png"
import feature3 from "../../Images/feature3.png"
import feature4 from "../../Images/feature4.png"
import gPlay from "../../Images/gPlay.png"
import aPlay from "../../Images/aPlay.png"
import lowerBanner from "../../Images/lowerBanner.jpg"



export default function FeatureBox() {
    return <>
        <Container fluid style={{ width: '94%', margin: 'auto' }}>

            <Row style={{ border: '1px solid rgb(204, 194, 194)', borderRadius: "5px", }} >
                <Col md="3" className="boxItem" >
                    <img src={feature1} alt="1" /><br></br>
                    <p>Guaranteed Savings</p>
                    <p style={{ color: "gray", fontSize: "11px" }}>If you don’t make your membership fee in savings, we’ll refund the difference</p>
                </Col>
                <Col md="3" className="boxItem">
                    <img src={feature2} alt="1" /><br></br>
                    <p>Try It Risk-Free</p>
                    <p style={{ color: "gray", fontSize: "11px" }}>If you don’t make your membership fee in savings, we’ll refund the difference</p>
                </Col>
                <Col md="3" className="boxItem">
                    <img src={feature3} alt="1" /><br></br>
                    <p>Super Fast Delivery</p>
                    <p style={{ color: "gray", fontSize: "11px" }}>If you don’t make your membership fee in savings, we’ll refund the difference</p>
                </Col>
                <Col md="3" className="boxItem" style={{ borderRight: "none" }}>
                    <img src={feature4} alt="1" /><br></br>
                    <p>1000+ products priced at cost</p>
                    <p style={{ color: "gray", fontSize: "11px" }}>If you don’t make your membership fee in savings, we’ll refund the difference</p>
                </Col>
            </Row>
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <Container fluid style={{ width: '94%', margin: 'auto' }}>
            <Row className='lowerBanner'>
                <Col className="marginMedia" md="5" style={{ display: 'flex', flexDirection: "column", justifyContent: "center", marginLeft:"20px" }}>
                    
                    <h3>The CHAWK BAZAAR</h3>
                    <h1>Share Your Ideas & Shop <br></br> Endless Inspiration
                    </h1>
                    <div className='imgBlock' style={{ display: 'flex', alignItems: "center",marginTop:"50px" }}>
                    <img className="paddingMedia" style={{paddingRight:"30px"}} alt="aplay" src={aPlay} />
                    <img   src={gPlay} alt="gplay" /> 
                    </div>
                </Col>
            </Row>
        </Container>

    </>
}
