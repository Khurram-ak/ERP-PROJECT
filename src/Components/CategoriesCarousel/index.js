import React, { useEffect, useState } from 'react'
import { Col, Row, Container } from 'reactstrap'
import ProductCarousel from '../ProductCarousel'
import Gallery from '../ProductGallery'
import "./index.css"
import Fade from "react-reveal"
import { useHistory } from 'react-router'

export default function CategoriesCarousel() {

    const [mainCategory, setMainCategory] = useState([])

    useEffect(() => {
        const gettingApi = async () => {

            let categoryData = await fetch('http://erp.entertechsolutions.com/MainCategory/GetSkuMainCategory_CustomerPage?companyID=da0c5aaf-0196-4935-b823-d695575627a4')
                .then(res => { return res.json() })
                .then(res => { return res.data })

            setMainCategory(categoryData)

        }

        gettingApi()
    }, [])
    return <>

        <Container fluid style={{ width: "94%" }}>
            <Row>
                <Col >
                    <Fade top duration={3000}>
                        <h3 className="heading" >Shop By Category</h3>
                    </Fade>
                    <Gallery cols={7} row={1} bannerData={mainCategory} type="category" gap={20} />
                </Col>
            </Row>
        </Container>


    </>


}
