import { getInitialData } from "../utils/api";
import { recieveUsers } from "./users";
import { recieveQuestions } from "./questions";

export function handleInitialData(){
    return (dispatch)=>{
        return getInitialData()
        .then(({users,questions})=>{
            //dispatch(setAuthedUser(AUTHED_ID))

            dispatch(recieveUsers(users))
            dispatch(recieveQuestions(questions))

        })
    }
}