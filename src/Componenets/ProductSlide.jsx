import { BsPlus } from "react-icons/bs";

const ProductSlide = ({item,handleAddtoCart}) => {
  return (
          

    <div className=" product-slide relative top-0  ">
    <div onClick={handleAddtoCart}
    className="add-to-cart absolute flex justify-center items-center gap-4 py-3 pr-5 pl-3 rounded-3xl top-0 z-10 cursor-pointer ">
      <div className="plus w-6 h-6 rounded-full bg-white flex justify-center items-center hover:scale-110 ">
        <BsPlus className="text-xl text-black"/>
        
      </div>
      <b className="text-white">${item.price}</b>
    </div>

    <img
      className='image-hero w-3/5 m-auto xl:w-4/5 md:w-full  '
      src={item.img}
      alt=''
    />
    </div>

  )
}

export default ProductSlide