import { useContext, useState } from "react";
import "./Cart.css"
import { IoClose } from "react-icons/io5";
import { dataContext } from "../../context/UserContext";
import CartCard from "../../components/CartCard/CartCard";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { cartAction } from "../../store/CartSlice";

export default function Cart() {



    let {showCart, setShowCart} = useContext(dataContext)
    let items = useSelector(state => state.cart)
    let subtotal = items.reduce( (total, item) => total+(item.qty*item.price), 0 )
    let deliveryFee = 20;
    let taxes = (subtotal*(0.05)).toFixed(2);
    let total = subtotal + deliveryFee + (Number)(taxes);
    let dispatch = useDispatch();
    let action = cartAction;

    function handleOnPlaceOrder()
    {
      toast.success("Order Place Successful");
      dispatch(action.DeleteAllItems());
    }

  return (
    <> 
      <div className={`${showCart ? "translate-zero" : "translate-full"} cart-component cart-sidebar`}  >
          <div className="cart-header" >
              <h3><label> Order Items </label></h3>
              <IoClose className="cross-icon" onClick={ () => setShowCart(false)} />
          </div>

          

          {items.length>0? 
          <>
            <div className="side-cart" >
                {items.map( (item) => <CartCard bill-type={item.id} name={item.name} image={item.image} price={item.price} qty={item.qty} id={item.id} key={item.id}/>)}
            </div>

            <div className="bill" >

              <div className="bill-content" >
                <div className="bill-type"><label>Subtotal</label></div>
                <div className="bill-value"><label>Rs {subtotal}</label></div>
              </div>

              <div className="bill-content" >
                <div className="bill-type"><label>Delivery Fee</label></div>
                <div className="bill-value"><label >Rs {deliveryFee}</label></div>
              </div>

              <div className="bill-content" >
                <div className="bill-type"><label>Taxes</label></div>
                <div className="bill-value"><label>Rs {taxes}</label></div>
              </div>

            </div>

            <div className="total-bill"> 
              <div><label >Total</label></div>
              <div><label>Rs {total}/-</label></div>
            </div>

            <div className="placeorder-container">
              <button className="placeorder-btn" onClick={handleOnPlaceOrder} >Place Order</button>
            </div>

          </> : <div className="no-item"> No Item Added</div>}
          
      </div> 
    </>

  )
}
