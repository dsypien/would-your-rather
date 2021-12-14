import { _saveQuestionAnswer } from "../utils/_DATA"
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'

function saveUserAnswer(authedUser, qid, answer) {
   return {
      type: SAVE_USER_ANSWER,
      authedUser,
      qid,
      answer,
   }
}

export function handleSaveUserAnswer(qid, answer) {
   return (dispatch, getState) => {
      const { authedUser } = getState()

      return _saveQuestionAnswer({
         authedUser,
         qid,
         answer})
            .then(() => {
               const { users } = getState()
               dispatch(saveUserAnswer(authedUser, qid, answer))
            })
   }
}

export function receiveUsers(users) {
   return {
      type: RECEIVE_USERS,
      users,
   }   
}