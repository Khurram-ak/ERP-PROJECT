import React, { useEffect } from 'react'

import { Container, Row, Col } from "reactstrap"
import watch from "../../Images/watch.png"
import banner4 from "../../Images/banner4.jpg"
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Progress } from 'reactstrap';
import '@brainhubeu/react-carousel/lib/style.css';
import { useState } from 'react'


import './index.css'
import Gallery from '../ProductGallery'
import Arrow from '../arrow'

export default function ProductCarousel() {

    const [data, setData] = useState([])
    const [banners, setBanners] = useState([])
    const [isApi, setIsApi] = useState(false)

    const content = []


    useEffect(() => {

        const getAllApis = async () => {
            let data1 = await fetch('http://erp.entertechsolutions.com/sku/GetSku_CustomerPage?page=1&pageSize=10&companyID=da0c5aaf-0196-4935-b823-d695575627a4')
                .then(res => { return res.json() })
                .then(res => {
                    return res.data
                })

            let data2 = await fetch('http://erp.entertechsolutions.com/CompanyProfile/GetBanners_CustomerPage?companyID=da0c5aaf-0196-4935-b823-d695575627a4')
                .then(res => res.json())
                .then(res => {
                    return res.data
                })

            if (data1.length > 0 && data2.length > 0) {
                console.log("data1", data1);
                setData(data1)
                setBanners(data2)
                setIsApi(true)
            }
        }

        getAllApis()
        
    }, [])

    data.map(item => { content.push(item) })

    const styles = {
        backgroundSize: "cover",
        backgroundImage: `url('${banner4}')`,

    }

    console.log("COntent===========",content);
    return <>
        <Container fluid style={{ width: "94%" }}>
            <Row>

                <Col md="8" style={styles}>

                </Col>

                <Col md="4"  >
                    <div style={{ padding: "10px", border: "2px solid lightgray", borderRadius: "5px", height: "300px" }}>
                        <p className="font">Flash Sale</p>
                        <Slider loop
                            nextButton={<Arrow direction={<i className="icon" class="fas fa-angle-right"></i>} />}
                            previousButton={<Arrow direction={<i className="icon" class="fas fa-angle-left"></i>} />}
                        >
                            {content.map((item, index) =>
                                <div key={index}  >
                                    <div style={{ display: 'flex', borderRadius: "5px", height: "150px", border: "1px solid lightgray", backgroundColor: "#F9F9F9" }}>
                                        <div style={{ display: "flex", justifyContent: "center" }}>
                                    {}
                                            <img style={{ height: "148px" }} className="skuImg" src={item.SKUImages.map((item,index)=>{return item.ImagePath })} alt='icon' />
                                        </div>
                                        <div className="text">
                                            <h4>{item.SKUDescription}</h4>
                                            <p>Size:{item.MeasurementUnitName}</p>
                                            <p>{item.SalesPrice}PKR <strike>{item.SalesPrice + 230}PKR</strike></p>
                                        </div>

                                    </div>
                                    <br></br>
                                    <div className="cardText" style={{ display: 'flex', justifyContent: "space-between", paddingTop: "8px", width: '95%', margin: "auto" }}>
                                        <p>Sold: 152</p>
                                        <p>Available: 132</p>
                                    </div>
                                    <Progress className="bar" color="black" value={75} /> <br></br>
                                </div>
                            )}
                        </Slider>

                    </div>

                </Col>
            </Row>
            <br></br>


        </Container >
        <br></br>
        <Container fluid style={{ width: '98%' }}>
            <Row>
                <Col md='12'  >
                    {isApi &&
                        <Gallery cols={3} bannerData={banners} type="product" gap={25} />

                    }
                </Col>
            </Row>
        </Container>
        <br></br>
    </>
}
