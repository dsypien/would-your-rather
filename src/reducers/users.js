import { RECEIVE_USERS, SAVE_USER_ANSWER } from "../actions/users"

export default function users(state = {}, action){
   switch (action.type) {
      case RECEIVE_USERS:
         return {
            ...state,
            ...action.users
         }
      case SAVE_USER_ANSWER:
         let answers = state[action.userId].answers
         answers[action.questionId] = action.answer

         return {
            ...state,
            [action.userId] : {
               ...state[action.userId],
               answers: answers
            }
         }
      default:
         return state
   }
}
