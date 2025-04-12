import React, { useState } from "react";
let isOn = true;

function Item({ name, category }) {
 
  const [cartDecision, setCartDecision] = useState('Add to Cart');
  
  function myCartHandler(){
    isOn = !isOn
    const decider = isOn? 'Add to Cart': 'Remove from Cart'
   
    setCartDecision( decider);
    console.log(decider);
  }
console.log(isOn);



  return (
    <li className={cartDecision === 'Add to Cart' ? '': 'in-cart'}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cartDecision === 'Add to Cart' ? 'add': 'remove'} onClick={myCartHandler}>{cartDecision}</button>
    </li>
  );
}

export default Item;
