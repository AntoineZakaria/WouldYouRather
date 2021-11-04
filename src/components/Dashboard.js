import React,{Component} from "react";
import { connect } from "react-redux";
import Question from "./Question";



class Dashboard extends Component{

    state = {

        tab:'unansweredQuestions'
    }

    goToAnswered =()=>{
        this.setState(()=>({
            tab:'answeredQuestions'
        }))
    }
    goToUnanswered =()=>{
        this.setState(()=>({
            tab:'unansweredQuestions'
        }))
    }


    render(){
        const{answeredQuestions,unansweredQuestions}=this.props

        return(
            <div >

            <span className="question">
               

                <button className={this.state.tab==='unansweredQuestions'? 'activebut':null } onClick={this.goToUnanswered}>
                UnAnsweredQuestions {unansweredQuestions.length}

                </button>
                <button className={this.state.tab==='answeredQuestions'? 'activebut':null}  onClick={this.goToAnswered}>
                AnsweredQuestions {answeredQuestions.length}

                </button>
                </span>

                <div>
                    
                {this.state.tab==='answeredQuestions' ?
                answeredQuestions.map(id=>(
                    <div key ={id}>
                        <Question key={id} id={id}/>

                    </div>
                    
                    
                )):
                unansweredQuestions.map(id=>(
                    <div key ={id}>
                         <Question key={id} id={id}/>
                    </div>
                ))}
                    
                </div>
                </div>


                



                
            
            

                
           
            
        )
    }
}

function mapStateToProps({authedUser,questions,users}){

    const answeredQuestions = Object.keys(questions)
    .filter(qid=>users[authedUser].answers.hasOwnProperty(qid))
    .sort((a,b)=>questions[b].timestamp-questions[a].timestamp)


    const unansweredQuestions = Object.keys(questions)
    .filter(qid=>!users[authedUser].answers.hasOwnProperty(qid))
    .sort((a,b)=>questions[b].timestamp-questions[a].timestamp)


    return{
        answeredQuestions,
        unansweredQuestions,
    }

}


 export default connect(mapStateToProps)(Dashboard)