import React ,{Component} from 'react'
import { connect } from 'react-redux'
import {handleAddQuestion} from '../actions/questions'
import {Redirect} from 'react-router-dom'



class NewQuestion extends Component{
    state ={
       optionOneText:'',
       optionTwoText:'',
       toHome:false
    }


    handleSubmit =(e)=>{
        e.preventDefault()

        const {optionOneText,optionTwoText}=this.state 
        const{dispatch,authedUser}=this.props

        dispatch(handleAddQuestion({author:authedUser,optionOneText,optionTwoText}))
        this.setState(()=>({
            optionOneText:'',
            optionTwoText:'',
            toHome:true
        }))







    }

    handleChangeOne =(e)=>{
        const text=e.target.value
        this.setState(()=>({
            optionOneText:text,
            
        }))
       


    }

    handleChangeTwo =(e)=>{
        const text=e.target.value
        this.setState(()=>({
            
            optionTwoText:text
        }))

      



    } 
    



    render(){
        const{optionOneText,optionTwoText,toHome}=this.state
        if(toHome){
            return <Redirect to="/"/>

        }
        return (

            <div>
                <h3 className='center'>Would You Rather?</h3>

                <form className='new-question' onSubmit={this.handleSubmit}>


                    <textarea placeholder='Option One'
                     value={optionOneText}
                     onChange={this.handleChangeOne}/>

                    


                    <textarea placeholder='Option Two'
                     value={optionTwoText}
                     onChange={this.handleChangeTwo}/>


                     <button type='submit' disabled={this.state.optionOne===''||this.state.optionTwo===''}>
                         submit
                     </button>

                    

                        
                   

                </form>


            </div>
        )
    }
}

function mapStateToProps({authedUser}){
    return{authedUser

    }
}

export default connect(mapStateToProps)(NewQuestion)