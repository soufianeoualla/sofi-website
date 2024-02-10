import { BsHeart, BsCart3 } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navlinks from "./Navlinks";
import MobileMenu from "./MobileMenu";
import { HiMenu } from "react-icons/hi";
import { showMenu } from "../redux/MenuReducer";

const Header = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const wishlistItems = useSelector((state) => state.wishlist.quantity);
  const menu = useSelector(state=>state.menu.state)
  const dispatch = useDispatch()

  const handleClick = ()=>{
    dispatch(
        showMenu()
    )
  }

  return (
    <header className='flex justify-between items-center py-8 px-5 '>
      <div className='logo flex items-center gap-4'>
        <HiMenu onClick={handleClick}
        className="hidden md:block text-cornflowerBlue text-4xl "/>
        <Link to={"/"}>
          <h1>Sofi.</h1>
        </Link>
      </div>
      <nav className='md:hidden'>
        <Navlinks />
      </nav>
     {menu  && <MobileMenu />}
      <div className='flex items-center gap-2'>
        <Link to={"/wishlist"}>
          <div className=' w-10 h-10 rounded-full flex justify-center items-center bg-white border-2 border-grey relative'>
            <BsHeart className='text-xl' />
            {wishlistItems > 0 && (
              <div className='badge absolute w-5 h-5 rounded-full bg-cornflowerBlue text-xs flex justify-center items-center text-white'>
                {wishlistItems}{" "}
              </div>
            )}
          </div>
        </Link>

        <Link to={"/cart"}>
          <div className=' w-10 h-10 rounded-full flex justify-center items-center bg-white border-2 border-grey relative'>
            <BsCart3 className='text-xl' />
            {quantity > 0 && (
              <div className='badge absolute w-5 h-5 rounded-full bg-cornflowerBlue text-xs flex justify-center items-center text-white'>
                {quantity}{" "}
              </div>
            )}
          </div>
        </Link>
        <div className='user w-10 h-10 rounded-full flex justify-center items-center bg-yellow border-2 border-grey'>
          <IoPersonOutline className='text-xl' />
        </div>
      </div>
    </header>
  );
};

export default Header;
