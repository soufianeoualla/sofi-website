import hero_product_1 from "./assets/hero_product_1.png";
import hero_product_2 from "./assets/hero_product_2.png";
import hero_product_3 from "./assets/hero_product_3.png";
import hero_product_4 from "./assets/hero_product_4.png";
import { BsArrowRight , BsArrowLeft  } from "react-icons/bs";
import wooden_Chair from "./assets/WoodenChair.png";
import ProductSlide from "./ProductSlide";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../redux/CartRedux";

const HeroSection = () => {
 const dispatch = useDispatch()
  const heroProducts = [
    {
      id: 123,
      img: hero_product_1,
      price: 499.00,
      color:'pink',
      name:'sofa',

    },
    {
      id: 2234,
      img: hero_product_2,
      price: 399.00,
      color:'balck-gray',
      name:'Armchair',

    },
    {
      id: 3235,
      img: hero_product_3,
      price: 479.00,
      color:'brown',
      name:'table',

    },
    {
      id: 444656,
      img: hero_product_4,
      price: 509.00,
      color:'white',
      name:'sofa',

    }
  ];

  const [slide, setSlide] = useState(0);

  const handleNextSlide = () => {
    setSlide((slide + 1) % heroProducts.length);
  };

  const handlePrevSlide = () => {
    setSlide((slide - 1 + heroProducts.length) % heroProducts.length);
  };

  const product = heroProducts[slide];


  const handleAddtoCart = () => {
    dispatch(
      addProducts(heroProducts[slide])
    )
  }

  return (
    <section>
      <div className='hero bg-cornflowerBlue rounded-3xl w-full p-5 relative'>
        <h1 className='main-heading text-white text-7xl flex justify-center items-center mt-7 lg:text-5xl sm:text-4xl sm:mb-5'>
          Modern Minimalist Furniture
        </h1>
        <div className='absolute text-white bottom-1/4 right-10 w-1/3 md:static md:w-4/5 md:mt-4 sm:m-auto sm:w-full'>
          <p className='text-white'>
            Discover a curated collection of handcrafted pieces designed to
            transform your living spaces expressions into of your unique taste
            and lifestyle.
          </p>
          <button className='text-black font-medium bg-yellow py-2 px-5 rounded-3xl mt-5 hover:bg-white sm:mt-3'>
            Explore More
          </button>
        </div>
      </div>

      <div className='flex md:flex-wrap  mt-5 gap-5 h-60 lg:h-52 md:h-auto'>

        <div className='w-3/5 relative bg-grey rounded-3xl md:w-full md:h-40 '>
          <ProductSlide handleAddtoCart={handleAddtoCart}
           item={product}/>
          <div className="slider">
            <div className="slides flex gap-2 justify-center items-center absolute bottom-10 left-1/2">
              {heroProducts.map((_, index) => (
                <div key={index} className={`h-1 rounded-3xl ${slide === index ? 'bg-black w-8 ' : ' bg-darkgrey w-4 '}`}></div>
              ))}
            </div>
            <div className="arrows flex absolute bottom-5 gap-3 right-4">
              <div className="flex justify-center items-center w-10 h-10 border-darkgrey border rounded-full cursor-pointer  hover:bg-black hover:text-white " onClick={handlePrevSlide}>
                <BsArrowLeft className="text-dark" />
              </div>
              <div className="flex justify-center items-center w-10 h-10 border-darkgrey border rounded-full text-white bg-black cursor-pointer hover:scale-110" onClick={handleNextSlide}>
                <BsArrowRight className="text-dark" />
              </div>
            </div>
          </div>
        </div>

        <div className='bg-yellow w-2/5 rounded-3xl p-6 flex justify-between md:w-full md:h-60'>
          <div className='flex flex-col justify-between items-start'>
            <h1 className='text-brown xl:text-3xl'>
              Wooden Chair <br /> 50% OFF{" "}
            </h1>
            <button className='text-black font-medium bg-white py-2 px-5 rounded-3xl mt-5 hover:bg-black hover:text-white'>
              Explore More
            </button>
          </div>
          <img className='w-1/3' src={wooden_Chair} alt='' />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
