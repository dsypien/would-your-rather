import React from "react"
import { ProgressBar } from "react-bootstrap"

function PollDetailsOptionResult (params) {
   const { option, selectedCount, totalCount, selectedByAuthedUser } = params
   const percentSelected = 100 * (selectedCount / totalCount)

   return (
      <div className={`${selectedByAuthedUser ? "selected-option": ""} card poll-option bg-light mb-3`}>
         <div className="poll-option-text mb-3">
            Would rather {option.text}
            {selectedByAuthedUser && <div className="user-choice">Your choice</div>}
         </div>         
         <ProgressBar 
            className="mb-3"
            now={percentSelected} 
            label={`${percentSelected}%`}
            variant="info" />
         <div className="poll-option-text">
            {`${selectedCount} out of ${totalCount} votes`}
         </div>
      </div>
   )
}

export default PollDetailsOptionResult