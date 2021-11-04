import {RECIEVE_USERS,USER_ADD_QUESTION,USER_ANSWER_QUESTION}from '../actions/users'

export default function users( state={},action){
    switch(action.type){
        case RECIEVE_USERS:
            return {
                ...state,
                ...action.users
            }

        case USER_ADD_QUESTION:
            const authedUser = action.payload.authedUser
            const questionId = action.payload.qid
            return {
                ...state,
                [authedUser]: {
                ...state[authedUser],
                questions: [...state[authedUser].questions, questionId],
                },
                }

        case USER_ANSWER_QUESTION:
            return {
                  ...state,
                      [action.payload.authedUser]: {
                        ...state[action.payload.authedUser],
                        answers: {
                          ...state[action.payload.authedUser].answers,
                          [action.payload.qid]: action.payload.answer,
                        },
                      },  
                    }  
        default :
        return state    
    }

}