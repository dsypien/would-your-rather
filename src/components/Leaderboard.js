import React from "react"
import { connect } from "react-redux"

function Leaderboard (props) {   
   let { leaderboard } = props

   return (
      <div>
         { Object.keys(leaderboard).map(userId => (
            <div key={userId} className="card poll bg-light mt-3">
               <div className="flex-container">
                  <div className=" avatar-container">
                     <img alt="avatar" className="avatar-lg" src={leaderboard[userId].avatarURL} />
                  </div>                  
                  <div className="card-body">                  
                     <h3 className="card-title">{leaderboard[userId].name}</h3>
                     <div>Answered Questions <span className="float-right">{leaderboard[userId].numAnswers}</span></div>
                     <hr />
                     <div>Created Questions <span className="float-right">{leaderboard[userId].numQuestions}</span></div>
                  </div>    
                  <div className="score-container"> 
                     <div className="card poll bg-light">
                        <h3 className="card-header">SCORE</h3>
                        <div className="center score-body">
                           {leaderboard[userId].score}
                        </div>
                     </div>
                  </div>     
               </div>            
            </div>
         ))}
      </div>
   )
}

function mapStateToProps ({ users }) {
   return {
      leaderboard: Object.keys(users)                         
                         .reduce( (acc, userId) => { 
                            const user = {
                               name: users[userId].name,
                               avatarURL: users[userId].avatarURL,
                               numQuestions: users[userId].questions.length,
                               numAnswers: Object.keys(users[userId].answers).length,
                               score: users[userId].questions.length + Object.keys(users[userId].answers).length
                            }
                        
                            acc.push(user)
                            return acc
                         }, [])     
                         .sort((a,b) => {
                            return a.score < b.score ? 1 : -1
                         })                    
   }
}

export default connect(mapStateToProps)(Leaderboard)
