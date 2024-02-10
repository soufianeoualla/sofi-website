import visa from "./assets/visa.png";
import paypal from "./assets/paypal.png";
import googlepay from "./assets/google-pay.png";
import applepay from "./assets/apple-pay.png";
import mastercard from "./assets/logo.png";

const Footer = () => {
  return (
    <footer className="flex justify-between   p-14 lg:p-7 md:grid md:place-content-center md:h-auto md:grid-cols-2 md:gap-4 sm:grid-cols-1">
      <div className='left'>
        <h1 className="mb-2">Sofi.</h1>
        <p className='text-black font-medium '>
          Hay el Mohammadi, Ouazazate,
          <br /> Morocco.
        </p>
        <p className='text-black font-medium mt-2'>contact@sofi.com</p>
        <button className='py-2 px-6 bg-black text-white rounded-3xl font-light my-8 hover:bg-yellow hover:text-black '>
          Contact Us
        </button>
        <div className='flex gap-2'>
          <img className='w-10 ' src={visa} alt='' />
          <img className='w-10 ' src={mastercard} alt='' />
          <img className='w-10 ' src={paypal} alt='' />
          <img className='w-10 ' src={googlepay} alt='' />
          <img className='w-10 ' src={applepay} alt='' />
        </div>
      </div>
      <div className='center-1 flex flex-col justify-between'>
        <div>
          <h3 className="mb-3">Useful Links</h3>
          <ul>
            <li>
              <a href=''>Home</a>
            </li>
            <li>
              <a href=''>Blog</a>
            </li>
            <li>
              <a href=''>Store</a>
            </li>
            <li>
              <a href=''>Sale</a>
            </li>
          </ul>
        </div>
        <div>
        <h3 className="mb-3">Delivery</h3>
            <ul>
            <li>
              <a href=''>How it works</a>
            </li>
            <li>
              <a href=''>free delivery</a>
            </li>
            <li>
              <a href=''>FAQ</a>
            </li>
           
          </ul>

        </div>
      </div>
      <div className='center-2'>
      <h3 className="mb-3">Contact Us</h3>
        <div className="mb-6">
            <p>+61 3 8376 6284</p>
            <p>+61 3 7879 4594</p>

        </div>
        <div>
            <p>Monday-Friday <br /> 8AM - 5PM</p>
            <p>Saturday-Sunday <br />10AM - 2PM</p>
            
        </div>
      </div>
      <div className='right'>
      <h3 className="mb-3">Customer service</h3>
        <ul>
            <li>
              <a href=''>Orders</a>
            </li>
            <li>
              <a href=''>Cart</a>
            </li>
            <li>
              <a href=''>Wishlist</a>
            </li>
            <li>
              <a href=''>Account</a>
            </li>
            <li>
              <a href=''>Privacy Policy</a>
            </li>
          </ul>

      </div>
    </footer>
  );
};

export default Footer;
