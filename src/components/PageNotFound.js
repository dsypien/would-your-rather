import React, { useEffect } from "react"
import useAuth from "../utils/useAuth"
import { useNavigate } from "react-router"

function PageNotFound (props){
   const { authed } = useAuth()
   const navigate = useNavigate()

   useEffect(() => {
      if(!authed){
         navigate("/")
      }
   })

   return (
      <div>
         <h1>404</h1>
         <h3>Page Not Found</h3>
      </div>
   )
}

export default PageNotFound