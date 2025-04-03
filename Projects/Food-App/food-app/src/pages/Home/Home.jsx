import Nav from '../../components/Nav/Nav'
import CategoriesData from '../../data/CategoriesData'
import Category from '../../components/Category/Category'
import Card from '../../components/Card/Card'

import "./Home.css"
import food_items from '../../data/food'
import { useState } from 'react'

export default function Home() {

  let [category, setCategory] = useState(food_items);

  function filter (current) 
  {
    if(current==="all")
    {
      setCategory(food_items);
    }
    else
    {
      console.log(current)
      let new_food_items = food_items.filter((item) => (item.food_category === current) );
      setCategory(new_food_items);  
    }
  }

  return (
    <div>

        <Nav/>

        <div className="category-container" >
          {CategoriesData.map( item => <Category item={item} key={item.id} handleOnCate={filter} /> ) }
        </div>
        
        <div className="food-items">
          {category.map( item => <Card name={item.food_name} image={item.food_image} price={item.price} type={item.food_type} key={item.id} /> )}
          
        </div>

    </div>
  )
}
