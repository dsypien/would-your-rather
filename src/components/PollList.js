import React from "react"
import Poll from './Poll'

export default function PollList (props) {
 const { questions, users } = props

 return (
   <div>
      {questions.map( question => (
         <Poll question={question} users={users} />
      ))} 
   </div>
 )
}