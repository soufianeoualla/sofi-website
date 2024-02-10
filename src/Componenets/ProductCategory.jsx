import chair from "./assets/chair.png";
import armchair from "./assets/armchair.png";
import sofa from "./assets/sofa.png";
import wardrobe from "./assets/wardrobe.png";
import nightstand from "./assets/nightstand.png";
import chairsDiscount from "./assets/chairsDiscount.png";
import tables from "./assets/tables.png";
import sofa_img from "./assets/sofa_img.jpeg";


const ProductCategory = () => {
  return (
    <>
      <section className='flex justify-between  items-center gap-5  p-14 lg:p-8 sm:p-2 sm:grid sm:grid-cols-2'>
        <div className='w-1/5 md:w-2/4 sm:w-full p-5 flex flex-col gap-5 items-center bg-yellow rounded-3xl '>
          <img className='w-24' src={chair} alt='' />
          <b>Chairs</b>
        </div>
        <div className='w-1/5 md:w-2/4 sm:w-full p-5 flex flex-col gap-5 items-center bg-light-grey rounded-3xl '>
          <img className='w-24' src={sofa} alt='' />
          <b>Sofa</b>
        </div>
        <div className='w-1/5 md:w-2/4 sm:w-full p-5 flex flex-col gap-5 items-center bg-light-grey rounded-3xl '>
          <img className='w-24' src={nightstand} alt='' />
          <b>Cabinet</b>
        </div>
        <div className='w-1/5 md:w-2/4 sm:w-full p-5 flex flex-col gap-5 items-center bg-light-grey rounded-3xl '>
          <img className='w-24' src={wardrobe} alt='' />
          <b>Wardrobe</b>
        </div>
        <div className='w-1/5 md:w-2/4 sm:w-full p-5 flex flex-col gap-5 items-center bg-light-grey rounded-3xl '>
          <img className='w-24' src={armchair} alt='' />
          <b>Armchair</b>
        </div>
      </section>

      <section>
        <div className='flex gap-3  items-center justify-center p-14 md:p-4 sm:grid sm:place-content-center sm:items-center'>
          <div className='flex flex-col items-start w-2/5 mr-8 sm:w-full '>
            <h1>Daily offer</h1>
            <p>
              Check out daily offers that can combine big descounts on some
              products. offers may chnge every day, do not miss your chance.
            </p>
            <button className='text-black font-medium bg-yellow py-2 px-5 rounded-3xl mt-5  hover:bg-black hover:text-white '>
              {" "}
              Open Store{" "}
            </button>
          </div>

          <div className='chairs  p-5 pb-0 bg-lavender rounded-3xl w-2/5 sm:w-full '>
            <div className='flex justify-between items-center'>
              <h2>Chairs</h2>
              <div className='discount w-16 h-16 flex justify-center items-center rounded-full bg-white'>
                <b className='text-sm font-extrabold'>
                  30% <br />
                  OFF
                </b>
              </div>
            </div>
            <img className=' w-2/4 m-auto' src={chairsDiscount} alt='' />
          </div>

          <div className='tables w-2/3 p-5 bg-brown-off rounded-3xl sm:w-full'>
            <div className='flex justify-between items-center'>
              <h2>Tables</h2>
              <div className='discount w-16 h-16 flex justify-center items-center rounded-full bg-white'>
                <b className='text-sm font-extrabold '>
                  30% <br />
                  OFF
                </b>
              </div>
            </div>
            <img className='w-4/5 m-auto' src={tables} alt='' />
          </div>
        </div>
      </section>

      <section className="flex justify-between  items-center gap-14 p-14 lg:flex-wrap lg:p-7 lg:justify-center md:p-4">
        <div className="w-3/5 lg:w-full">
          <img className="rounded-3xl" src={sofa_img } alt="" />
        </div>
        <div className="ml-6 sm:m-0">
          <h1>Get ready for winter</h1>
          <p className="my-5 w-4/5 text-lg sm:w-full">Curl up with loved ones on our plush <b>sofas</b> and sink into the soft embrace of <b>winter-ready</b> fabrics. <br />
          <b>Enjoy </b>the season&apos;s festivities surrounded by our <b>stylish </b>and invitibg living room <b>furniture</b></p>
          <button className='text-black font-medium bg-yellow py-2 px-5 rounded-3xl mt-5  hover:bg-black hover:text-white'>
              {" "}
              Open Store{" "}
            </button>

        </div>
      </section>

    </>
  );
};

export default ProductCategory;
