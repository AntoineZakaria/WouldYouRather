


export const RECIEVE_USERS = 'RECIEVE_USERS'

export const USER_ADD_QUESTION = 'USER_ADD_QUESTION'

export const USER_ANSWER_QUESTION = 'USER_ANSWER_QUESTION'

export function recieveUsers(users){
    return {
        type:RECIEVE_USERS,
        users
    }
}
export function userAddQuestion({ authedUser, qid }) {
    return { type: USER_ADD_QUESTION,
         payload: { authedUser, qid } }
  }



  export function userAnswerQuestion({ authedUser, qid, answer }) {
    return { type: USER_ANSWER_QUESTION, payload: { answer, qid, authedUser } }
  }  