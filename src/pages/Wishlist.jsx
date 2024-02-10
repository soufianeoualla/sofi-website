import { useDispatch, useSelector } from "react-redux";
import { BsFillHeartFill  } from "react-icons/bs";
import { deleteWishlist } from "../redux/wishlistRedux";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.products);
    const dispatch =useDispatch()
  const handleDeleteWishlist = (index) => {
    dispatch(deleteWishlist(wishlist[index]));
  };
  return (
    <div className='wishlist p-4'>
        <div className="flex">

      <h2>Favorites</h2>
      {wishlist.length >0 && <div className="badge bg-cornflowerBlue w-5 h-5 flex justify-center items-center text-xs rounded-full text-white top-0">
          {wishlist.length}
        </div>}
        </div>
      <p className="mt-1">Find your saved items and get ready to order them</p>
      <div className=" flex felx-wrap gap-4 mt-10 lg:grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">

      {wishlist && wishlist.map((item,index) =>
       <div key={item.id} className='wishlist-product rounded-3xl w-1/6 lg:w-full  '>
        <div className=" bg-lavender p-6 rounded-t-3xl">
        <img src={item.img} alt="" />

        </div>

        <div className="p-3 grid gap-3">
        <b className="font-medium">{item.name} </b>
        <span className=' font-medium '> ${item.price} </span>
        <div className="flex justify-between items-center">
            <div onClick={()=>handleDeleteWishlist(index)}
            className=" cursor-pointer ">
                <BsFillHeartFill className="text-xl text-cornflowerBlue"/>
            </div>
            <button className="py-2 px-8 rounded-3xl bg-yellow font-medium">Buy</button>
        </div>

        </div>

       </div>
       )}
      </div>
    </div>
  );
};

export default Wishlist;
