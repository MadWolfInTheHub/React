import React from "react";

const Spinner = (props) => {
  console.log(props)
  return <span className="spinner" 
  style={{width: props.size, height: props.size, display: props.style}}
  >
  </span>
}

export default Spinner;