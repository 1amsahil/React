import "./Category.css"
export default function Category( {item, handleOnCate} ) {

  return (
  <div className="category" onClick={() => handleOnCate(item.category)} >
    
    <div className="category-icon" >{item.icon} </div>
    <div className="category-name" ><label> {item.name} </label> </div>
  
  </div>
  )
}
