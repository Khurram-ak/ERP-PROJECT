import React from 'react'
import "./index.css"
import { Container, Row, Col } from 'reactstrap'
import footer from "../../Images/footer.png"

export default function Footer() {

    return <>
        <Container fluid id="container" style={{ width: "95%" }}>
            <Row id="fonts">
                <Col md='12' style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                    <div style={{ width: "230px", padding: "17px" }} >
                        <p style={{ marginBottom: "20px", fontSize: "25px" }} >Social</p>
                        <p className='space'><i style={{ marginRight: "10px" }} class="fab fa-instagram"></i> Instagram</p>
                        <p className='space'><i style={{ marginRight: "10px" }} class="fab fa-twitter"></i> Twitter</p>
                        <p className='space'><i style={{ marginRight: "10px" }} class="fab fa-facebook"></i> Facebok</p>
                        <p className='space'><i style={{ marginRight: "10px" }} class="fab fa-youtube"></i> Youtube</p>
                    </div>
                    <div style={{ width: "230px", padding: "17px" }} >
                        <p style={{ marginBottom: "20px", fontSize: "25px" }} >Contact</p>
                        <p className='space'>Contact Us</p>
                        <p className='space'>xyz@email.com</p>
                        <p className='space'>abc@email.com</p>
                        <p className='space'>Call us: +9212312345</p>
                    </div>
                    <div style={{ width: "230px", padding: "17px" }} >
                        <p style={{ marginBottom: "20px", fontSize: "25px" }} >About</p>
                        <p className='space'>Support Center</p>
                        <p className='space'>Customer Support</p>
                        <p className='space'>About Us</p>
                        <p className='space'>Copyright</p>
                    </div>
                    <div style={{ width: "230px", padding: "17px" }} >
                        <p style={{ marginBottom: "20px", fontSize: "25px" }} >Customer Care</p>
                        <p className='space'>FAQ & Help </p>
                        <p className='space'>Shipping & Delivery</p>
                        <p className='space'>Return & Exchanges</p>
                    </div>
                    <div style={{ width: "230px", padding: "17px" }} >
                        <p style={{ marginBottom: "20px", fontSize: "25px" }} >Our Information</p>
                        <p className='space'>Privacy Policy Update</p>
                        <p className='space'>Terms & Conditions</p>
                        <p className='space'>Return Policy</p>
                        <p className='space'>Site Map</p>
                    </div>
                    <div style={{ width: "230px", padding: "17px" }} >
                        <p style={{ marginBottom: "20px", fontSize: "25px" }} >Top Categories</p>
                        <p className='space'>Men's Wear </p>
                        <p className='space'>Women's Wear </p>
                        <p className='space'>Kid's Wear</p>
                        <p className='space'>Sports Wear</p>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container fluid style={{ borderTop: "1px solid gray", height: "60px" }}>
            <Row>
                <Col md="12" style={{ display: "flex", marginTop: "18px" }} >
                    <div style={{ flex: '1', paddingLeft: "10px" }}>
                        <p className='copy' style={{ fontFamily: "roboto", }}>Copyright 2021 <strong>EnterTech Solutions.</strong> All rights reserved</p>
                    </div>
                    <div className="billCards" style={{ display: "flex", paddingRight: "10px" }}>
                        <img src={footer} alt='2' />
                    </div>
                </Col>
            </Row>
        </Container>


    </>
}