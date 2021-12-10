import React, { useState } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { Button } from "react-bootstrap"
import { saveUserAnswer } from "../actions/users"

function PollDetails (props) {
   const { id } = useParams()
   const { questions, users, authedUser } = props
   const question = questions[id]

   const [answer, setAnswer] = useState(null)
   const radios = [
      { name: 'optionOne', value: 'optionOne', label: question.optionOne.text },
      { name: 'optionTwo', value: 'optionTwo', label: question.optionTwo.text },
    ];

   function handleOptionChange(e) {
      setAnswer(e.target.value)
   }

   function handleSubmit(e) {
      e.preventDefault()

      if(answer !== null){
         props.dispatch(saveUserAnswer(authedUser.id, question.id, answer))
      }
   }

   return (
      <div>
         <form 
            onSubmit={handleSubmit}
            className="card poll bg-light mb-3">
            <div className="card-header">
               { `${users[question.author].name} asks:`}
            </div>
            <div className="flex-container">
               <div className=" avatar-container">
                  <img alt="avatar" className="avatar-lg" src={users[question.author].avatarURL} />
               </div>
               <div className="poll-body">
                  
                  <h5 className="card-title">Would you rather...</h5>
                  <div>
                     { radios.map( radio => (
                        <div key={radio.name}>
                           <input type="radio" 
                                    onChange={ e => handleOptionChange(e) }
                                    id={radio.name}
                                    name={radio.name}
                                    checked={radio.value === answer} 
                                    value={radio.value} />
                           <label htmlFor={radio.name}>{radio.label}</label>
                        </div>
                     ))}
                  </div>
                  <Button type="submit">Submit</Button>
               </div>         
            </div>            
         </form>
      </div>
   )
}

function mapStateToProps( { questions, users, authedUser } ){   
   return {
      questions,
      users,
      authedUser: users[authedUser]
   }
}

export default connect(mapStateToProps)(PollDetails)