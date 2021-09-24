import LoadingPage from "../LoadingPage"
import BannerCarousel from '../../Components/BannerCarousel';
import WebNavbar from '../../Components/Navbar';
import ProductCarousel from '../../Components/ProductCarousel';
import { useState } from "react"
import CategoriesCarousel from "../../Components/CategoriesCarousel";
import BestSellers from "../../Components/BestSellers";
import Brands from "../../Components/Brands";
import CollectionCard from "../../Components/CollectionCard";
import FeatureBox from "../../Components/FeatureBox";
import LowerTextBox from "../../Components/LowerTextBox";
import Footer from "../../Components/Footer";
import CartModal from "../../Components/CartModal";
import CategoriesPage from "../CategoriesPage";

function Home() {
  const [loading, setLoading] = useState(true)

  setTimeout(function () {
    setLoading(false)
  }, 3000);



  return <>
    {loading ? <LoadingPage /> : <>
      <WebNavbar />
      <BannerCarousel />
      <br></br>
      <br></br>
      <ProductCarousel />
      <CategoriesCarousel />
      <br></br>
      <BestSellers />
      <br></br>
      <Brands />
      <br></br>
      <br></br>
      <CollectionCard />

      <FeatureBox />
      <br></br>
      <br></br>
      <LowerTextBox />
      <Footer/> 
      {/* <CartModal/> */}
      {/* <CategoriesPage/> */}
    </>
    } </>

}

export default Home;
