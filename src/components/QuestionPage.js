import React,{Component, Fragment} from "react";
import { connect } from "react-redux";
import Question from "./Question";
import PageNotFound from "./pageNotFound";
import ProtectedRoute from "../protectedRoutes";
import { handleAnswerQuestion } from "../actions/questions";

class QuestionPage extends Component{


    state={
        value:''
    }


  

    handleChange=(e)=>{

        this.setState(()=>({
            value:e.target.value
        }))




    }


    handleSubmit=(e)=>{

        e.preventDefault()

        const {
            id,
            authedUser,
            dispatch,
          } = this.props
        const { value: answer } = this.state


        console.log({
            authedUser,
            qid:id,
            answer
                })

      

        dispatch(handleAnswerQuestion({
            authedUser,
            qid:id,
            answer
                }))

        




    }


    render(){
        const {id,users,questions,authedUser} =this.props

        if(questions[id]===undefined)
        {
            return <ProtectedRoute  component={PageNotFound}/>

        }
        
        return(
            <div >
                <Question  key={id} id={id}/>


                


                {users[authedUser].answers.hasOwnProperty(id)?
                <Fragment>

                
               <div className='question' >
                  {`the option ${questions[id].optionOne.text}  has ${questions[id].optionOne.votes.length} votes
                   ${questions[id].optionOne.votes.length/(questions[id].optionOne.votes.length+questions[id].optionTwo.votes.length)*100}%` }
                   {users[authedUser].answers[id]==='optionOne'&&(
                       '               (your choice)'

                   )}
               </div>
                <div className='question' >
                {`the option ${questions[id].optionTwo.text}  has ${questions[id].optionTwo.votes.length} votes
                    ${questions[id].optionTwo.votes.length/(questions[id].optionOne.votes.length+questions[id].optionTwo.votes.length)*100}%` }
                           {users[authedUser].answers[id]==='optionTwo'&&(
                       '               (your choice)'

                   )}       
                 </div>
                 </Fragment>

              
               
                
                
                :



                <form type='submit' onSubmit={this.handleSubmit}>

               

                <select defaultValue=''   className='question' onChange={this.handleChange}>
                    <option value='' disabled={true}> please Choose answer
                    </option>
    
                    <option  value='optionOne' >
                        {questions[id].optionOne.text}
                    </option>
                    <option  value='optionTwo'>
                    {questions[id].optionTwo.text}
                    </option>
                </select>
                <button type='submit' className='btn question' disabled={this.state.value===''} >
                    submit
                </button>
                </form>
                }
                
            </div>
        )
    }
}

function mapStateToProps({authedUser,questions,users},props){
    const {id}=props.match.params
    return{
        id,
        users,
        questions,
        authedUser

    }
}




export default connect(mapStateToProps)(QuestionPage)