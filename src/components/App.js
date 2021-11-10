import Login from "./Login"
import Nav from "./Nav"
import { connect } from "react-redux"
import { handleInitialData } from "../actions/shared"
import React, { Component } from "react"

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    return (
      <div className="App">      
        <Nav />
        <Login />        
      </div>
    )
  } 
}

export default connect()(App)
