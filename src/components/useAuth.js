import React from "react"
import { connect } from "react-redux"
import { logOut } from "../actions/authedUser"
import { setAuthedUser } from "../actions/authedUser"
import store from "../utils/store"

const authContext = React.createContext()
function useAuth () {
   const [authed, setAuthed] = React.useState(false)

   return {
      authed: authed,
      login : (user) => {
         return new Promise((res) => {
            store.dispatch(setAuthedUser(user))
            setAuthed(true)
            res()
         })
      },
      logout: () => {
         return new Promise((res) => {
            store.dispatch(logOut())
            setAuthed(false)
            res()
         })
      }
   }
}

export function AuthProvider ({ children }) {
   const auth = useAuth()

   return (
      <authContext.Provider value={auth}>
         {children}
      </authContext.Provider>
   )
}

export default function AuthConsumer () {
   return React.useContext(authContext)
}

connect()(useAuth)