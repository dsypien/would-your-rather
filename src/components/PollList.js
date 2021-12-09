import React from "react"
import Poll from './Poll'

export default function PollList (props) {
 const { questions, users } = props

 return (
   <div>
      {questions.map( question => (
         <Poll key={question.id} question={question} users={users} />
      ))} 
   </div>
 )
}