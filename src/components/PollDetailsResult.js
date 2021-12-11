import React from 'react' 
import { connect } from 'react-redux'

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
         <div className="card poll bg-light mb-3">
            <div>Would rather {question.optionOne.text}</div>
            <div>{ 100 * (pollResults.optionOne / (pollResults.optionOne + pollResults.optionTwo))}%</div>
            <div>{`${pollResults.optionOne} out of ${pollResults.optionOne + pollResults.optionTwo} votes`}</div>
         </div>
         <div className="card poll bg-light mb-3">
            <div>Would rather {question.optionTwo.text}</div>
            <div>{ 100 * (pollResults.optionTwo / (pollResults.optionOne + pollResults.optionTwo))}%</div>
            <div>{`${pollResults.optionTwo} out of ${pollResults.optionOne + pollResults.optionTwo} votes`}</div>
         </div>
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
