import React from "react"
import Poll from './Poll'

export default function PollList (props) {
 const { questions, users, name } = props

 return (
   <div>
      {questions.length === 0 ?
         <div class="alert alert-warning alert-dismissible fade show">
            {`No ${name} questions`}
         </div> 
         : <></>
      }
      {questions.map( question => (
         <Poll key={question.id} question={question} users={users} />
      ))} 
   </div>
 )
}