import React from "react"
import "./Twocontainer.css"
import firstimage from "../../Asset/containerleftimage.png"
import secondimage from "../../Asset/containerrightimage.png"



const Twocontainers = () => {
    return (

          <div className="twocontainer-container">
                <h1 className="title">
                      Focused Safety, wherever you go
                </h1>
                <div className="two-containers">
                  <div className="container-left"> 
                    <div className="image-left"> 
                       <img src={firstimage} alt="image1"/>
                  </div>
                       <div className="container-left-title">
                             Our commitment to your safety
                       </div>
                       <div className="container-left-subtitle">
                             With every safety feature and every standard in our Community Guidelines,
                             we're commitment to helping to create a safe environment for our users.
                        </div>
                        <li className="last-title2">
                              <li>Read about our Community Guidelines</li>
                              <li>See all safety features</li>
                         </li>  
                    </div>      
                   <div className="container-right">
                     <div className="image-right">
                          <img src={secondimage} alt="image2"/>
                    </div>
                      <div className="container-right-title">
                            Setting 10,000+ cities in motion
                      </div>
                    <div className="container-right-subtitle">
                            The app is available in thousands of cities worldwide,so you can request a ride even when you're far from home.
                      </div>
                       <li className="last-title3">
                            View all cities
                      </li>
                </div>   

             </div>          
          
       </div>
    )
 }  




export default Twocontainers;