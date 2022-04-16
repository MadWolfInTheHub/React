import React, { useState, useEffect } from "react";
import Clock from "./Clock.jsx";

const App = () => {
  const [isVisible, setVisibility] = useState(true);
  useEffect(() => {
    const onToggle = () => {
      setVisibility(!isVisible)
    }
    const btn = document.querySelector('.btn')
    console.log(btn)
    btn.addEventListener('click', onToggle);
    
    return () => {
      btn.removeEventListener('click', onToggle);
    }
    
  })
  return (
    <>
      <button className="btn">Toggle</button>
        {
          !isVisible 
          ? null 
          :
          <>
            <Clock location='London' offset={0}/>
            <Clock location='Kiev' offset={2}/>
            <Clock location='New York' offset={-5}/>
          </>
        }
    </>
  );
};

export default App;