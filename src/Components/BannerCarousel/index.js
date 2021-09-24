import { Carousel } from '3d-react-carousal';
import "./index.css"
// import banner3 from "../../Images/banner3.jpg"
import banner2 from "../../Images/banner2.jpg"
import { useEffect, useState } from 'react';

export default function BannerCarousel(props) {

    const [banner, setBanner] = useState([])
    let slides = []
    useEffect(() => {
        fetch('http://erp.entertechsolutions.com/CompanyProfile/GetBanners_CustomerPage?companyID=da0c5aaf-0196-4935-b823-d695575627a4')
            .then(res => res.json())
            .then(res => {
                console.log("res",res);
                setBanner(res.data)})
    }, [])


return <>
        <div style={{ height: "113px" }}>
            {banner && banner.map( (item, index) => {
                return slides.push(<img className='imgHeight' src={item.bannerURL} alt={index} />)
            })}
        </div>
        <Carousel arrows={false} slides={slides} autoplay={false} interval={3000} />

    </>
}
