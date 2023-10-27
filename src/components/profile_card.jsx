import React from "react";
import './profilecard.css'
function Profilecard(props){
  console.log(props.d);
    return(
<>
  <div className="card">
    <div className="lines"></div>
    <div className="imageBox">
      <img src="https://i.pravatar.cc/600?img=24" alt="avatar" />
    </div>
    <div className="content">
      <div className="details">
        <h2>{props.d.name} <br/> <span>{props.d.desig}</span></h2>
       
      </div>
    </div>
  </div>

</>
    )
 }
 export default Profilecard;