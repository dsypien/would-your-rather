import React, { Component } from "react"
import { connect } from "react-redux"
import { setAuthedUser } from "../actions/authedUser"

class Login extends Component{
   state = {
      user: ""
   }

   handleSubmit = (e) => {
      e.preventDefault()
      const { dispatch } = this.props      

      if(this.state.user){
         alert(this.state.user + ' is loggin in')
          dispatch(setAuthedUser(this.state.user))
      }
      else {
         // TODO: instruct user to select a user from the dropdown
      }
   }

   handleChange = (e) => {
      const user = e.target.value;

      console.log(user)

      this.setState({
         user,
      })
   }
   
   render(){ 
      const { users } = this.props

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