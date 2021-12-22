import React from "react"
import { connect } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import useAuth from "./useAuth"

const Login = (props) => {
   const [user, setUser] = React.useState("")
   const { login } = useAuth()
   const { users } = props
   const { state } = useLocation()
   const navigate = useNavigate()

   const handleSubmit = (e) => {
      e.preventDefault()    

      if(user){
         login(user)
            .then(() => {
               navigate(state?.path || "/home")
            })
      }
      else {
         // TODO: instruct user to select a user from the dropdown
      }
   }

   const handleChange = (e) => {
      const user = e.target.value
      setUser(user)
   } 

   return (
      <form onSubmit={(e) => handleSubmit(e)} className="auth-container mt-3">                        
         <h3 className='center mb-3'>Plese log in</h3>
         <select 
            defaultValue="" 
            onChange={handleChange}
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

function mapStateToProps ({users}){
   return {
      users: Object.keys(users)
   }
 }

export default connect(mapStateToProps)(Login)