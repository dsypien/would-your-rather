import React, { useEffect } from 'react' 
import PollList from './PollList'
import { connect } from 'react-redux'
import {Tab, Tabs } from 'react-bootstrap'
import { useNavigate } from 'react-router'

function Home (props) {
   const { users, answeredQuestions, unansweredQuestions, authedUser } = props
   const navigate = useNavigate()

   useEffect(() => {
      if (!authedUser){
         navigate("/")
      }
   }, [navigate, authedUser])
                  
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

function mapStateToProps ( {questions, users, authedUser} ){
   const user = users[authedUser]
   const answers = authedUser ? Object.keys(user.answers) : []

   return {
      authedUser,
      users,
      answeredQuestions: Object.keys(questions)
                               .filter( (e) => answers.includes(e))
                               .reduce( (ary, key) => { 
                                  let question = questions[key]  
                                  question.answer = answers[key]
                                  ary.push(question)
                                  return ary
                               }, [])
                               .sort((a, b) => b.timestamp - a.timestamp),
      unansweredQuestions: Object.keys(questions)
                                 .filter( (e) => !answers.includes(e))
                                 .reduce( (ary, key) => { 
                                    let question = questions[key]  
                                    ary.push(question)
                                    return ary
                                 }, [])
                                 .sort((a, b) => b.timestamp - a.timestamp),
   }
} 

export default connect(mapStateToProps)(Home)