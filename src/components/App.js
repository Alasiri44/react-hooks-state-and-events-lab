import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
let isOn = true;

function App() {
  const [mode, setMode] = useState('Dark Mode');
  
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = !isOn ? "App dark" : "App";


  function handleMode(){
    isOn = ! isOn;
    let newMode = isOn? 'Dark Mode': 'Light Mode';
    setMode(newMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleMode}>{mode}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
