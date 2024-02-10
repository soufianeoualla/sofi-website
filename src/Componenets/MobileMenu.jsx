import { IoClose } from "react-icons/io5"
import Navlinks from "./Navlinks"
import { useDispatch } from "react-redux"
import { closeMenu } from "../redux/MenuReducer"

const MobileMenu = () => {
    const dispatch = useDispatch()
    const handleClick = ()=>{
        dispatch(
            closeMenu()
        )
    }
  return (

    <nav className="md:fixed md:bg-lavender md:flex md:flex-col md:justify-center md:top-0 md:left-0 md:w-3/5 md:h-screen md:z-20 hidden  ">
        <div onClick={handleClick}
        className="hidden md:block">
            <IoClose className=" absolute text-black text-4xl top-10 right-7 z-20"/>
        </div>

            <Navlinks/>
        </nav>
  )
}

export default MobileMenu