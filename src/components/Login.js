import React, { Component } from "react"
import { connect } from "react-redux"
import { setAuthedUser } from "../actions/authedUser"
import { Navigate } from "react-router-dom"

class Login extends Component{
   state = {
      user: "",
      loggedIn : false
   }

   handleSubmit = (e) => {
      e.preventDefault()
      const { dispatch } = this.props      

      if(this.state.user){
          dispatch(setAuthedUser(this.state.user))
          this.setState({
             loggedIn: true
          })
      }
      else {
         // TODO: instruct user to select a user from the dropdown
      }
   }

   handleChange = (e) => {
      const user = e.target.value

      this.setState({
         user,
      })
   }
   
   render(){ 
      const { users } = this.props
      const { loggedIn } = this.state

      if (loggedIn) {
         return <Navigate to="/home" />
      }

      return (
         <form onSubmit={(e) => this.handleSubmit(e)} className="auth-container mt-3">            
            <h3 className='center mb-3'>Plese log in</h3>

            <select 
               defaultValue="" 
               onChange={this.handleChange}
               className="form-control mb-3">
               <option value="" disabled>Select user</option>
               {users.map( user => (
                  <option key={user} value={user}>
                     {user}
                  </option>
               ))}
            </select>

            <button className="btn btn-lg btn-primary" type="submit">
               Log In
            </button>          
         </form>
      )
   }
}

function mapStateToProps ({users}){
   return {
      users: Object.keys(users)
   }
 }

export default connect(mapStateToProps)(Login)