import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Poll(props) {
      const { question, users } = props
      let navigate = useNavigate() 

      function viewPoll(e) {
         e.preventDefault()
         navigate(`/questions/${question.id}`)
      }

      return (
         <div key={question.id} className="card poll bg-light mb-3">
            <div className="card-header">
               { `${users[question.author].name} asks:`}
            </div>
            <div className="flex-container">
               <div className=" avatar-container">
                  <img alt="avatar" className="avatar-lg" src={users[question.author].avatarURL} />
               </div>
               <div className="poll-body">
                  <h5 className="card-title">Would you rather...</h5>
                  <p className="card-text"> {question.optionOne.text} <b>or</b> {question.optionTwo.text} </p>
                  <Button onClick={(e) => viewPoll(e)}>View Poll</Button>
               </div>         
            </div>            
         </div>
      )      
}