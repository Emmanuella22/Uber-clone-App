import React from "react";
import "./Signup.css"
import {FaArrowRight} from "react-icons/fa"


const Signup = () => {
    return (
         <div className="Signupsection">
             <h1 className="Signupsection-header-right">
                 Sign up to drive <FaArrowRight/>
             </h1>  
             <h1 className="Signupsection-header-left">
                 Sign up to ride   <FaArrowRight/>
             </h1>
         </div>
        
    )
}


export default Signup;