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