import React, { useEffect, useState } from 'react'
import { Card, CardImg, CardBody, CardSubtitle, CardTitle } from 'reactstrap'
import seller from "../../Images/seller.png"
import "./index.css"

export default function SellerCard({ data }) {

    const [SKUImg, SetSKUImg] = useState("")
    useEffect(()=>{
        SetSKUImg(data.SKUImages.map(item => { return item.ImagePath }))

    },[])

    return (


        <div className="cardUP">
            <Card className="sellerCard">
                <CardImg top width="100%" style={{ borderRadius: "8px",height:"330px" }} src={SKUImg} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="p" style={{ fontFamily: "Montserrat" }}>{data.SKUDescription}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{data.SKUDescription}...</CardSubtitle>
                    <p className="cardText2" >{data.SalesPrice}PKR </p><strike><span className="mb-2 text-muted cardText" >{data.SalesPrice + 230}PKR</span></strike>
                </CardBody>
            </Card>
        </div>
    )
}
