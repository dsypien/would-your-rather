import React from 'react' 
import { connect } from 'react-redux'
import PollDetailsOptionResult from './PollDetailsOptionResult'

function PollDetailsResult (params) {
   const { question, questions, users, authedUser } = params

   let pollResults = Object.entries(users)
                           .reduce( (acc, user) => { 
                              if(question.id in user[1].answers) {
                                 acc[user[1].answers[question.id]] += 1 
                              } 
                              
                              return acc
                           }, {optionOne: 0, optionTwo: 0 })
                           

   return (
      <div>
         <h5 className="card-title">Results...</h5>
         <PollDetailsOptionResult 
            option={question.optionOne} 
            selectedCount={pollResults.optionOne}
            totalCount={pollResults.optionOne + pollResults.optionTwo} />         
         <PollDetailsOptionResult 
            option={question.optionTwo} 
            selectedCount={pollResults.optionTwo}
            totalCount={pollResults.optionOne + pollResults.optionTwo} />
      </div>
   )
}

function mapStateToProps( { questions, users, authedUser } , ownProps) {
   const { question } = ownProps
   return {
      question,
      questions,
      users,
      authedUser,
   }
}

export default connect(mapStateToProps)(PollDetailsResult)
