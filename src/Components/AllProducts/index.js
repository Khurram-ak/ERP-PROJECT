import React from 'react'
import "./index.css"
import SellerCard from "../SellerCard/index"
import { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, } from 'reactstrap'


export default function AllProducts() {


    const [sellerCard, setSellerCard] = useState([])


    useEffect(() => {
        fetch('http://erp.entertechsolutions.com/sku/GetSku_CustomerPage?page=1&pageSize=10&companyID=da0c5aaf-0196-4935-b823-d695575627a4')
            .then(res => { return res.json() })
            .then(res => {
                setSellerCard(res.data);
            })

    }, [])


    return <>
        
        <Container fluid style={{ width: '94%' }}>
            <Row >
                <Col md="12" style={{ paddingTop: "35px" }} >
                    <Fade top duration={3000}>
                        <h3 style={{ paddingBottom: "20px", fontFamily: "roboto", fontWeight: "700" }}>All Products Of Men Collection</h3>
                    </Fade>

                </Col>
                <Col style={{ display: "flex", flexWrap: "wrap", justifyContent: 'center' }}>
                    {sellerCard.map(item => {
                        return <SellerCard data={item} />
                    })}

                </Col>
            </Row>
        </Container>

    </>
}
