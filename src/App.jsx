import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Layout from "./Componenets/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "./redux/MenuReducer";

const App = () => {
  const menu = useSelector(state=>state.menu.state)
  const dispatch = useDispatch()
  const handleClick =() =>{
    if(menu ){
      dispatch(
        closeMenu()
      )
    }

  }
  return (
    <div onClick={handleClick}
    className={`container m-auto p-2 ${menu && 'lightbox'}`}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<Home/>}/>
            <Route path="/cart" element={<Cart/>} />
            <Route path="/wishlist" element={<Wishlist/>} />

          </Route>
        </Routes>

      </Router>
    </div>
  );
};

export default App;
