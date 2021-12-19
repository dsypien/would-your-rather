import { RECEIVE_QUESTIONS, ADD_QUESTION } from "../actions/questions"
import { SAVE_USER_ANSWER } from "../actions/users"

export default function questions(state = {}, action){
   switch(action.type){
      case RECEIVE_QUESTIONS:
         return {
            ...state,
            ...action.questions
         }
      case ADD_QUESTION:
         return {
            ...state,
            [action.question.id]: action.question
         }
      case SAVE_USER_ANSWER:  
         return state
      default:
         return state
   }
}