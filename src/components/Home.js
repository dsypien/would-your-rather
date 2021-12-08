import React, { Component } from 'react' 
import PollList from './PollList'
import { connect } from 'react-redux'

class Home extends Component {
   render () {
      const { authedUser, questions, users } = this.props
      const answers = authedUser ? Object.keys(authedUser.answers) : []

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
            <h2>Answered</h2>
            <PollList questions={answeredQuestions} users={users}/>
            
            <h2>Unanswered</h2>
            <PollList questions={unansweredQuestions} users={users}/>
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