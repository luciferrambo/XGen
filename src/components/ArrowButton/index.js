import React from "react";
import "./style.scss"

const ArrowButton = ({type, onClick}) => {
  return(
    <button className={`arrow-button ${type}-arrow`} onClick={onClick}>
    </button>
  )
}

export { ArrowButton };
