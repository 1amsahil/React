import { useContext } from "react";
import "./Cart.css"
import { IoClose } from "react-icons/io5";
import { dataContext } from "../../context/UserContext";
import CartCard from "../../components/CartCard/CartCard";
import { useSelector } from "react-redux";

export default function Cart() {

    let {showCart, setShowCart} = useContext(dataContext)
    let items = useSelector(state => state.cart)

  return (
    <> 
      <div className={`${showCart ? "translate-zero" : "translate-full"} cart-component cart-sidebar`}  >
          <div className="cart-header" >
              <h3><label> Order Items </label></h3>
              <IoClose className="cross-icon" onClick={ () => setShowCart(false)} />
          </div>

          <div className="side-cart" >
              {items.map( (item) => <CartCard key={item.id} name={item.name} image={item.image} price={item.price} qty={item.qty} id={item.id} />)}
          </div>
          
      </div> 
    </>

  )
}
