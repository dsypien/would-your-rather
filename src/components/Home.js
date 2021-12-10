import React, { Component } from 'react' 
import PollList from './PollList'
import { connect } from 'react-redux'
import {Tab, Tabs } from 'react-bootstrap'

class Home extends Component {
   render () {
      const { authedUser, questions, users } = this.props
      const answers = authedUser ? Object.keys(authedUser.answers) : []

      // Move answeredQuestions and unansweredQuestions to mapStateToProps
      // Look at tweet Dashboard for example
      const answeredQuestions = Object.keys(questions)
                                      .filter( (e) => answers.includes(e))
                                      .reduce( (ary, key) => { 
                                         let question = questions[key]  
                                         question.answer = answers[key]
                                         ary.push(question)
                                         return ary
                                       }, [])

      const unansweredQuestions = Object.keys(questions)
                                        .filter( (e) => !answers.includes(e))
                                        .reduce( (ary, key) => { 
                                          let question = questions[key]  
                                          ary.push(question)
                                          return ary
                                       }, [])
                   
      return (
         <div>
            <Tabs
               id="controlled-tab-example"
               defaultActiveKey="unanswered"
               transition={false}
               className="mb-3">
               <Tab eventKey="unanswered" title="Unanswered">
                  <PollList questions={unansweredQuestions} users={users} name="unanswered"/>
               </Tab>   
               <Tab eventKey="answered" title="Answered">
                  <PollList questions={answeredQuestions} users={users} name="answered"/>
               </Tab>                           
            </Tabs>
         </div>
      )
   }
}

function mapStateToProps ( {questions, users, authedUser} ){
   return {
      questions,
      users,
      authedUser : users[authedUser],      
   }
} 

export default connect(mapStateToProps)(Home)