import React, { useEffect, useState } from 'react'
import Carousel from 'react-grid-carousel'
import { useHistory } from 'react-router'


export default function Gallery({ cols, bannerData, type, gap }) {

  const history = useHistory()

  console.log("KEY", bannerData);
  return <>
    <Carousel cols={cols} rows={1} gap={gap} loop={true} autoplay={3000}>
      {bannerData !== undefined && bannerData.map(item => {
        return <Carousel.Item>
          {type === 'product' &&
            <img
              style={{ borderRadius: "7px" }}
              width="100%"
              height={230}
              src={item.bannerURL} alt='1' />
          }
          {
            type === 'category' &&

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <img
                onClick={() => history.push('/categoriesPages')}
                style={{ borderRadius: "50%" }}
                width={150}
                height={150}
                src={item.MCImageThumbNailURL} alt='1' />
              <p style={{ paddingTop: "10px", fontFamily: "roboto", fontWeight: "700" }}>{item.MainCategoryName}</p>

            </div>
          }

          {
            type === 'brand' &&
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", }}>
              <img
                width={150}
                height={150}
                src={item.BImageURL} alt='1' />
              <p style={{ paddingTop: "10px" }}>{item.BrandName}</p>
            </div>
          }



        </Carousel.Item>
      })}
    </Carousel>
  </>
}



