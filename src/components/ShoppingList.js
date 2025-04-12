import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
const [displayFoodsList, setDisplayFooodsList] = useState(items);
  function handleFilter(){
   const identifier =  document.querySelector('select').value
    console.log(identifier);
    
   const filteringFoods = items.filter((item) => {
    if(identifier === 'All'){
      return true;
    }
     else if(item.category === identifier){
        return true;
      }else{
        return false;
      }
    })
    console.log(filteringFoods);
    setDisplayFooodsList(filteringFoods)
    
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={() => handleFilter()}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayFoodsList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
