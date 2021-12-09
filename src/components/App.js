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
import PollDetails from "./PollDetails"

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())    
  }

  render(){
    return (
      <Router>
        <div className="App">      
          <Nav />   
          <main role="main" className="container-sm">
            <Routes>
              <Route path="/" exact element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/question" element={<NewQuestion />} />
              <Route path="/questions/:id" element={<PollDetails />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
          </main>
        </div>
      </Router>      
    )
  } 
}

export default connect()(App)
