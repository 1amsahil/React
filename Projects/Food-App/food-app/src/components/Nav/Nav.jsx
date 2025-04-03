import { IoSearch } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import food from "../../assets/svg/fastfood.svg";

import "./Nav.css"
import { useContext, useEffect } from "react";
import { dataContext } from "../../context/UserContext";
import food_items from "../../data/food";

export default function Nav() {

  let {input, setInput, category, setCategory, showCart, setShowCart} = useContext( dataContext );
  
  useEffect(() => {
   
    let new_food_items = food_items.filter((item) => item.food_name.includes(input) ||  item.food_name.toLowerCase().includes(input));
    setCategory(new_food_items);
  },[input])

  return <>
    <div className='navbar' >
      
      <div className="food-icon-box" >
        <img src={food} className="food-icon" />
        <label className="app-name" >FOODY</label>
      </div>

      <form className="search-container" onSubmit={ (e) => e.preventDefault() } >
        <div className="search-icon-box">
          <IoSearch className="search-icon" />
        </div>
        <input type="text" placeholder="Search Items..." className="search-box" onChange={(e) => setInput(e.target.value) } value={input} />
      </form> 
       

      <div className="cart-icon-box" onClick={ () => setShowCart(true)} >
        <TiShoppingCart className="cart-icon" />
        <span className="item-num" ><label>0</label></span>
      </div>

    </div>
  </> 
}
