import React from 'react'

export default function Poll(props) {
      const { question, users } = props

      return (
         <div key={question.id} className="card poll bg-light mb-3">
         <div className="card-header">
            <img className="avatar" src={users[question.author].avatarURL} />
            { `${users[question.author].name} asks:`}
         </div>
         <div className="card-body">
         <h5 className="card-title">Would you rather?</h5>
         <p className="card-text"> {question.optionOne.text} or {question.optionTwo.text} </p>
         </div>
      </div>
      )      
}
