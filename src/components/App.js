import Login from "./Login"
import Home from "./Home"
import NewQuestion from "./NewQuestion"
import Leaderboard from "./Leaderboard"
import Nav from "./Nav"
import { connect } from "react-redux"
import { handleInitialData } from "../actions/shared"
import React, { Component } from "react"
import { 
  BrowserRouter as Router, 
  Routes,
  Route
} from "react-router-dom"

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())    
  }

  render(){
    return (
      <Router>
        <div className="App">      
          <Nav />   
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/question" element={<NewQuestion />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </div>
      </Router>      
    )
  } 
}

export default connect()(App)
