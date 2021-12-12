import React from 'react' 
import { connect } from 'react-redux'
import PollDetailsOptionResult from './PollDetailsOptionResult'

function PollDetailsResult (params) {
   const { question, users, authedUser } = params

   let pollResults = Object.entries(users)
                           .reduce( (acc, user) => { 
                              if(question.id in user[1].answers) {
                                 acc[user[1].answers[question.id]] += 1 
                              } 
                              
                              return acc
                           }, {optionOne: 0, optionTwo: 0 })    
   
   const authedUserSelection = users[authedUser].answers[question.id]
   
   return (
      <div>
         <h5 className="card-title">Results...</h5>
         <PollDetailsOptionResult 
            option={question.optionOne} 
            selectedCount={pollResults.optionOne}
            selectedByAuthedUser={authedUserSelection === "optionOne"}
            totalCount={pollResults.optionOne + pollResults.optionTwo} />         
         <PollDetailsOptionResult 
            option={question.optionTwo} 
            selectedCount={pollResults.optionTwo}
            selectedByAuthedUser={authedUserSelection === "optionTwo"}
            totalCount={pollResults.optionOne + pollResults.optionTwo} />
      </div>
   )
}

function mapStateToProps( { users, authedUser } , ownProps) {
   const { question } = ownProps
   return {
      question,
      users,
      authedUser,
   }
}

export default connect(mapStateToProps)(PollDetailsResult)
