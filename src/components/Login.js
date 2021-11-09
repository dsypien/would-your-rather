import React, { Component } from "react"
import { connect } from "react-redux"

class Login extends Component{
   render(){
      const { users } = this.props

      return (
         <div>
            <h3 className='center'>Log In</h3>
            <form>
               <select>
                  <option></option>
                  {users.map( user => (
                     <option key={user}>
                        {user}
                     </option>
                  ))}
               </select>
            </form>            
         </div>
      )
   }
}

function mapStateToProps ({users}){
   return {
      users: Object.keys(users)
   }
 }

export default connect(mapStateToProps)(Login)