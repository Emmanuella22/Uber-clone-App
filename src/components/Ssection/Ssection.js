import React from "react";
import './Ssection.css'
import DriverAppimageleft from "../../Asset/DriverAppimageleft.png"
import RiderAppimageright from "../../Asset/RiderAppimageright.png"
import {AiOutlineArrowRight} from "react-icons/ai"



const Ssection = () => {
    return (
        <div className="Ssection-container">
           <h2 className="Ssection-container-header">
               There's more to love in the apps
           </h2>
           <div className="Ssection-container2">
               <div className="Ssection-container-right">
                   <img src={DriverAppimageleft} alt="image1"/>
                   <h4 className="title-container-right">
                       Download the Driver app <AiOutlineArrowRight/>
                   </h4>
                <div className="Ssection-container-left">
                   <img src={RiderAppimageright} alt="image2"/>
                   <h4 className="title-container-left">
                       Download the Uber app <AiOutlineArrowRight/>
                   </h4>
                </div>    

               </div>
           </div>
        </div>
    )
}


export default Ssection;