import React, { useState } from "react"
import { Button } from "react-bootstrap"

export default function NewQuestion (params) {
   const [option1, setOption1] = useState("")
   const [option2, setOption2] = useState("")

   return (
      <div className="card bg-light mb-3">
         <form>
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
            <Button>Submit</Button>
         </form>
      </div>      
   )
}