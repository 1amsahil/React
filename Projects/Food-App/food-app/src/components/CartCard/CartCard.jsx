import "./CartCard.css";
import image from "../../assets/images/image1.avif"

export default function CartCard() {
  return (
    <div className="cart-card-container">

      <div className="cart-card">

        <img src={image} alt="" height={"25%"} width={"25%"} />

        <div className="info">
          <div>Chicken Soup</div>

          <div className="quantity-info">
            <button className="minus-btn" >-</button>
            <div className="quantity" >1</div>
            <button className="pulse-btn" >+</button>
          </div>
        </div>
      </div>

    </div>
  )
}
