import { IoSearch } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import food from "../../assets/svg/fastfood.svg";

import "./Nav.css"

export default function Nav() {
  return <>
    <div className='navbar' >
      
      <div className="food-icon-box" >
        <img src={food} className="food-icon" />
        <label className="app-name" >FOODY</label>
      </div>

      <div>
      </div>
        <form className="search-container">
          <IoSearch className="search-icon" />
          <input type="text" placeholder="Search Items..." className="search-box" />
        </form> 
       

      <div className="cart-icon-box">
        <TiShoppingCart className="cart-icon" />
        <span className="item-num" >0</span>
      </div>

    </div>
  </> 
}
