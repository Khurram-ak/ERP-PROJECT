import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Fade from "react-reveal"
import Gallery from '../ProductGallery'

export default function Brands() {

    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch('http://erp.entertechsolutions.com/Brand/GetBrands_CustomerPage?companyID=da0c5aaf-0196-4935-b823-d695575627a4')
            .then(res => { return res.json() })
            .then(res => { setBrands(res.data) })


    }, [])

    return <>

        <Container fluid style={{ width: "94%" }}>
            <Row>
                <Col >
                    <>
                        <Fade top duration={3000}>
                            <h3 className="heading" >Shop By Brands</h3>
                        </Fade>
                        <Gallery cols={7} row={1} bannerData={brands} type="brand" gap={20} />
                    </>

                </Col>

            </Row>
        </Container>
    </>


}
