import React from "react"
import { useNavigate, NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { logOut } from "../actions/authedUser"

function Nav (props) {   
   const { authedUser } = props
   const navigate = useNavigate()

   const handleLogOut = (e) => {
      e.preventDefault()

      props.dispatch(logOut())    
      navigate('/')
   }

   return (
      <nav className="navbar navbar-light bg-dark">  
         <span className="brand">WYR</span>
         {authedUser && 
            <ul>
               <li className="nav-item">
                  <NavLink to="/home">
                     Home
                  </NavLink>
               </li>
               <li className="nav-item">
                  <NavLink to="/question">
                     New Question
                  </NavLink>
                  </li>
               <li className="nav-item">
                  <NavLink to="/leaderboard">
                     Leader Board
                  </NavLink>
               </li>
               <li className="nav-item">
                  <a href="/#" className="nav-link" onClick={handleLogOut} > 
                     Log out   
                  </a>
               </li>                                                                                                           
            </ul>       
         }
      </nav>
   )      
}

function mapStateToProps( { authedUser } ) {
   return {
      authedUser,
   }
}

export default connect(mapStateToProps)(Nav)