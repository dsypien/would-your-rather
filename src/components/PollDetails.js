import React from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import PollDetailsQuestion from "./PollDetailsQuestion"
import PollDetailsResult from "./PollDetailsResult"

function PollDetails (props) {
   const { id } = useParams()
   const { questions, users, authedUser } = props
   const question = questions[id]

   let pollBody 

   if(question.id in users[authedUser].answers) {
      pollBody = <PollDetailsResult question={question} />  
   }
   else {
      pollBody = <PollDetailsQuestion question={question}/>
   }

   return (
      <div>
         <div className="card poll bg-light mb-3">
            <div className="card-header">
               { `${users[question.author].name} asks:`}
            </div>
            <div className="flex-container">
               <div className=" avatar-container">
                  <img alt="avatar" className="avatar-lg" src={users[question.author].avatarURL} />
               </div>
               <div className="poll-body">                  
                  {pollBody}
               </div>         
            </div>            
         </div>
      </div>
   )
}

function mapStateToProps( { questions, users, authedUser } ){   
   return {
      questions,
      users,
      authedUser,
   }
}

export default connect(mapStateToProps)(PollDetails)