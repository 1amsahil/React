import "./CartCard.css";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux"
import { cartAction } from "../../store/CartSlice";

export default function CartCard({id, name, image, price, qty }) {

  let dispatch = useDispatch();
  let action = cartAction;

  function handleDeleteItem()
  {
    dispatch(action.RemoveItem(id))
  }

  function handleIncrement()
  {
    dispatch(action.IncrementQty(id))
  }

  function handleDecrement()
  {
    dispatch(action.DecrementQty(id))
  }

  return (
    <div className="cart-card">

        <img src={image} alt="" height={"130vh"} width={"130vw"} />

        <div className="item-container">
          <div>{name}</div>

          <div className="quantity-info">
            <button className="quantity-btn" onClick={handleDecrement} >-</button>
            <div className="quantity" ><label>{qty>0 ? qty : handleDeleteItem()}</label></div>
            <button className="quantity-btn" onClick={handleIncrement} >+</button>
          </div>
        </div>

        <div>
          <span className="item-price"><label>Rs {price}/-</label></span>
          <div  className="delete-container">
            <MdDeleteForever className="delete-btn" onClick={handleDeleteItem} />
          </div>
        </div>

    </div>
  )
}
