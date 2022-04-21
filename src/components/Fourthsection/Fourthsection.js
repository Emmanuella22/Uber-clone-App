import React from "react";
import "./Fourthsection.css"
import {MdOutlineManageAccounts} from "react-icons/md"
import {MdOutlineLibraryBooks} from "react-icons/md"
import {BsHouseDoor} from "react-icons/bs"


  const Fourthsection = () => {
    return (
     <div className="fourth-container">
         <div className="aboutus1">
            <div className="aboutus">
                <MdOutlineManageAccounts/>
                 About us
            </div>
            <div className="aboutus-section">
                Find out how we started, what drives us, and how we're reimagining how the world moves.
            </div>
            <li className="last-title1">
                <li>Learn more about Uber</li>
            </li>
         </div>
        <div className="Newsroom1">
            <div className="Newsroom">
                <MdOutlineLibraryBooks/>
                 Newsroom
            </div>
            <div className="newsroom-section">
                See announcements about our latest releases,initiatives, and partnerships.
            </div>
            <li className="last-title2">
                <li>Go to Newsroom</li>
            </li>
         </div>
         <div className="globalcitizenship1">
            <div className="globalcitizenship">
                <BsHouseDoor/>
                Global citizenship
            </div>
         <div className="globalcitizenship-section">
                Read about our commitment to making a positive impact in the cities we serve.
         </div>
            <li className="last-title3">
                <li>See our partnerships</li>
            </li>
         </div>
        </div>
    );
}



export default Fourthsection;