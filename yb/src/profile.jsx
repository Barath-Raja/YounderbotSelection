import React from "react";
import barath from "./assets/barath.jpg"
export default function Profile() {
  return (
    <div style={{ textAlign: "center" }}>
            <img src={barath} alt="Profile Picture" style={{borderRadius:"50%",width:"150px",height:"150px" }}/>
        
      <h2>Hello</h2>
      <p>I am Barath Raja A. This is my small introduction.</p>
    </div>
  );
}
