import React from 'react'
import AllProducts from '../../Components/AllProducts'
import BestSellers from '../../Components/BestSellers'
import Footer from '../../Components/Footer'
import LowerTextBox from '../../Components/LowerTextBox'
import WebNavbar from '../../Components/Navbar'

export default function CategoriesPage({ name }) {
    return <>
    <AllProducts/>
    <br></br>
    <br></br>
    <LowerTextBox/>
    <Footer/>
    </>
}
