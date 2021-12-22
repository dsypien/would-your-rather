import React, { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import PollDetailsQuestion from "./PollDetailsQuestion"
import PollDetailsResult from "./PollDetailsResult"
import { useNavigate } from "react-router"

function PollDetails (props) {
   const { id } = useParams()
   const { questions, users, authedUser } = props
   const question = questions[id]
   const navigate = useNavigate()

   useEffect(() => {
      if(question === undefined){
         navigate("/404")
      }
   }, [navigate, question])

   let pollBody 

   if (question === undefined){
      pollBody = ""
   }
   else if (question && question.id in users[authedUser].answers) {
      pollBody = <PollDetailsResult question={question} />  
   }
   else if (authedUser) {
      pollBody = <PollDetailsQuestion question={question}/>
   }

   return (
      <div>
         <div className="card poll bg-light mt-3">
            <div className="card-header">
               { authedUser && question && `${users[question.author].name} asks:`}
            </div>
            <div className="flex-container">
               <div className=" avatar-container">
                  {authedUser && question && <img alt="avatar" className="avatar-lg" src={users[question.author].avatarURL} />}                  
               </div>
               <div className="card-body">                  
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