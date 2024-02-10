import { Link } from "react-router-dom"

const Navlinks = () => {
  return (
    
    <ul className="flex items-center  gap-4 bg-lavender p-2 rounded-3xl md:flex-col z-20 md:justify-center md:text-xl md:relative bottom-1/4">
                    <Link to={'/'}>
                <li className="px-5 py-1 bg-white rounded-3xl text-black font-medium">Home</li>
                    </Link>

                <li className="px-3  py-1 text-darkgrey "><a href="#">About</a></li>
                <li className="px-3 py-1 text-darkgrey "><a href="#">Store</a></li>
                <li className="px-3 py-1 text-darkgrey "><a href="#">Blog</a></li>
                <li className="px-3 py-1 text-darkgrey "><a href="#">Sale</a></li>
            </ul>
  )
}

export default Navlinks