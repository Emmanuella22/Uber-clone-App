import React from "react"
import "./Hero-sect.css"
import {AiOutlineCar} from "react-icons/ai"
import {FaUtensils} from "react-icons/fa"
import {GiNetworkBars} from "react-icons/gi"


const Herosection = () => {
    return (
          
        <div className="hero-container">
            <div className="hero-section">
              <ul className="hero-content1">
                    <li><GiNetworkBars/>Drive or deliver</li>
                    <li><FaUtensils/>Eat</li>
                    <li><AiOutlineCar/>Ride</li>
                </ul>
                <hr />
            </div>
             <div className="hero-content2">
                <h1 className="hero-title">
                   Get in the driver's seat and get paid
                </h1>
                <div className="hero-subtitle">
                   Drive on the platform with the largest network of active riders.
                </div>
                 <button type="button" className="hero-button" onClick="Ha">
                     Sign up to drive
                 </button>
                 <div className="last-title">
                     Learn more about driving and delivering
                 </div>  

           </div>
            
        </div> 
    )
} 



export default Herosection;

