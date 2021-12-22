import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { Nav, Navbar } from "react-bootstrap"
import { connect } from "react-redux"
import useAuth from "../utils/useAuth"


function Navigation (props) {   
   const { authedUser } = props
   const { logout } = useAuth()
   const navigate = useNavigate()

   const handleLogOut = (e) => {
      e.preventDefault()
      logout().then(() => {
         navigate("/")
      })
   }

   return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">  
         <div className="container">
            <Navbar.Brand href="/#">WYR</Navbar.Brand>
            {authedUser && 
               <div className="nav-item nav-text">
                  Hello {authedUser.name}
                  <img className="avatar" alt="avatar" src={authedUser.avatarURL} />
               </div>  
            }          
            {authedUser &&      
               <div>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/home">
                           Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/add">
                           New Question
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/leaderboard">
                           Leader Board
                        </Nav.Link>
                        <div className="nav-item">
                           <a href="/#" className="nav-link" onClick={handleLogOut} > 
                              Log out   
                           </a>
                        </div>                                                                                                           
                     </Nav>       
                  </Navbar.Collapse>
               </div>
            }
         </div>
      </Navbar>
   )      
}

function mapStateToProps( { authedUser, users } ) {
   return {
      authedUser: users[authedUser],
   }
}

export default connect(mapStateToProps)(Navigation)