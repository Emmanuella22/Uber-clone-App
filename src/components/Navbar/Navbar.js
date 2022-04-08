import React from "react"
import "./Navbar.css"

const Navbar = () => {
    return (

        <div className="navbar_right">
             <ul>
                 <li className="nav-items">
                  <li>Uber</li>
                  <li>Company</li>
                  <li>Safety</li>
                  <li>Help</li>
                  <li>COVID-19 resources</li>
                </li> 
            </ul>
     
          <div className="navbar_left"> 
               <ul>
                  <li className="nav-items2">
                   <li>EN</li>
                   <li>Products</li>
                   <li>Log in</li>
                   <li>Sign in</li>
                </li>
              </ul>
        </div>
      </div>
    );
}


export default Navbar;