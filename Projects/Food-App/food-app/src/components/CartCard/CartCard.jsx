import "./CartCard.css";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux"
import { cartAction } from "../../store/CartSlice";

export default function CartCard({id,name, image, price, qty }) {

  let dispatch = useDispatch();
  let action = cartAction;

  function handleDeleteItem()
  {
    console.log("Name : ",name)
    dispatch(action.RemoveItem(id))
  }

  return (
    <div className="cart-card">

        <img src={image} alt="" height={"130vh"} width={"130vw"} />

        <div className="item-container">
          <div>{name}</div>

          <div className="quantity-info">
            <button className="quantity-btn" >-</button>
            <div className="quantity" >{qty}</div>
            <button className="quantity-btn" >+</button>
          </div>
        </div>

        <div>
          <span className="item-price">Rs {price}/-</span>
          <div  className="delete-container">
            <MdDeleteForever className="delete-btn" onClick={handleDeleteItem} />
          </div>
        </div>

    </div>
  )
}
