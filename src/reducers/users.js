import { RECEIVE_USERS, SAVE_USER_ANSWER } from "../actions/users"
import { ADD_QUESTION } from "../actions/questions"

export default function users(state = {}, action){
   switch (action.type) {
      case RECEIVE_USERS:
         return {
            ...state,
            ...action.users
         }
      case SAVE_USER_ANSWER:         
         let answers = state[action.authedUser].answers
         answers[action.qid] = action.answer

         return {
            ...state,
            [action.authedUser] : {
               ...state[action.authedUser],
               answers: answers
            }
         }
      case ADD_QUESTION:
         return {
            ...state,
            [action.authedUser] : {
               ...state[action.authedUser],
               questions: state[action.authedUser].questions.concat(action.question.id)
            }
         }            
      default:
         return state
   }
}
