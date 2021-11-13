import React, { Component } from "react"
import { NavLink } from "react-router-dom"

class Nav extends Component {
   render (){
      return (
         <nav className="navbar navbar-light bg-dark">  
            <span className="brand">WYR</span>
            <ul>
               <li className="nav-item">
                  <NavLink className="nav-link" to="/" exact activeClassName='active' >
                     Log out   
                  </NavLink>
               </li>
            </ul>
         </nav>
      )      
   }
}

export default Nav