import React from "react"

function PollDetailsOptionResult (params) {
   const { option, selectedCount, totalCount } = params

   return (
      <div className="card poll bg-light mb-3">
         <div>Would rather {option.text}</div>
         <div>{ 100 * (selectedCount / (totalCount))}%</div>
         <div>{`${selectedCount} out of ${totalCount} votes`}</div>
      </div>
   )
}

export default PollDetailsOptionResult