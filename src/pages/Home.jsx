import { useSelector } from "react-redux"
import HeroSection from "../Componenets/HeroSection"
import LatestArrivals from "../Componenets/LatestArrivals"
import ProductCategory from "../Componenets/ProductCategory"


const Home = () => {

  return (
    
    <>
        <HeroSection/>
        <ProductCategory/>
        <LatestArrivals/>
    </>
  )
}

export default Home