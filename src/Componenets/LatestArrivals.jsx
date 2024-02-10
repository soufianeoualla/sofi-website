import { useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import product_1 from "./assets/product-1.png";
import product_2 from "./assets/product-2.png";
import product_3 from "./assets/product-3.png";
import product_4 from "./assets/product-4.png";
import product_5 from "./assets/product-5.png";
import product_6 from "./assets/product-6.png";
import { addProducts } from "../redux/CartRedux";
import { addWishlist, deleteWishlist } from "../redux/wishlistRedux";

const LatestArrivals = () => {
  const latsetArrivalsData = [
    {
      id: 1,
      name: "3-seat sofa ",
      price: 689.00,
      category: "sofa",
      color: "beige",
      oldPrice: "",
      discount: "",
      img: product_1,
    },

    {
      id: 2,
      name: "Armchair            ",
      price: 319.00,
      category: "armchair",
      color: "gary",
      oldPrice: "",
      discount: "",
      img: product_2,
    },

    {
      id: 3,

      name: "Rocking-chair          ",
      price: 349.00,
      category: "armchair",
      color: "light green",
      oldPrice: "",
      discount: "",
      img: product_3,
    },

    {
      id: 4,

      name: "Armchair         ",
      price: 279.00,
      category: "armchair",
      color: "beige",
      oldPrice: "399",
      discount: "30",
      img: product_4,
    },

    {
      id: 5,

      name: "Corner sofa-bed with storage          ",
      price: 999.00,
      category: "sofa",
      color: "blue",
      oldPrice: "",
      discount: "",
      img: product_5,
    },

    {
      id: 6,

      name: "Wardrobe with 3 doors            ",
      price: 229.00,
      category: "wardrobe",
      color: "black-brown",
      oldPrice: "",
      discount: "",
      img: product_6,
    },
  ];
  const dispatch = useDispatch();


  const handleAddtoCart = (index) => {
    dispatch(addProducts(latsetArrivalsData[index]));
  };

  const handleAddWishlist = (index) => {
    dispatch(addWishlist(latsetArrivalsData[index]));
  };

  const handleDeleteWishlist = (index) => {
    dispatch(deleteWishlist(latsetArrivalsData[index]));
  };

  return (
    <section className='p-14 lg:p-7 sm:p-4'>
      <h1>Our Lastes arrivals</h1>
      <p className=' capitalize mt-4  w-1/3 md:w-full'>
        Introducing our latest arrivals - elevate your space with contemporary
        elegance
      </p>
      <div className=' grid grid-cols-3  gap-5 items-center mt-10 md:grid-cols-2 md:place-content-between sm:grid-cols-1'>
        {latsetArrivalsData.map((item, index) => (
          <div
            key={item.id}
            className={` product  p-4 rounded-3xl  ${
              item.id === 1 ? "bg-brown-off" : "bg-lavender"
            }`}
          >
            <ProductCard
              img={item.img}
              name={item.name}
              price={item.price}
              oldPrice={item.oldPrice}
              discount={item.discount}
              category={item.category}
              handleAddtoCart={() => handleAddtoCart(index)}
              handleAddWishlist={() => handleAddWishlist(index)}
              id={item.id}
              handleDeleteWishlist={() => handleDeleteWishlist(index)}
            />
          </div>
        ))}
      </div>
      <button className='text-black flex justify-center  font-medium mx-auto mt-8 bg-yellow py-2 px-5 rounded-3xl  hover:bg-black hover:text-white'>
        Open Store{" "}
      </button>
    </section>
  );
};

export default LatestArrivals;
