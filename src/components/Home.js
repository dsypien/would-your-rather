import React, { Component } from 'react' 
import PollList from './PollList'
import { connect } from 'react-redux'
import {Tab, Tabs } from 'react-bootstrap'

class Home extends Component {
   render () {
      const { users, answeredQuestions, unansweredQuestions } = this.props
                   
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
   const user = users[authedUser]
   const answers = authedUser ? Object.keys(user.answers) : []

   return {
      users,
      answeredQuestions: Object.keys(questions)
                               .filter( (e) => answers.includes(e))
                               .reduce( (ary, key) => { 
                                  let question = questions[key]  
                                  question.answer = answers[key]
                                  ary.push(question)
                                  return ary
                               }, []),
      unansweredQuestions: Object.keys(questions)
                                 .filter( (e) => !answers.includes(e))
                                 .reduce( (ary, key) => { 
                                 let question = questions[key]  
                                 ary.push(question)
                                 return ary
                                 }, [])
   }
} 

export default connect(mapStateToProps)(Home)