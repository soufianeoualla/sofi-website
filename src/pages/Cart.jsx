import { useDispatch, useSelector } from "react-redux";
import HelmetComponenet from "../Componenets/HelmetComponenet";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { decreaseQuantity, deleteProducts, increaseQuantity } from "../redux/CartRedux";

const Cart = () => {
  const cart = useSelector((state) => state.cart.products);
  const totalPrice = useSelector(state=>state.cart.totalPrice)
  
  const quantity = useSelector(state=>state.cart.quantity)

  const dispatch =useDispatch()

  const handleDelete = (index) =>{
    dispatch(
      deleteProducts(cart[index])
    )

  }

  const handleIncrease = (index)=>{
    dispatch(
      increaseQuantity(cart[index])
      
    )
  }


  const handleDecrease = (index)=>{
    dispatch(
      decreaseQuantity(cart[index])
    )

  }

  return (
    <>
      <HelmetComponenet name={"cart"} />
      <div className='cart-page'>
        <div className=" flex ">

        <h2>Shopping Cart</h2>
       {quantity > 0 && <div className="badge bg-cornflowerBlue w-5 h-5 flex justify-center items-center text-xs rounded-full text-white top-0">
          {quantity}
        </div>}
        </div>

        <div className='flex gap-10 md:flex-col justify-between items-start mt-6 md:items-center'>
          <div className='left w-2/3'>
            <div className='cart-products grid gap-6'>
              {cart &&
                cart.map((item,index) => (
                  <div key={item.id} className='flex justify-between items-center md:grid md:place-content-center md:items-center'>

                    <div className='flex w-1/3 items-center md:w-auto '>
                      <div className=' bg-lavender p-4 rounded-3xl'>
                        <img
                          className='w-32 rounded-3xl md:w-auto'
                          src={item.img}
                          alt=''
                        />
                      </div>

                      <div className='flex flex-col gap-5  ml-4 p-4 md:m-auto'>
                        <b className='text-sm capitalize'>{item.name} </b>
                        <div className='flex gap-2'>
                          <p>Color: </p>
                          <span className='text-sm capitalize'>{item.color} </span>
                          <span></span>
                        </div>
                      </div>
                    </div>

                    <div className='flex  items-center gap-5'>
                      <div className='quantity flex p-2 items-center gap-4 '>
                        <div onClick={()=>handleDecrease(index)}
                        className=' w-7 h-7 border-2 border-grey text-darkgrey flex justify-center items-center rounded-xl cursor-pointer hover:border-cornflowerBlue hover:text-cornflowerBlue  '>
                          <FaMinus />
                        </div>

                        <span className="font-medium">{item.quantity}</span>

                        <div onClick={()=> handleIncrease(index)}
                        className=' w-7 h-7 border-2 border-grey text-darkgrey flex justify-center items-center rounded-xl cursor-pointer hover:border-cornflowerBlue hover:text-cornflowerBlue'>
                          <FaPlus />
                        </div>
                      </div>
                      <div className='price font-bold'>${item.quantity * item.price}</div>

                    <button onClick={()=> handleDelete(index)}
                     className='delete self-start md:self-center '>
                      <IoClose className="text-red text-xl" />
                    </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>

        { cart.length > 0 && <div className='w-1/4 right  rounded-lg border-2 border-grey p-6 grid gap-6 font-medium md:w-full'>
            <h1>${((totalPrice + 50 )*(1+0.06)).toFixed(2) }</h1>

            <div className="flex justify-between">
              <span>Subtotal:</span>
              <b>${totalPrice} </b>
            </div>

            <div className="flex justify-between">
              <span>Shipping fees:</span>
              <b>$50 </b>
            </div>

            <div className="flex justify-between">
              <span>Tax:</span>
              <b>%6 </b>
            </div>
            <hr className=" text-grey"/>

            <div className="flex justify-between">
              <b>Total:</b>
              <b>${((totalPrice + 50 )*(1+0.06)).toFixed(2) } </b>
            </div>

            <button className="w-full bg-yellow text-black font-bold p-2  rounded-md">Checkout</button>

          </div>}
        </div>
      </div>
    </>
  );
};

export default Cart;
