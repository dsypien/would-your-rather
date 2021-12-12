import React, { useState } from 'react' 
import { saveUserAnswer } from '../actions/users'
import { connect } from 'react-redux'
import { Button } from "react-bootstrap"

function PollDetailsQuestion (props) {
   const { question, authedUser } = props
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
         props.dispatch(saveUserAnswer(authedUser, question.id, answer))
      }
   }

   return (
      <form onSubmit={handleSubmit}>
         <h3 className="card-title">Would you rather...</h3>
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
      </form>
   )
}

function mapStateToProps( {authedUser} ) {
   return {
      authedUser,
   }
}

export default connect(mapStateToProps)(PollDetailsQuestion)