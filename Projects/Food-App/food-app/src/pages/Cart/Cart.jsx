import { useContext } from "react";
import "./Cart.css"
import { IoClose } from "react-icons/io5";
import { dataContext } from "../../context/UserContext";
import CartCard from "../../components/CartCard/CartCard";

export default function Cart() {

    let {showCart, setShowCart} = useContext(dataContext)

  return (
    <> 
      <div className={`${showCart ? "translate-zero" : "translate-full"} cart-component cart-sidebar`}  >
          <div className="cart-header" >
              <h3><label> Order Items </label></h3>
              <IoClose className="cross-icon" onClick={ () => setShowCart(false)} />
          </div>

          <CartCard/>

      </div>

      
    </>

  )
}
