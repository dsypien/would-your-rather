import { _saveQuestion } from "../utils/_DATA"
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER' 

export function receiveQuestions (questions){
   return {
      type: RECEIVE_QUESTIONS,
      questions,
   }
}

function addQuestion (question, authedUser){
   return {
      type: ADD_QUESTION,
      question,
      authedUser,
   }
}

export function handleAddQuestion (optionOneText, optionTwoText) {
   return (dispatch, getState) => {
      const { authedUser } = getState()

      return _saveQuestion({
         optionOneText, 
         optionTwoText, 
         author: authedUser})
            .then((question) => {
               dispatch(addQuestion(question, authedUser))
            })
   }
}