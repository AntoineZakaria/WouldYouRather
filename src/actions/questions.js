
import { saveQuestion,saveQuestionAnswer } from "../utils/api"
import { userAddQuestion,userAnswerQuestion } from "./users"


export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'
export const ADD_QUESTION ='ADD_QUESTION'

export const ANSWER_QUESTION='ANSWER_QUESTION'



function answerQuestion({ authedUser, qid, answer }) {
    return {
      type: ANSWER_QUESTION,
      payload: { authedUser, qid, answer },
    }
  }




  export function handleAnswerQuestion({ authedUser, qid, answer }) {
    return (dispatch) => {
        console.log(authedUser)
        
      return saveQuestionAnswer(authedUser,qid,answer).then(() => {
            dispatch(userAnswerQuestion({ authedUser, qid, answer }))
            dispatch(answerQuestion({ authedUser, qid, answer }))
       
      })
    }
  }  



function addQuestion(question){
    return {
        type:ADD_QUESTION,
        question
    }
}


export function handleAddQuestion(question){
    return (dispatch)=>{
        

        return saveQuestion(question).then((question)=>{dispatch(addQuestion(question))
            dispatch(userAddQuestion({ authedUser: question.author, qid: question.id }))
        }
        )


    }

}








export function recieveQuestions(questions){
    return {
        type:RECIEVE_QUESTIONS,
        questions
    }
}

