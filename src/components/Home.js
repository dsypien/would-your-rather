import React, { Component } from 'react' 
import { connect } from 'react-redux'

class Home extends Component {
   render () {
      const { authedUser, questions } = this.props
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
            <ul>
               {answeredQuestions.map( ans => (
                  <li key={ans.id}>{ans.id}</li>
               ))} 
            </ul>
            <h2>Unanswered</h2>
            <ul>
               {unansweredQuestions.map( ans => (
                     <li key={ans.id}>{ans.id}</li>
               ))} 
            </ul>
         </div>
      )
   }
}

function mapStateToProps ( {questions, users, authedUser} ){
   return {
      questions,
      authedUser : users[authedUser],
      answeredQuestions: questions[authedUser]
   }
} 

export default connect(mapStateToProps)(Home)