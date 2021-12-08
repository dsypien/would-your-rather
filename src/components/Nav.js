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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">  
         <a className="brand navbar-brand" href="/#">WYR</a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         {authedUser &&          
            <ul className="navbar-nav mr-atuo">
               <li className="nav-item">
                  <NavLink className="nav-link" to="/home">
                     Home
                  </NavLink>
               </li>
               <li className="nav-item">
                  <NavLink className="nav-link" to="/question">
                     New Question
                  </NavLink>
                  </li>
               <li className="nav-item">
                  <NavLink className="nav-link" to="/leaderboard">
                     Leader Board
                  </NavLink>
               </li>
               <span className="nav-item nav-text">
                  Hello {authedUser.name}
                  <img className="avatar" alt="avatar" src={authedUser.avatarURL} />
               </span>               
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

function mapStateToProps( { authedUser, users } ) {
   return {
      authedUser: users[authedUser],
   }
}

export default connect(mapStateToProps)(Nav)