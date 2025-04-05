import "./Card.css"
import Veg from "../../assets/svg/veg.svg"
import NonVeg from "../../assets/svg/nonveg.svg"
import { useDispatch } from "react-redux"
import { cartAction } from "../../store/CartSlice";


export default function Card({name, image, id, price, type}) {

    let dispatch = useDispatch();
    let action = cartAction;

    function handleAddDispatch() 
    {
        dispatch(action.AddItem(
            {
                id : id,
                name : name,
                price : price,
                type : type,
                image : image,
                qty : 1,
            }))
    }

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

                        {type=="veg" ? <> <img src={Veg} alt="veg" height={"15px"} width={"15px"} /> <span><label>{type}</label> </span> </>
                        : <> <img src={NonVeg} alt="veg" height={"20px"} width={"20px"} /> <span className="color-red" > <label>{type}</label> </span> </>
                    }
                        
                    </div>
                </div>

                <button className="add-item-btn" onClick={handleAddDispatch}> Add Item</button>

            </div>

        </div>
    </div>
  )
}
