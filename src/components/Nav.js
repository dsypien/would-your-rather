import React from "react"
import { useNavigate } from "react-router-dom"
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
         <ul>               
            {authedUser && 
               <li className="nav-item">
                  <a href="/#" className="nav-link" onClick={handleLogOut} > 
                     Log out   
                  </a>
               </li>
            }
                              
         </ul>       
      </nav>
   )      
}

function mapStateToProps( { authedUser } ) {
   return {
      authedUser,
   }
}

export default connect(mapStateToProps)(Nav)