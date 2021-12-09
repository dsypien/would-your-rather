import React from "react"
import { useNavigate, NavLink } from "react-router-dom"
import { Nav, Navbar } from "react-bootstrap"
import { connect } from "react-redux"
import { logOut } from "../actions/authedUser"

function Navigation (props) {   
   const { authedUser } = props
   const navigate = useNavigate()

   const handleLogOut = (e) => {
      e.preventDefault()

      props.dispatch(logOut())    
      navigate('/')
   }

   return (
      <Navbar expand="lg" bg="dark" variant="dark">  
         <Navbar.Brand href="/#">WYR</Navbar.Brand>
         {authedUser && 
            <div className="nav-item nav-text float-left">
               Hello {authedUser.name}
               <img className="avatar" alt="avatar" src={authedUser.avatarURL} />
            </div>  
         }          
         {authedUser &&      
            <div>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                     <li className="nav-item">
                        <Nav.Link as={NavLink} to="/home">
                           Home
                        </Nav.Link>
                     </li>
                     <li className="nav-item">
                        <Nav.Link as={NavLink} to="/question">
                           New Question
                        </Nav.Link>
                        </li>
                     <li className="nav-item">
                        <Nav.Link as={NavLink} to="/leaderboard">
                           Leader Board
                        </Nav.Link>
                     </li>                          
                     <li className="nav-item">
                        <a href="/#" className="nav-link" onClick={handleLogOut} > 
                           Log out   
                        </a>
                     </li>                                                                                                           
                  </Nav>       
               </Navbar.Collapse>
            </div>
         }
      </Navbar>
   )      
}

function mapStateToProps( { authedUser, users } ) {
   return {
      authedUser: users[authedUser],
   }
}

export default connect(mapStateToProps)(Navigation)