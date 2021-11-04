import {RECIEVE_QUESTIONS,ADD_QUESTION,ANSWER_QUESTION}from '../actions/questions'

export default function questions( state={},action){
    switch(action.type){
        case RECIEVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }

        case ADD_QUESTION:
            return{
                ...state,
                [action.question.id]:action.question

            }

        case ANSWER_QUESTION:
            const { authedUser, qid, answer } = action.payload
            const targetOption = state[qid][answer]
            return {
                  ...state,
                  [qid]: {
                    ...state[qid],
                    [answer]: {
                    ...targetOption,
                    votes: [...targetOption.votes, authedUser],
                    },
                  },
                }    

        default : return state    
    }

}