import Login from "./Login"
import Home from "./Home"
import NewQuestion from "./NewQuestion"
import Leaderboard from "./Leaderboard"
import PageNotFound from "./PageNotFound"
import Nav from "./Nav"
import { connect } from "react-redux"
import { handleInitialData } from "../actions/shared"
import React, { Component } from "react"
import RequireAuth from "./RequireAuth"
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
          <main role="main" className="container">
            <Routes>
              <Route path='*' element={<PageNotFound />} />
              <Route path='/404' element={<PageNotFound />} />
              <Route path="/" exact element={<Login />} />
              <Route path="/home" element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                } 
              />
              <Route path="/add" element={
                  <RequireAuth>
                    <NewQuestion />
                  </RequireAuth>
                } 
              />
              <Route path="/questions/:id" element={
                  <RequireAuth>
                    <PollDetails />
                  </RequireAuth>
                } 
              />
              <Route path="/leaderboard" element={
                  <RequireAuth>
                    <Leaderboard />
                  </RequireAuth>
                } 
              />
            </Routes>
          </main>
        </div>
      </Router>      
    )
  } 
}

export default connect()(App)
