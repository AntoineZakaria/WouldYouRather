import React,{Component}from 'react'
import { connect } from 'react-redux'
import{Link} from 'react-router-dom'



class Question extends Component{


    render(){

        const {Question,id} = this.props
        const {users}=this.props


        
        return(

            <Link to={`/questions/${id}`} className='question'>
                <img
                src={users.filter(user=>(user.id===Question.author))[0].avatarURL}
                alt={`avatar of:${users.filter(user=>(user.id===Question.author))[0].id}`}
                className='avatar'/>

                {Question.author}
                <div>
                    <p>
                    Would You Rather: 
                    </p>
                    
                   {Question.optionOne.text}<br/> or<br/>
                   


                     {` ${Question.optionTwo.text}`}


                </div>
               
            </Link>
            




        )
    }
}

function mapStateToProps({questions,users},{id}){
    return {Question: Object.keys(questions).map((id) => ({
        id: id,
        author: questions[id].author,
        optionOne: questions[id].optionOne,
        optionTwo: questions[id].optionTwo

    })).filter(question=>(
        question.id===id ))[0],
        users: Object.keys(users).map((id) => ({
			id: id,
			name: users[id].name,
            avatarURL:users[id].avatarURL
		})),
        id,
    }
    

  
    
	

}


export default connect(mapStateToProps)(Question)