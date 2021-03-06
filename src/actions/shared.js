import { receiveQuestions } from "./questions"
import { receiveUsers } from "./users"
import { getInitialData } from "../utils/api"

export function handleInitialData() {
   return (dispatch) => {
      return getInitialData()
         .then(({ users, questions, authedUser }) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
         })
   } 
}