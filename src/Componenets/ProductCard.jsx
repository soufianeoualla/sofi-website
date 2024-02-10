import { BsHeart, BsCart3,BsFillHeartFill  } from "react-icons/bs";
import { useSelector } from "react-redux";

const ProductCard = ({img,name,price,oldPrice,discount,handleAddtoCart,handleAddWishlist,id,handleDeleteWishlist}) => {
  

  const wishlist = useSelector(state=>state.wishlist.products)
  const cart = useSelector(state=>state.cart.products)

  console.log(cart)


  return (
    <div className='card'>
      <div className="flex justify-between items-center">

      {wishlist.some((item)=>item.id === id) ?<div onClick={handleDeleteWishlist}
      className=" cursor-pointer">
        <BsFillHeartFill className="text-2xl text-cornflowerBlue hover:scale-110 "/>
      </div> :
       <div onClick={handleAddWishlist}
       className=" cursor-pointer">
        <BsHeart className="text-2xl text-black hover:scale-110 "/>
      </div> }
        
        {discount!== '' &&
        <span className="w-14 font-medium h-7 flex justify-center items-center rounded-2xl bg-yellow">-{discount}% </span>
        }
      </div>
      <img className={`m-auto w-4/5  `}
      src={img} alt='' />
      <div className='flex justify-between items-center'>
        <div className="grid">
          <span className="text-sm text-black font-medium">{name} </span>
          
            <span className="text-sm text-black font-medium">
            { oldPrice !== ''&&
              <strike>${oldPrice} </strike>}
              ${price}</span>
        </div>
        <div onClick={handleAddtoCart}
         className="w-10 h-10 rounded-full flex justify-center items-center bg-cornflowerBlue hover:scale-110  hover:opacity-75 text-white cursor-pointer">

        <BsCart3 className="text-xl  " />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
