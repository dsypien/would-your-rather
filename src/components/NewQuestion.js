import React, { useState } from "react"
import { Button } from "react-bootstrap"
import { handleAddQuestion } from "../actions/questions"
import { connect } from "react-redux"

function NewQuestion (props) {
   const [option1, setOption1] = useState("")
   const [option2, setOption2] = useState("")

   function handleSubmit (e) {
      e.preventDefault();

      if (option1.trim() !== "" && option2.trim() !== "") {
         props.dispatch(handleAddQuestion(option1, option2))
      }

      //Todo notify user that something happened
   }

   return (
      <div className="card bg-light mb-3">
         <form onSubmit={(e) => handleSubmit(e)}>
            <h3 className="card-header">Create New Question</h3>
            <div>Complete the question:</div>
            <h5>Would you rather...</h5>
            <input type="text" 
                   value={option1} 
                   onChange={ (e) => setOption1(e.target.value) }
                   placeholder="Enter Option One Text Here" />
            <div>OR</div>
            <div>
               <input type="text" 
                     value={option2} 
                     onChange={ (e) => setOption2(e.target.value) }
                     placeholder="Enter Option Two Text Here" />
            </div>
            <Button type="submit">Submit</Button>
         </form>
      </div>      
   )
}

export default connect()(NewQuestion)