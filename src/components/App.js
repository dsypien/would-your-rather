import Login from "./Login"
import { connect } from "react-redux"
import { handleInitialData } from "../actions/shared"
import React, { Component } from "react"

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    const { users } = this.props

    return (
      <div className="App">      
        navbar
        <Login />
        
      </div>
    )
  } 
}

function mapStateToProps ({users}){
  return users
}

export default connect(mapStateToProps)(App)
