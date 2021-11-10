import React, { Component } from "react"
import { connect } from "react-redux"

class Login extends Component{
   render(){
      const { users } = this.props

      return (
         <form className="auth-container mt-3">            
            <h3 className='center mb-3'>Plese log in</h3>

            <select defaultValue="" className="form-control mb-3">
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