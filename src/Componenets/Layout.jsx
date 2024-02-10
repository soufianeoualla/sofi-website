import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"
import NewsLetter from "./NewsLetter"
import Offer from "./Offer"

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <NewsLetter/>
    <Offer/>
    <Footer/>
    </>
  )
}

export default Layout