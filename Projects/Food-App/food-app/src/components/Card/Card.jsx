import "./Card.css"
import Veg from "../../assets/svg/veg.svg"
import NonVeg from "../../assets/svg/nonveg.svg"

export default function Card({name, image, id, price, type}) {
  return (
    <div className="card-container"> 
        <div className="card" >

            <div>
                <img src={image} alt="Food_image1" className="card-image" />
            </div>

            <div className="card-info">

                <div className="card-item-name" >
                    <label>{name}</label>
                </div>

                <div className="lower-card-info" >    
                    <div className="card-item-price">
                        <label>Rs {price}/-</label>
                    </div>

                    <div className="card-item-type" >

                        {type=="veg" ?<> <img src={Veg} alt="veg" height={"15px"} width={"15px"} /> <span>{type}</span> </>
                        : <> <img src={NonVeg} alt="veg" height={"20px"} width={"20px"} /> <span className="color-red" > <label>{type}</label> </span> </>
                    }
                        
                    </div>
                </div>

                <button className="add-item-btn"> Add Item</button>

            </div>

        </div>
    </div>
  )
}
