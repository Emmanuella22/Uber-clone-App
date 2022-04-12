import React from "react"
import "./Hero-sect.css"

const Herosection = () => {
    return (
          
        <div className="hero-container">
            <div className="hero-section">
                <ul className="hero-content1">
                    <li>Drive
                        or deliver
                    </li>
                    <li>Eat</li>
                    <li>Ride</li>
                </ul>
       <hr />
            <div className="hero-content2">
                <h1 className="hero-title">
                   Get in the driver's seat and get paid
                </h1>
                <h3 className="hero-subtitle">
                   Drive on the platform with the largest network of active riders.
                </h3>
                 <button type="button" className="hero-button" onClick="Ha">
                     Sign up to drive
                 </button>
                 <h5 className="last-title">
                     Learn more about driving and delivering
                 </h5>  

           </div>
            
         </div>
        </div>
    )
} 



export default Herosection;

