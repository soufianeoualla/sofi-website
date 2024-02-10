import mail_icon from './assets/mail-icon.png'

const NewsLetter = () => {
  return (
    <section className='flex justify-center flex-col items-center gap-8 my-10 ' >
        <h1 className='font-light text-center'>Subscribe to our newsletter and <br/>grab <strong className='text-4xl font-extrabold'>30% OFF!</strong> </h1>
        <div className='flex items-center gap-5 sm:flex-col'>
            <img
            className='w-20' src={mail_icon} alt="" />
            <input
            className='border-2 py-2 px-4 rounded-3xl border-black w-80 outline-none' type="email" name="" id="" placeholder='Your email..'/>
            <button className='py-2 px-6 bg-black text-white rounded-3xl font-light  hover:bg-yellow hover:text-black '>Subscribe</button>
        </div>
    </section>
  )
}

export default NewsLetter